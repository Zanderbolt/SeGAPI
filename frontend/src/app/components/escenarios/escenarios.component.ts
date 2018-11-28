import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.css']
})

export class EscenariosComponent implements OnInit {
  numero_cuenta = '';

  constructor(private alumnosService: AlumnosService,
    private _router: Router) {
    }

  ngOnInit() {
    this.alumnosService.getNumeroCuenta()
    .subscribe(
      data => this.numero_cuenta = data.toString(),
      error => this._router.navigate(['/login'])
    ) 
    
  }

}
