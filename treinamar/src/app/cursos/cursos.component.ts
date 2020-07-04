import { Component, OnInit } from '@angular/core';
import { treinamentos } from '../treinamentos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  treinamentos = treinamentos;

  share() {
    window.alert('O treinamento foi compartilhado!');
  }
  
  onNotify() {
    window.alert('Você será avisado quando estiver a venda');
  }
  constructor() { }

  ngOnInit() {
  }

}