import { Curso } from "src/curso/dominio/curso";

export abstract class CursoRepository{
    abstract Salvar(curso:Curso): void
    abstract listar(): Curso[]
    abstract buscarCursoId(id: string): Curso | undefined
}