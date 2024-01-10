import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage implements OnInit {

  colores = ['#FF5733', '#33FF57', '#5733FF', '#FF3333', '#33FFFF'];

  constructor() { }

  ngOnInit() {
  }

}
