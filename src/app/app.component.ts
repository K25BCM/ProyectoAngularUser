import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;
  pruebaInput: string;
  placeholderName: string;
  labelName: string;
  msgEvento: string;

  ngOnInit(): void {
    this.title = 'Prueba en Angular';
    this.placeholderName = 'A buscar...';
    this.labelName = 'Búsqueda';
  }

  eventoMsg(event){
    this.msgEvento = "Query: "+event.query+". Resultado: "+event.result+".";
  }
}
