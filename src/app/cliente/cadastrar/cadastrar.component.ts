import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  cliente = {
    nome: '',
    email: '',
    senha: ''
  };

  cadastrar() {
    console.log('Cliente cadastrado:', this.cliente);
  }
}