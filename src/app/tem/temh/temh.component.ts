import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
  styles: ``
})
export class TemhComponent {
 @Input() mensaje:string='';
 //Variabale que pueda recibir ese parametro
}
