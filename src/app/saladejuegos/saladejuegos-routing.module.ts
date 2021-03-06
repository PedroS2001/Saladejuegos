import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../components/ahorcado/ahorcado.component';
import { ChatComponent } from '../components/chat/chat.component';
import { JuegopropioComponent } from '../components/juegopropio/juegopropio.component';
import { MayorMenorComponent } from '../components/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from '../components/preguntados/preguntados.component';
import { SaladejuegosComponent } from './saladejuegos.component';

const routes: Routes = 
[
  { path: '', component: SaladejuegosComponent },
  { path: 'mayor-menor', component: MayorMenorComponent},
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'preguntados', component: PreguntadosComponent},
  { path: 'buscaminas', component: JuegopropioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaladejuegosRoutingModule { }
