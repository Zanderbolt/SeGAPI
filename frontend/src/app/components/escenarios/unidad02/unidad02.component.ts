import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AlumnosService } from '../../../services/alumnos.service'


import { unidad02Service } from '../../../services/unidad02.service'
import { Unidad02 } from 'src/app/models/unidad02';

@Component({
  selector: 'app-unidad02',
  templateUrl: './unidad02.component.html',
  styleUrls: ['./unidad02.component.css']
})
export class Unidad02Component implements OnInit {
  updateAvailable = true;

  constructor(private unidad02Service: unidad02Service,
              private alumnosService : AlumnosService,
              private toastr: ToastrService) { }


  ngOnInit() {
    this.unidad02Service.getUnidad02()
      .subscribe(
        data => {
          if (data != null) {
            this.updateAvailable = true;
            this.unidad02Service.selectedUnidad02.justificacion = data["justificacion"],
              this.unidad02Service.selectedUnidad02.objetivos_proyecto = data["objetivos_proyecto"],
              this.unidad02Service.selectedUnidad02.estrategias = data["estrategias"],
              this.unidad02Service.selectedUnidad02.metas = data["metas"],
              this.unidad02Service.selectedUnidad02.actividades = data["actividades"],
              this.unidad02Service.selectedUnidad02.recursos_empleados = data["recursos_empleados"],
              this.unidad02Service.selectedUnidad02.evaluacion_proyecto = data["evaluacion_proyecto"]
          }
          else {
            this.updateAvailable = false;
            this.unidad02Service.selectedUnidad02 = new Unidad02
          }
        }
      )
  }

  agregarUnidad02(form: NgForm) {
    if (form.valid) {
      if (!this.updateAvailable) {
        form.value["numero_cuenta"] = this.alumnosService.numero_cuenta;
        this.unidad02Service.postAlumno(form.value)
        .subscribe(res => {
          console.log(res); 
        });
        this.toastr.success('Usuario Registrado con éxito', 'Éxito');
        this.updateAvailable = true;
      }
      else {
        this.unidad02Service.actualizarUnidad02(form.value)
          .subscribe(res => {
            console.log(res);
          });
        this.toastr.info('Registro Actualizado con éxito!', 'Éxito');
      }
    }
    else
    {
      this.toastr.warning('Favor de llenar todos los campos', 'Error');
    }
  }

}
