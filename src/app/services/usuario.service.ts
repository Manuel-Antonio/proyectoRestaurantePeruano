import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8081/api/usuario';

  constructor(private http: HttpClient) {}

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/crear`;
    return this.http.post<Usuario>(url, usuario);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  obtenerTodosUsuarios(): Observable<Usuario[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<Usuario[]>(url);
  }

  iniciarSesion(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<Usuario>(url, usuario);
  }
}
