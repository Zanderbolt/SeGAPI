import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { unidad03Service } from '../../../services/unidad03.service'


@Component({
  selector: 'app-unidad03',
  templateUrl: './unidad03.component.html',
  styleUrls: ['./unidad03.component.css']
})
export class Unidad03Component implements OnInit {

  constructor(private unidad03Service: unidad03Service,    
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  agregarUnidad03(form: NgForm) {
    this.unidad03Service.postAlumno(form.value)
    .subscribe(res => {
      console.log(res); 
    });
    this.toastr.success('Usuario Registrado con éxito', 'Éxito');     
  }

}
