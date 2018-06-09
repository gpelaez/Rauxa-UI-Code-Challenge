import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { DataService } from '../github/data.service';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: any;

  followersPager: MatPaginator;
  @ViewChild('followersPager') set matPaginator(mp: MatPaginator) {
    this.followersPager = mp;
  }

  
  currentFollowers = [];

  constructor(private dataProvider: DataService) { 
    this.user = null;
  }

  ngAfterViewInit() {
    this.paginator = this.followersPager;
  }

  ngOnInit() {
    
  }

  loadUser(username: string) {
    this.dataProvider.userDetails(username).subscribe(
      (userData: any) => {
        userData['followers_data'] = [];
        this.user = userData;
        this.getFollowers();
        console.log(userData);
      }
    )
  }
  getFollowers() {
    this.dataProvider.userFollowers(this.user.login).subscribe((date) => {
      this.user['followers_data'] = date;
    });
    this.followersPager.page.subscribe(page =>  {
      console.log(page);
    });
  }

}