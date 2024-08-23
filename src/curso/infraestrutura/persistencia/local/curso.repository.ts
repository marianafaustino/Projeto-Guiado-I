import { Injectable } from "@nestjs/common";
import { CursoRepository } from "src/curso/aplicacao/portas/curso.repository";
import { Curso } from "src/curso/dominio/curso";

@Injectable()
export class LocalCursoRepository implements CursoRepository{
    Salvar(curso: Curso): Promise<Curso> {
        throw new Error('Método não implementado')
    }

    listar(): Promise<Curso[]> {
        throw new Error('Método não implementado')
    }
}