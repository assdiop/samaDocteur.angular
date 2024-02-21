import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocteurModuleRoutingModule } from './docteur-module-routing.module';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocteurModuleRoutingModule,
    DataTablesModule,
  ]
})
export class DocteurModuleModule { }
