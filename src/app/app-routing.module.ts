import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './page/edit-page/edit-page.component';
import { ShowPageComponent } from './page/show-page/show-page.component';

const routes: Routes = [
  { path: '', component: EditPageComponent},
  { path: 'show', component: ShowPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }