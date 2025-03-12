import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component'; // Importe o componente

const routes: Routes = [
  { path: 'cliente/cadastrar', component: CadastrarComponent }, // Definição da rota correta
  { path: '', redirectTo: 'cliente/cadastrar', pathMatch: 'full' } // Redirecionamento para a tela inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Certifique-se de usar forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }
