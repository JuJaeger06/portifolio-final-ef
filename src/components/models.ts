export interface Aulas {
  id: string;
  dia: string;
  content: string;
}

export interface AulaTopic {
  titulo: string;
  description: string;
}

export interface AulaDetail {
  id: string;
  dia: string;
  content: string;
  img: string;
  topicos: AulaTopic[];
}
