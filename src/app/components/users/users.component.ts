import { Component } from '@angular/core';
import { SearchType } from '../../Types/historyTypes';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private searchService: SearchService) { }

  isLoading = false;
  noData = false;
  userData: SearchType[] = []

  handleSearch(searchTerm: string) {
    if (searchTerm == '') {
      alert("please enter something to search")
      return;
    }
    this.isLoading = true;

    this.searchService.searchUsers(searchTerm).subscribe((data) => {
      this.isLoading = false;
      const searchHistory: SearchType[] = []
      if (data.items.length > 0) {
        this.userData = data.items;
        console.log("usedaa", this.userData)
        searchHistory.push({
          searchTerm: searchTerm,
          searchHistory: this.userData
        })

        this.searchService.addItemsToLocalStorage(searchHistory)
        this.noData = false
      }
      else {
        this.noData = true;
        searchHistory.push({
          searchHistory: [],
          searchTerm: searchTerm
        })
        this.searchService.addItemsToLocalStorage(searchHistory)

      }
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    )
  }
}


