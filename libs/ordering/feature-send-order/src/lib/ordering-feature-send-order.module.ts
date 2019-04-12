import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogApiModule } from '@e-proc/catalog/api';


@NgModule({
  imports: [
    CommonModule,
    CatalogApiModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class OrderingFeatureSendOrderModule {}
