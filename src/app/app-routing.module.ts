import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NewActivityComponent } from './new-activity/new-activity.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'new-activity', component: NewActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
