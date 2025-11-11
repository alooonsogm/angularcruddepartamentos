import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DepartamentosComponent } from "./components/departamentos.component/departamentos.component";
import { CreateComponent } from "./components/create.component/create.component";
import { DetailsComponent } from "./components/details.component/details.component";

const appRoutes: Routes = [
    { path: "", component: DepartamentosComponent },
    { path: "create", component: CreateComponent },
    { path: "details/:id/:nombre/:localidad", component: DetailsComponent },
]

export const appRoutingProvider: any[] = [];
//Las propias ruta a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);