import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogShellModule } from '@e-proc/catalog/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CatalogShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
