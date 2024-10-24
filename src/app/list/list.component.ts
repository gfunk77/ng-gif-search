import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';
import { Gif, GiphyResponse } from '../models';
import { CollegeService } from '../college.service';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ImageComponent, SearchComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  collegeService = inject(CollegeService);

  page = signal(0);
  searchTerm = signal('');
  results = computed(() => {
    const term = this.searchTerm();
    const page = this.page();
    return this.collegeService.search(term, page).pipe(
      map((resp: GiphyResponse) =>
        resp.data.map((item: any) => ({
          image: item.images.fixed_width.url,
          title: item.title,
          rating: item.rating,
        }))
      )
    );
  });

  ngOnInit(): void {
    this.page.set(0);
  }

  lookup(search: string): void {
    this.searchTerm.set(search);
    this.page.set(0);
  }

  nextPage(): void {
    this.page.update((page) => page + 50);
  }

  prevPage(): void {
    this.page.update((page) => (page > 0 ? page - 50 : 0));
  }
}
