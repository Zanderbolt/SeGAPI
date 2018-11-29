import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { unidad03Service } from '../../../services/unidad03.service'
import { AlumnosService } from '../../../services/alumnos.service'
import { Unidad03 } from 'src/app/models/unidad03';



@Component({
  selector: 'app-unidad03',
  templateUrl: './unidad03.component.html',
  styleUrls: ['./unidad03.component.css']
})
export class Unidad03Component implements OnInit {
  updateAvailable = true;


  constructor(private unidad03Service: unidad03Service,
    private alumnosService: AlumnosService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.unidad03Service.getUnidad03()
      .subscribe(
        data => {
          if (data != null) {
            this.updateAvailable = true;
            this.unidad03Service.selectedUnidad03.informe_actividades = data["informe_actividades"]
          }
          else {
            this.updateAvailable = false;
            this.unidad03Service.selectedUnidad03 = new Unidad03
          }
        }
      )
  }

  agregarUnidad03(form: NgForm) {
    if (form.valid) {
      if (!this.updateAvailable) {
        form.value["numero_cuenta"] = this.alumnosService.numero_cuenta;
        this.unidad03Service.postAlumno(form.value)
          .subscribe(res => {
            console.log(res);
          });
        this.toastr.success('Usuario Registrado con éxito', 'Éxito');
        this.updateAvailable = true;
      }
      else {
        this.unidad03Service.actualizarUnidad03(form.value)
          .subscribe(res => {
            console.log(res);
          });
        this.toastr.info('Registro Actualizado con éxito!', 'Éxito');
      }
    }
    else {
      this.toastr.warning('Favor de llenar todos los campos', 'Error');
    }

  }

}
