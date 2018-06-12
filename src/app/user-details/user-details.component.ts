import { Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges} from '@angular/core';
import { DataService } from '../github/data.service';
import { MatPaginator } from '@angular/material';
import { FollowersDataSource } from './followers-data-source';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges {
   

  @Input() username: string;
  
  private followersPager : MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.followersPager = mp;
    if(this.followersPager) {
      this.followersPager.page
      .pipe(
        tap(() => this.loadFollowersPage(null))
      )
      .subscribe();
    }
  }

  user: any;
  followersDataSource: FollowersDataSource;

  constructor(private dataProvider: DataService) { 
    this.followersDataSource = new FollowersDataSource(this.dataProvider);
  }
  
  ngOnInit() {
    this.loadFollowersPage(null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.username) {
      this.loadUser(changes.username.currentValue);
    }
  }
  
  ngAfterViewInit() {
    

  }


  loadUser(username: string) {
    this.username = username;
    this.dataProvider.userDetails(this.username).subscribe(
      (userData: any) => {
        this.user = userData;
      }
    );
    this.loadFollowersPage(this.username);
  }

  loadFollowersPage(username: string) {
    if(!username) {
      username = this.username || this.user.username;
    }
    let pageIndex = this.followersPager? this.followersPager.pageIndex || 0 : 0;
    let pageSize = this.followersPager?  this.followersPager.pageSize || 10 : 10;
    this.followersDataSource.loadFollowers(
        username,
        '',
        'asc',
        pageIndex,
        pageSize);
  }

}
