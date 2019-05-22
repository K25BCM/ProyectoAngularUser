import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  query: string;
  result: string;
  listUsers: any;
  @Input() labelName: string;
  @Input() placeholderName: string;
  @Output() eventoMsg = new EventEmitter();


  constructor(private service: OwnerServiceService) { }

  ngOnInit() {
    this.query = '';
    this.result = '';
    this.getUsers();
  }

  onClick() {
    this.result = "Resultado: Consulta realizada con query '" + this.query + "'";
    this.eventoMsg.emit({query: this.query, result: this.result});
  }

  getUsers() {
    this.service.getUsers().subscribe(data => {
      this.listUsers = data;
      console.log(this.listUsers);
    });
  }

}
