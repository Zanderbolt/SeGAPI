import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { unidad04Service } from '../../../services/unidad04.service'
import { AlumnosService } from '../../../services/alumnos.service'
import { Unidad04 } from 'src/app/models/unidad04';

@Component({
  selector: 'app-unidad04',
  templateUrl: './unidad04.component.html',
  styleUrls: ['./unidad04.component.css']
})
export class Unidad04Component implements OnInit {
  updateAvailable = true;

  constructor(private unidad04Service: unidad04Service,
    private alumnosService: AlumnosService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.unidad04Service.getUnidad04()
      .subscribe(
        data => {
          if (data != null) {
            this.updateAvailable = true;
            this.unidad04Service.selectedUnidad04.sistematizacion = data["sistematizacion"]
          }
          else {
            this.updateAvailable = false;
            this.unidad04Service.selectedUnidad04 = new Unidad04
          }
        }
      )
  }

  agregarUnidad04(form: NgForm) {
    if (form.valid) {
      if (!this.updateAvailable) {
        form.value["numero_cuenta"] = this.alumnosService.numero_cuenta;
        this.unidad04Service.postAlumno(form.value)
          .subscribe(res => {
            console.log(res);
          });
        this.toastr.success('Usuario Registrado con éxito', 'Éxito');
        this.updateAvailable = true;
      }
      else {
        this.unidad04Service.actualizarUnidad04(form.value)
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
