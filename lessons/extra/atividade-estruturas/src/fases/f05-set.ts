/**
 * F05 — Set
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

// F05-A01
export function criarTecnologias(): Set<string> {
  return new Set(["JavaScript", "TypeScript", "React"]);
}

// F05-A02
export function adicionarTecnologia(tecnologias: Set<string>, valor: string): Set<string> {
  tecnologias.add(valor);
  return tecnologias;
}

// F05-A03
export function quantidadeUnica(tecnologias: Set<string>): number {
  return tecnologias.size;
}

// F05-A04
export function semDuplicatas(valores: string[]): Set<string> {
  return new Set(valores);
}