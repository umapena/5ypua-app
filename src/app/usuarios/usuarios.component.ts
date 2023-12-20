
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  novoUsuario: any = {};
  editando = false;
  usuarioEditado: any = {};

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  criarUsuario() {
    console.log(this.novoUsuario)
    this.usuariosService.criarUsuario(this.novoUsuario).subscribe(() => {
      this.carregarUsuarios();
      this.novoUsuario = {};
    });
  }

  atualizarUsuario() {
    this.usuariosService.atualizarUsuario(this.usuarioEditado).subscribe(() => {
      this.carregarUsuarios();
      this.editando = false;
      this.usuarioEditado = {};
    });
  }

  excluirUsuario(id:any) {
    this.usuariosService.excluirUsuario(id).subscribe(() => {
      this.carregarUsuarios();
    });
  }
}
