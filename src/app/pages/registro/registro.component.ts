import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: [''],
      fechaNacimiento: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
      
  }
  registrarUsuario() {
    if (this.registroForm.valid) {
      const nuevoUsuario: Usuario = this.registroForm.value;
      this.usuarioService.crearUsuario(nuevoUsuario)
        .subscribe(
          usuarioRegistrado => {
            console.log('Usuario registrado:', usuarioRegistrado);
            this.router.navigate(['/login']);
          },
          error => {
            console.error('Error al registrar usuario:', error);
          }
        );
    } else {
      console.log('Formulario inválido. Por favor, complete los campos requeridos.');
    }
  }
}
