import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ]
})

export class MaterialModule { }
