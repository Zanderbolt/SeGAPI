import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


import { unidad02Service } from '../../../services/unidad02.service'

@Component({
  selector: 'app-unidad02',
  templateUrl: './unidad02.component.html',
  styleUrls: ['./unidad02.component.css']
})
export class Unidad02Component implements OnInit {

  constructor(private unidad02Service: unidad02Service,    
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  agregarUnidad02(form: NgForm) {
    this.unidad02Service.postAlumno(form.value)
    .subscribe(res => {
      console.log(res); 
    });
    this.toastr.success('Usuario Registrado con éxito', 'Éxito');     
  }

}
