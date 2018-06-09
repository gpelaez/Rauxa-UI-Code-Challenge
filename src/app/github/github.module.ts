import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FollowersSearchComponent } from './followers-search/followers-search.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddMaterialModule } from '../add-material/add-material.module';

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    AddMaterialModule,
  ],
  declarations: [
    FollowersSearchComponent,
    UserDetailsComponent
  ],
  providers: [
    DataService
  ],
  exports: [
    FollowersSearchComponent
  ]
})
export class GithubModule { }
