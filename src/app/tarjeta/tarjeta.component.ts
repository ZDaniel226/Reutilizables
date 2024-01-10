import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent  implements OnInit {

  @Input() image: string ="";//parametro de imagen que recibe una ruta
  @Input() description: string="";//parametro de descripción recibe un texto
  constructor() { }

  ngOnInit() {}

}
