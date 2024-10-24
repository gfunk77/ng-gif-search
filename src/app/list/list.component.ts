import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  page = 0;
  private pageChange = new Subject<number>();
  results$!: Observable<Gif[]>;
  searchTerm = '';

  ngOnInit(): void {
    this.results$ = this.pageChange.pipe(
      switchMap((page) => this.collegeService.search(this.searchTerm, page)),
      tap((resp) => console.log(resp.data)),
      map((resp: GiphyResponse) =>
        resp.data.map((d: any) => ({
          image: d.images.fixed_width.url,
          title: d.title,
          rating: d.rating,
        }))
      )
    );
  }

  lookup(search: string): void {
    this.searchTerm = search;
    this.pageChange.next(0);
  }

  nextPage(): void {
    this.page += 50;
    this.pageChange.next(this.page);
  }

  prevPage(): void {
    if (this.page > 0) this.page -= 50;
    this.pageChange.next(this.page);
  }
}
