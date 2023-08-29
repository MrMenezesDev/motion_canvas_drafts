import { PossibleVector2, Vector2 } from "@motion-canvas/core";


interface ILinha {
  inicio: Vector2;
  fim: Vector2;
}

function proximoPonto(linha: ILinha, recuo: number): Vector2 {
  const x = linha.inicio.x + (linha.fim.x - linha.inicio.x) * recuo;
  const y = linha.inicio.y + (linha.fim.y - linha.inicio.y) * recuo;
  return new Vector2({ x, y });
}

function distancia(vector1: Vector2, vector2: Vector2): number {
  return Math.sqrt((vector1.x - vector2.x) ** 2 + (vector1.y - vector2.y) ** 2);
}

export function espiral(matriz: PossibleVector2[], distanciaMinima: number = 10, recuo: number = 0.1): Vector2[] {
  let menorDistancia = distanciaMinima;
  const matrizVector = matriz.map((p) => new Vector2(p));
  const final = matrizVector[matrizVector.length - 1];
  const espiral: Vector2[] = matrizVector;

  let i = 0;
  while (menorDistancia >= distanciaMinima) {
    const pontoTemp = proximoPonto({ inicio: matrizVector[i], fim: matrizVector[i + 1] }, recuo);

    const ponto = proximoPonto({ inicio: pontoTemp, fim: matrizVector[matrizVector.length - 1] }, recuo);

    menorDistancia = distancia(ponto, espiral[espiral.length - 1]);
    espiral.push(ponto);
    i++;

  }
  return [final, ...espiral]
}
