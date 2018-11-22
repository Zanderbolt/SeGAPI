import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../services/alumnos.service'
import { NgForm } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AlumnosService]
})
export class RegisterComponent implements OnInit {

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
  }

  agregarAlumno(form: NgForm) {
    this.alumnosService.postAlumno(form.value)
    .subscribe(res => {
      console.log(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {      
      form.reset();
      this.alumnosService.selectedAlumno = new Alumnos();
    }
  }

  

}
