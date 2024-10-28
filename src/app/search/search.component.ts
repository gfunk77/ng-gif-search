import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  hasResults = input<boolean>(false);
  previous = output<void>();
  next = output<void>();
  searchTerm = output<string>();
  word = signal('');

  searchInput(term: string) {
    this.searchTerm.emit(term);
    this.word.update(() => '');
  }
}
