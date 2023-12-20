import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcomodacoesComponent } from './acomodacoes/acomodacoes.component';
import { HospedesComponent } from './hospedes/hospedes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'acomodacoes', component: AcomodacoesComponent},
  {path: 'hospedes', component: HospedesComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'usuarios', component: UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
