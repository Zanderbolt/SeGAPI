import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  numero_cuenta = '';

  constructor(private alumnosService: AlumnosService,
    private _router: Router) { }

  ngOnInit() {
    this.alumnosService.getNumeroCuenta()
    .subscribe(
      data => this.numero_cuenta = data.toString(),
      error => this._router.navigate(['/login'])
    )
  }

}
