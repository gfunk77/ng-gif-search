import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  http = inject(HttpClient);

  search(searchTerm: string, offset = 0): Observable<any> {
    return this.http.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: '6EVcVP3DXqZEg9lFh9tuCUcdF41DLsgP',
        q: searchTerm,
        offset: `${offset}`,
      },
    });
  }
}
