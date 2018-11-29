import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  numero_cuenta = '';
  nombre = '';

  constructor(private alumnosService: AlumnosService,
    private _router: Router) { }

  async ngOnInit() {
    await this.alumnosService.getNumeroCuenta()
      .subscribe(        
        data => this.numero_cuenta = data.toString(),
        error => this._router.navigate(['/login']),        
      );

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          this.alumnosService.getNumeroCuenta()
        .subscribe( data => this.numero_cuenta = data.toString(),
        error => this._router.navigate(['/login']),),
        ), 0)
      });
  
        let result = await promise; // wait till the promise resolves (*)
        this.obtenerNombre();
        // alert(this.alumnosService.numero_cuenta);                
  }

  async obtenerNombre() {
    await this.alumnosService.getAlumno(this.numero_cuenta)
      .subscribe(
        data =>  this.numero_cuenta = data['apellido_paterno'] + " "
                                    + data['apellido_materno'] + " "
                                    + data['nombre'] 
      );        
  }


}
