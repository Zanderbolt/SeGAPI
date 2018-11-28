import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { unidad01Service } from '../../../services/unidad01.service'




@Component({
  selector: 'app-unidad01',
  templateUrl: './unidad01.component.html',
  styleUrls: ['./unidad01.component.css']
})
export class Unidad01Component implements OnInit {

  constructor(private unidad01Service: unidad01Service,    
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  agregarUnidad01(form: NgForm) {
    this.unidad01Service.postAlumno(form.value)
    .subscribe(res => {
      console.log(res); 
    });
    this.toastr.success('Registro Guardado con éxito!', 'Éxito');     
  }


}
