import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThreeContainerComponent } from './ui/three-container/three-container.component';
import { GeometryFormComponent } from './ui/geometry-form/geometry-form.component';
import { GeometryListComponent } from './ui/geometry-list/geometry-list.component';
import { EditPageComponent } from './page/edit-page/edit-page.component';
import { ShowPageComponent } from './page/show-page/show-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ThreeContainerComponent, GeometryFormComponent, GeometryListComponent, EditPageComponent, ShowPageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
