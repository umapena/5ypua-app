import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any[] = [];
  novoFuncionario: any = {};
  editando = false;
  funcionarioEditado: any = {};

  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit() {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.funcionariosService.getFuncionarios().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

  criarFuncionario() {
    console.log(this.novoFuncionario)
    this.funcionariosService.criarFuncionario(this.novoFuncionario).subscribe(() => {
      this.carregarFuncionarios();
      this.novoFuncionario = {};
    });
  }

  atualizarFuncionario() {
    this.funcionariosService.atualizarFuncionario(this.funcionarioEditado).subscribe(() => {
      this.carregarFuncionarios();
      this.editando = false;
      this.funcionarioEditado = {};
    });
  }

  excluirFuncionario(id:any) {
    this.funcionariosService.excluirFuncionario(id).subscribe(() => {
      this.carregarFuncionarios();
    });
  }
}
