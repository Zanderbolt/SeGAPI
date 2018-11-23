import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../services/alumnos.service'
import { NgForm } from '@angular/forms';

import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private alumnosService: AlumnosService,
    private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(form: NgForm) {

    // console.log(form.value);
    if (form.valid) {
      this.alumnosService.login(form.value)
        .subscribe(
          data => {
            console.log(data);
            if (data['message'] != "Datos Incorrectos") {
              localStorage.setItem('token', data.toString());
              
              this._router.navigate(['/escenarios']);
            }
            else
              this.toastr.error("Credenciales Incorrectas", "Error");
          }
        );
    }




    // this.toastr.success('Usuario Registrado con éxito', 'Éxito');
    // this.resetForm(form);
  }

}
