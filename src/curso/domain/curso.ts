import { Aluno } from "src/aluno/domain/aluno";

export class Curso{
    constructor(
        public id: string,
        public nome: string,
        public professor: string,
        public alunos: Aluno[]
    ){}
}