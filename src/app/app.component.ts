import { Component } from '@angular/core';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public loaderService: LoaderService
  ) { }  

  title = 'todo-devrank-agung';
}
