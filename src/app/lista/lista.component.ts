import { Component} from '@angular/core';
import {Lista} from "../lista";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  dados = [];
  lista:Lista = { 
      Firstname: "",
      Lastname:"",
      Address: "",
      State:"",
      City: "",
      Cultures:"",
      Phone:"",
      Crea:"",
      Crea_State:""
    };
    add(){
      let lista = Object.assign({},this.lista);
      this.dados.push(lista);
    } 
  }