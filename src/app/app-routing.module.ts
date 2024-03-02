import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NewActivityComponent } from './new-activity/new-activity.component';

const routes: Routes = [
  {path: '', component: ContentComponent, pathMatch: 'full'},
  {path: 'new-activity/:id', component: NewActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
