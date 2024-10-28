import { inject, Injectable, signal } from '@angular/core';
import { Gif, GiphyResponse } from './models';
import { GifService } from './gif.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  gifService = inject(GifService);
  page = signal(0);
  searchTerm = signal<string>('');
  results = signal<Gif[]>([]);
  private cache = new Map<number, Gif[]>();

  fetchResults(): void {
    const term = this.searchTerm();
    const page = this.page();

    if (this.cache.has(page)) {
      this.results.set(this.cache.get(page)!);
      return;
    }

    this.gifService.search(term, page).subscribe((resp: GiphyResponse) => {
      const gifs = resp.data.map((item) => ({
        image: item.images.fixed_width.url,
        title: item.title,
        rating: item.rating,
      }));
      this.cache.set(page, gifs);
      this.results.set(gifs);
    });
  }

  lookup(search: string): void {
    this.searchTerm.set(search);
    this.page.set(0);
    this.cache.clear();
    this.fetchResults();
  }

  nextPage(): void {
    this.page.update((page) => page + 50);
    this.fetchResults();
  }

  prevPage(): void {
    this.page.update((page) => (page > 0 ? page - 50 : 0));
    this.fetchResults();
  }
}
