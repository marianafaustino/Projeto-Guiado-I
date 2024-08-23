import { Curso } from "src/curso/dominio/curso";

export abstract class CursoRepository{
    abstract Salvar(curso:Curso): Promise<Curso>
    abstract listar(): Promise<Curso[]>
}