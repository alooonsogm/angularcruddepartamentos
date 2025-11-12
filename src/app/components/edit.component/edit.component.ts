import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { SeviceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit{
  public departamento!: Departamento;
  @ViewChild("cajaId") cajaId!: ElementRef;
  @ViewChild("cajaNombre") cajaNombre!: ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!: ElementRef;

  constructor(private _service: SeviceDepartamentos, private _activeRoute: ActivatedRoute, private _router: Router){

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params["id"]);
      this._service.getDepartamentoPorId(id).subscribe(response => {
        this.departamento = response;
      })
    })
  }

  updateDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;

    let editDepart = new Departamento(id, nombre, localidad);
    this._service.updateDepartamento(editDepart).subscribe( () => {
      console.log("Departamento Editado");
      this._router.navigate(["/details", editDepart.numero, editDepart.nombre, editDepart.localidad]);
    })
  }
}
