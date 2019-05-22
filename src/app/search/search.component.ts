import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  result: string;
  @Input() labelName: string;
  @Input() placeholderName: string;
  @Output() eventoMsg = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.query = '';
    this.result = '';
  }

  onClick() {
    this.result = "Resultado: Consulta realizada con query '" + this.query + "'";
    this.eventoMsg.emit({query: this.query, result: this.result});
  }

}
