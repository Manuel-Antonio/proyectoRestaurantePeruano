import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      const usuario: Usuario = this.loginForm.value;
      this.usuarioService.iniciarSesion(usuario)
        .subscribe(
          usuarioLogueado => {
            if(usuarioLogueado.id == null) {
              console.error('Nombre de usuario o password incorrecto');
              return;
            }
            console.log('Inicio de sesión exitoso:', usuarioLogueado);
            this.router.navigate(['/home']);
          },
          error => {
            console.error('Error al iniciar sesión:', error);
          }
        );
    } else {
      console.log('Formulario inválido. Por favor, complete los campos requeridos.');
    }
  }
}
