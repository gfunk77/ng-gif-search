import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CollegeService } from './college.service';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { SearchComponent } from './search/search.component';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'college';
  collegeService = inject(CollegeService);
  page = 0;
  private pageChange = new Subject<number>();
  images$!: Observable<string[]>;
  searchTerm = '';

  ngOnInit(): void {
    this.images$ = this.pageChange.pipe(
      switchMap((page) => this.collegeService.search(this.searchTerm, page)),
      map((resp) => resp.data.map((d: any) => d.images.fixed_width.url))
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
