import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThreeContainerComponent } from './ui/three-container/three-container.component';
import { GeometryFormComponent } from './ui/geometry-form/geometry-form.component';
import { GeometryListComponent } from './ui/geometry-list/geometry-list.component';
import { EditPageComponent } from './page/edit-page/edit-page.component';
import { ShowPageComponent } from './page/show-page/show-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SceneFormComponent } from './ui/scene-form/scene-form.component';
import { ScenePageComponent } from './page/scene-page/scene-page.component'

@NgModule({
  declarations: [AppComponent, ThreeContainerComponent, GeometryFormComponent, GeometryListComponent, EditPageComponent, ShowPageComponent, SceneFormComponent, ScenePageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
