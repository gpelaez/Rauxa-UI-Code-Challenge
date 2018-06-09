import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UserDetailsComponent } from '../../user-details/user-details.component';


@Component({
  selector: 'app-followers-search',
  templateUrl: './followers-search.component.html',
  styleUrls: ['./followers-search.component.css']
})
export class FollowersSearchComponent implements OnInit {

  loading: boolean;
  q: string;
  searchResults: any;

  searchTerm: FormControl = new FormControl();
  searchResult = [];

  @ViewChild('userDetails') userDetails : UserDetailsComponent;

  constructor(private dataProvider: DataService) {
    this.searchTerm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(data => {
          this.dataProvider.searchUsers(data).subscribe(response => {
            this.searchResult = response.items
          });
      });
  }
  userSelected(item: any) {
    let username = item.option.value;
    this.userDetails.loadUser(username);
  }

  ngOnInit() {
  }

}
