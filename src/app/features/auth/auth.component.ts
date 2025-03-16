import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'workroom-auth',
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet>`,
  styles: ``,
})
export class AuthComponent {}
