import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SeviceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  @ViewChild("cajaId") cajaId!: ElementRef;
  @ViewChild("cajaNombre") cajaNombre!: ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!: ElementRef;

  constructor(private _service: SeviceDepartamentos, private _router: Router){

  }

  insertDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;

    let departamento = new Departamento(id, nombre, localidad);

    this._service.createDepartamento(departamento).subscribe(() => {
      this._router.navigate(["/"]);
    })
  }
}
