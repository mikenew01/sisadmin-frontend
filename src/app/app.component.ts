import { Component } from '@angular/core';

@Component({
  selector: 'sisadmin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-sisadmin';


  public localStorage(item: string): any {
    return localStorage.getItem(item);
  }

}
