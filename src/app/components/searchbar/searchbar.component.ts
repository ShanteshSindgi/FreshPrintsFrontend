import { Component, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchTerm: string = '';
  @Output() searchClick = new EventEmitter();
  search() {
    console.log("Buttn clicked", this.searchTerm);
    this.searchClick.emit(this.searchTerm)
    this.searchTerm = ''

  }

}
