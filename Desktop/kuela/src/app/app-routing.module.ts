import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { RelatoComponent } from './componentes/relato/relato.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'calculo', component: CalculoComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: 'relato', component: RelatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
