import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CollegeService } from './college.service';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';
import { SearchComponent } from './search/search.component';
import { ImageComponent } from './image/image.component';
import { Gif, GiphyResponse } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    SearchComponent,
    ImageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
