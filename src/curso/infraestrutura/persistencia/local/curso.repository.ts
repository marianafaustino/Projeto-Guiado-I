import { Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from 'fs';
import { CursoRepository } from "src/curso/aplicacao/portas/curso.repository";
import { Curso } from "src/curso/dominio/curso";

@Injectable()
export class LocalCursoRepository implements CursoRepository{
    private readonly arquivoCurso = path.resolve('src/curso/infraestrutura/dados/curso.json')

    Salvar(curso: Curso): void {
        fs.writeFileSync(this.arquivoCurso, JSON.stringify(curso,null,2))
    }

    listar(): Curso[] {
        const dados = fs.readFileSync(this.arquivoCurso, 'utf-8');
        return JSON.parse(dados) as Curso[];
    }

    buscarCursoId(id: string): Curso | undefined {
        const cursos = this.listar()
        return cursos.find(curso => curso.id === id)
    }
}