import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [//componentes, diretivas e pipes do modulo
    AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component
  ],
  imports: [//outros modulos que queremos usar neste modulo ou modulos que estão dentros dos componentes que vamos utilizar
    BrowserModule,
    FormsModule,
    CursosModule
  ],
  providers: [],//serviços, guardas de rotas
  bootstrap: [AppComponent]
})
export class AppModule { }
