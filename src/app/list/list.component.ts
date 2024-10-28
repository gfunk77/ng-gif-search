import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';
import { Gif, GiphyResponse } from '../models';
import { GifService } from '../gif.service';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ImageComponent, SearchComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  gifService = inject(GifService);
  stateService = inject(StateService);

  page = this.stateService.page;
  searchTerm = this.stateService.searchTerm;
  results = this.stateService.results;
  showButtons = computed(() => this.results().length > 0);
  title = signal('Giphy Search');

  ngOnInit(): void {
    if (this.searchTerm()) {
      this.stateService.fetchResults();
    }
  }

  lookup(search: string): void {
    this.stateService.lookup(search);
  }

  nextPage(): void {
    this.stateService.nextPage();
  }

  prevPage(): void {
    this.stateService.prevPage();
  }
}
