import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { unidad04Service } from '../../../services/unidad04.service'
@Component({
  selector: 'app-unidad04',
  templateUrl: './unidad04.component.html',
  styleUrls: ['./unidad04.component.css']
})
export class Unidad04Component implements OnInit {

  constructor(private unidad04Service: unidad04Service,    
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  agregarUnidad04(form: NgForm) {
    this.unidad04Service.postAlumno(form.value)
    .subscribe(res => {
      console.log(res); 
    });
    this.toastr.success('Usuario Registrado con éxito', 'Éxito');     
  }

}
