import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyResponse } from './models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  http = inject(HttpClient);

  search(searchTerm: string, offset = 0): Observable<GiphyResponse> {
    return this.http.get<GiphyResponse>(
      'https://api.giphy.com/v1/gifs/search',
      {
        params: {
          api_key: environment.api_key,
          q: searchTerm,
          offset: `${offset}`,
        },
      }
    );
  }
}
