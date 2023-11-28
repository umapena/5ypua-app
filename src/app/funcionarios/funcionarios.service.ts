import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private apiUrl = 'http://localhost:8080/funcionarios';

  constructor(private httpClient: HttpClient) { }

  public getFuncionarios(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/");
  }

  criarFuncionario(hospede:any): Observable<any> {
    return this.httpClient.post(this.apiUrl, hospede);
  }

  atualizarFuncionario(hospede:any): Observable<any> {
    const url = `${this.apiUrl}/${hospede.id}`;
    return this.httpClient.put(url, hospede);
  }

  excluirFuncionario(id:any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
