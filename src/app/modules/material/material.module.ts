import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules Import
import { MatMenuModule }    from '@angular/material/menu';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule }    from '@angular/material/card';
import { MatTableModule }    from '@angular/material/table';
import { MatListModule }    from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTooltipModule}   from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule
  ]
})

export class MaterialModule { }