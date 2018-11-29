import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { unidad01Service } from '../../../services/unidad01.service'
import { AlumnosService } from '../../../services/alumnos.service'
import { Unidad01 } from 'src/app/models/unidad01';




@Component({
  selector: 'app-unidad01',
  templateUrl: './unidad01.component.html',
  styleUrls: ['./unidad01.component.css']
})
export class Unidad01Component implements OnInit {
  updateAvailable = true;
  // numero_cuenta = '';

  constructor(private unidad01Service: unidad01Service,
    private alumnosService: AlumnosService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.unidad01Service.getUnidad01()
      .subscribe(
        data => {
          if (data != null) {
            this.updateAvailable = true;
            this.unidad01Service.selectedUnidad01.antecedentes_comunidad = data["antecedentes_comunidad"],
              this.unidad01Service.selectedUnidad01.infraestructura_equipamiento = data["infraestructura_equipamiento"],
              this.unidad01Service.selectedUnidad01.organizacion_social = data["organizacion_social"],
              this.unidad01Service.selectedUnidad01.antecedentes_comunidad = data["antecedentes_comunidad"],
              this.unidad01Service.selectedUnidad01.niveles_de_vida = data["niveles_de_vida"],
              this.unidad01Service.selectedUnidad01.diagnostico_general = data["diagnostico_general"]
          }
          else {
            this.updateAvailable = false;
            this.unidad01Service.selectedUnidad01 = new Unidad01
          }
        }
      )
  }

  agregarUnidad01(form: NgForm) {
    if (form.valid) {
      if (!this.updateAvailable) {
        form.value["numero_cuenta"] = this.alumnosService.numero_cuenta;
        this.unidad01Service.postAlumno(form.value)
          .subscribe(res => {
            console.log(res);
          });        
        this.toastr.success('Registro Guardado con éxito!', 'Éxito');
        this.updateAvailable = true;
      }
      else {
        this.unidad01Service.actualizarUnidad01(form.value)
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
