import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://localhost:8080/usuarios';

  constructor(private httpClient: HttpClient) { }

  public getUsuarios(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/");
  }

  criarUsuario(usuario:any): Observable<any> {
    return this.httpClient.post(this.apiUrl, usuario);
  }

  atualizarUsuario(usuario:any): Observable<any> {
    const url = `${this.apiUrl}/${usuario.id}`;
    return this.httpClient.put(url, usuario);
  }

  excluirUsuario(id:any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
