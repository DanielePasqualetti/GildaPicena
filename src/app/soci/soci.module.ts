import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SociRoutingModule } from './soci-routing.module';
import { SociComponent } from './soci.component';


@NgModule({
  declarations: [
    SociComponent
  ],
  imports: [
    CommonModule,
    SociRoutingModule
  ]
})
export class SociModule { }
