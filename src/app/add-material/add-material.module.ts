import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule, MatOptionModule, MatCardModule, MatListModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatPaginatorModule } from '@angular/material';


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
    MatPaginatorModule
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
    MatPaginatorModule
  ]
})
export class AddMaterialModule { }
