import { DataSource } from "@angular/cdk/table";
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { DataService } from "../github/data.service";
import { CollectionViewer } from "@angular/cdk/collections";
import { catchError, finalize } from "rxjs/operators";
import { MAT_CHIPS_DEFAULT_OPTIONS } from "@angular/material";

export class FollowersDataSource implements DataSource<any> {

    private followersSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private username: string = null;
    private followers :any[] = null;

    private dataSubscription: Subscription = null;;
    public loading$ = this.loadingSubject.asObservable();

    constructor(private dataProvider: DataService) {}

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.followersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.followersSubject.complete();
        this.loadingSubject.complete();
    }
    
    loadFollowers(username: string, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        
        // if(this.username === username && this.followers !== null) {
        //     this.followersSubject.next(this.followers.splice(pageIndex*pageSize, pageSize));
        //     return;
        // } 
        this.username = username;
        this.loadingSubject.next(true);
        this.dataSubscription = this.dataProvider.userFollowers(username, pageSize, pageIndex + 1)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            ).subscribe((data) => {
                this.followersSubject.next(data);
            });
    }    
}
