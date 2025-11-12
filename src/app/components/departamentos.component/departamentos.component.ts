import { Component, OnInit } from '@angular/core';
import { SeviceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-departamentos',
  standalone: false,
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css',
})
export class DepartamentosComponent implements OnInit{
  public departamentos!: Array<Departamento>;

  constructor(private _service: SeviceDepartamentos){
    
  }

  loadDepartamento(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    });
  }

  ngOnInit(): void {
    this.loadDepartamento();
  }

  deleteDepartamento(id: number): void {
    this._service.deleteDepartamento(id).subscribe( () => {
      console.log("Delete Departamento " + id);
      this.loadDepartamento();
    });
  }
}
