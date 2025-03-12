import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar/cadastrar.component'; // Importe o componente
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    CadastrarComponent // Importe o componente standalone aqui
  ]
})
export class ClienteModule { }