import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'workroom-auth',
  imports: [RouterOutlet],
  template: `
    <div class="min-h-dvh lg:h-dvh">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``
})
export class AuthComponent {
}
