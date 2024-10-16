import { Curso } from "src/curso/dominio/curso";

export class Aluno {
  constructor(
    public id: string,
    public nome: string,
    public endereco: string,
    public email: string,
    public telefone: string,
    public cursos: Curso[]
  ) {}
}
