import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";

@Injectable()
export class SeviceDepartamentos {
    constructor(private _http: HttpClient){

    }

    getDepartamentos(): Observable<Array<Departamento>> {
        var urlDepart = environment.urlApiDepart;
        let request = "api/Departamentos";

        return this._http.get<Array<Departamento>>(urlDepart + request);
    }

    createDepartamento(departamento: Departamento): Observable<any> {
        //Igual que ne react o Jquery
        let departJson = JSON.stringify(departamento);

        //Creamos la cabecera de la peticion
        let header = new HttpHeaders();
        //Indicamos el tipo de objeto a enviar en data
        header = header.set("Content-Type", "application/json");

        let urlDepart = environment.urlApiDepart;
        let request = "api/Departamentos";

        return this._http.post(urlDepart + request, departJson, {headers: header});
    }

    getDepartamentoPorId(idDepart: number): Observable<Departamento> {
        let urlDepart = environment.urlApiDepart;
        let request = "api/Departamentos/" + idDepart;

        return this._http.get<Departamento>(urlDepart + request);
    }

    updateDepartamento(departamento: Departamento): Observable<any> {
        let departJson = JSON.stringify(departamento);

        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");

        let urlDepart = environment.urlApiDepart;
        let request = "api/Departamentos";

        return this._http.put(urlDepart + request, departJson, {headers: header});
    }

    deleteDepartamento(idDepart: number): Observable<any> {
        let urlDepart = environment.urlApiDepart;
        let request = "api/Departamentos/" + idDepart;

        return this._http.delete(urlDepart + request);
    }
}