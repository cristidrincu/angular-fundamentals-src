import { Component} from "@angular/core";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      <button (click)="handleClick()">Learning Angular 2</button>
      <div>
        <img [src]="logo" alt=""/>
        <div>
          <!--(input) === onInputChange execute handleInput function-->
          <input type="text" [value]="name" (input)="handleInput($event)">
        </div>
        <div>{{ name }}</div>
      </div>
    </div>`
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  name: string = 'Cristian';

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
   this.name = 'Drincu';
  }
}
