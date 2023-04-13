import { Component } from '@angular/core';
import { SearchType } from 'src/app/Types/historyTypes';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})


export class HistoryComponent {
  data: SearchType[] = []
  constructor() {
    const searchHistory = localStorage.getItem("searchHistory")
    if (searchHistory) {
      this.data = JSON.parse(searchHistory)
      console.log("tsd", this.data)
    }
  }

  deleteRecords() {
    localStorage.removeItem("searchHistory")
    this.data = []
  }

}


