import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
      MatTableModule,
      MatCardModule,
      MatToolbarModule,
    ]
})
export class AppMaterialModule { }
