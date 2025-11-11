import { routing, appRoutingProvider } from './app.routing';

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { MenuComponent } from './components/menu.component/menu.component';
import { DepartamentosComponent } from './components/departamentos.component/departamentos.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SeviceDepartamentos } from './services/service.departamentos';
import { CreateComponent } from './components/create.component/create.component';
import { DetailsComponent } from './components/details.component/details.component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    DepartamentosComponent,
    CreateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    provideHttpClient(),
    SeviceDepartamentos
  ],
  bootstrap: [App]
})
export class AppModule { }
