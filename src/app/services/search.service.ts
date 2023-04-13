import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchType } from '../Types/historyTypes';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = environment.apiUrl;
  private token = environment.authToken;
  private max = 10;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  });


  constructor(private http: HttpClient) { }


  searchUsers(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/users?q=${query}&per_page=${this.max}`;
    return this.http.get(url, { headers: this.headers });
  }

  addItemsToLocalStorage(searchHistory: SearchType[]) {
    const data = localStorage.getItem("searchHistory");
    if (data) {
      const searchArray = JSON.parse(data) as SearchType[];
      console.log("seatr", searchArray)
      searchArray.push({
        searchTerm: searchHistory[0].searchTerm,
        searchHistory: searchHistory[0].searchHistory
      })
      localStorage.setItem("searchHistory", JSON.stringify(searchArray))

    }
    else {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
    }
  }
}
