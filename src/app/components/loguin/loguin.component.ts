import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-lg',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();
  onSubmit() {
    this.loading = true;
    this.message = '';

    this.http.post<any>('http://localhost:9000/api/users/login', { email: this.email, password: this.password })
      .subscribe(
        response => {
          this.loading = false;
          console.log(response); // Verificar la respuesta del servidor en la consola
          if (response.message === 'Inicio de sesión exitoso') {
            this.message = 'Inicio de sesión exitoso';
            this.loginSuccess.emit(); // Emitir el evento de inicio de sesión exitoso
          } else {
            this.message = 'Contraseña incorrecta';
          }
        },
        error => {
          this.loading = false;
          this.message = 'Inicio de sesión fallido';
        }
      );
  }
}
