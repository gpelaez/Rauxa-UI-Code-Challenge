import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule, MatOptionModule, MatCardModule, MatListModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatPaginatorModule, MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatAutocompleteModule, 
    MatInputModule,
    MatOptionModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    MatProgressSpinnerModule
  ]
})
export class AddMaterialModule { }
