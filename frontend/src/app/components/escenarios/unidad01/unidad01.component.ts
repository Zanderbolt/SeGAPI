import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { unidad01Service } from '../../../services/unidad01.service'
import { AlumnosService } from '../../../services/alumnos.service'




@Component({
  selector: 'app-unidad01',
  templateUrl: './unidad01.component.html',
  styleUrls: ['./unidad01.component.css']
})
export class Unidad01Component implements OnInit {
  numero_cuenta = '';

  constructor(private unidad01Service: unidad01Service,
              private alumnosService: AlumnosService,    
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getNumeroCuenta();
    console.log(this.unidad01Service.getUnidad01());
  }

  agregarUnidad01(form: NgForm) {
    form.value["numero_cuenta"] = this.numero_cuenta;
    console.log(form.value);
    this.unidad01Service.postAlumno(form.value)
    .subscribe(res => {
      console.log(res); 
    });
    this.toastr.success('Registro Guardado con éxito!', 'Éxito');     
  }

  getNumeroCuenta()
  {
     this.alumnosService.getNumeroCuenta()
    .subscribe(
      data => this.numero_cuenta = data.toString()
    );
  }







}
