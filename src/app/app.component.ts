import { Component } from '@angular/core';
import { familia } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho';
  lista_familia = familia;
}
