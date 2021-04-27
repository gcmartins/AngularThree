import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThreeContainerComponent } from './ui/three-container/three-container.component';
import { GeometryFormComponent } from './ui/geometry-form/geometry-form.component';
import { GeometryListComponent } from './ui/geometry-list/geometry-list.component';

@NgModule({
  declarations: [AppComponent, ThreeContainerComponent, GeometryFormComponent, GeometryListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
