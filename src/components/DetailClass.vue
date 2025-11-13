<template>
  <div class="flex flex-nowrap items-center justify-center w-full py-3 px-[8%]">
    <div class="flex flex-col gap-8 items-center justify-center w-full">
      <q-btn
        @click="$router.push('/')"
        label="Voltar"
        push
        glossy
        rounded
        color="primary"
        class="absolute left-[21%] z-10 top-5"
      />
      <q-carousel
        arrows
        control-color="primary"
        animated
        infinite
        v-model="slide"
        class="w-[70%] h-[500px]"
      >
        <q-carousel-slide name="first" :img-src="getImagePath(aulaDetail?.id || '', '')">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">{{ aulaDetail?.content }}</div>
            <div class="text-subtitle1">{{ aulaDetail?.dia }}</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="second"
          :img-src="getImagePath(aulaDetail?.id || '', aulaDetail?.img || '')"
        />
      </q-carousel>

      <div :class="`flex items-center justify-center gap-5`">
        <div v-for="top in aulaDetail?.topicos" :key="top.titulo">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <h5 class="text-lg font-bold text-center">{{ top.titulo }}</h5>
              </div>
              <div class="card-back">
                <p v-html="top.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { AulaDetail } from './models';
import { useRoute } from 'vue-router';

const $route = useRoute();
const slide = ref('first');

const lstAulas = ref<AulaDetail[]>([
  {
    id: '1',
    dia: '07/08/2025',
    content: 'Plano de Ensino e Sondagem',
    img: 'avalizacao_disciplina.jpg',
    topicos: [
      {
        titulo: 'O que é educação física?',
        description:
          'A Educação Física estuda as práticas corporais e busca o desenvolvimento integral do indivíduo, promovendo saúde, bem-estar e compreensão da cultura corporal por meio do movimento.',
      },
      {
        titulo: 'Qual o papel da educação física para o desenvolvimento da criança?',
        description:
          'O papel da Educação Física é promover saúde, bem-estar e desenvolvimento integral por meio do movimento e da prática de atividades físicas.',
      },
      {
        titulo: 'De que forma a disciplina pode colaborar com a minha formação/atuação?',
        description:
          'A disciplina colabora com a formação ao desenvolver habilidades físicas, sociais e cognitivas, promovendo saúde, trabalho em equipe e consciência corporal, essenciais para a atuação pessoal e profissional.',
      },
    ],
  },
  {
    id: '2',
    dia: '14/08/2025',
    content: 'Resgate de brincadeiras infantis.',
    img: 'cama_de_gato.jpg',
    topicos: [
      {
        titulo: 'Cama de Gato',
        description:
          'Brincadeira com barbante nas mãos, formando figuras ao trocá-lo entre os jogadores.',
      },
      {
        titulo: 'Elefante Colorido',
        description:
          'Brincadeira em que uma cor é dita, e as crianças correm para tocar em algo dessa cor.',
      },
      {
        titulo: 'Mamãe Mandou',
        description: 'Jogo em que as crianças seguem comandos iniciados por “Mamãe mandou...”.',
      },
      {
        titulo: 'Amarelinha',
        description:
          'Brincadeira popular de pular entre quadrados numerados, desenhados no chão, após lançar uma pedrinha.',
      },
    ],
  },
  {
    id: '3',
    dia: '21/08/2025',
    content: 'Brincar e a BNCC',
    img: 'brincar_crescer.webp',
    topicos: [
      {
        titulo: 'Conviver',
        description:
          '- Diferentes grupos; <br>- Diferentes linguagens; <br>- Conhecimento de si e do outro; <br>- Respeito - cultura e diferenças entre pessoas',
      },
      {
        titulo: 'Brincar',
        description:
          '*Cotidianamente - diversas formas - diferentes espaços e tempos - diferentes parceiros (crianças e adultos); <br>*Diversificar produções culturais, conhecimentos, imaginação, criatividade; <br>*Experiências emocionais, corporais, sensoriais, expressivas, cognitivas, sociais e relacionais.',
      },
      {
        titulo: 'Participar',
        description:
          '- Ativa: adultos e outras crianças; <br>- Planejamento: atividades propostas; realização das atividades da vida cotidiana; <br>- Escolha das brincadeiras, dos materiais e dos ambientes; <br>- Desenvolver diferentes linguagens e elaborar conhecimentos, decidindo e se posicionando.',
      },
      {
        titulo: 'Explorar',
        description:
          '- Movimentos, gestos, sons, formas, texturas, cores, palavras, emoções, transformações, relacionamentos, histórias, objetos, elementos da natureza; <br>- Escola e fora dela:  ampliando os saberes sobre a cultura: as artes, a escrita, a ciência e a tecnologia.',
      },
      {
        titulo: 'Expressar',
        description:
          'Como sujeito dialógico, criativo e sensível: necessidades, emoções, sentimentos, dúvidas, hipóteses, descobertas, opiniões, questionamentos <br>*Diferentes linguagens.',
      },
      {
        titulo: 'Conhecer-se',
        description:
          '- Construção da identidade pessoal, social e cultural: imagem positiva de si e de seus grupos de pertencimento <br>-  Diversas experiências: cuidados, interações, brincadeiras e linguagens vivenciadas na instituição escolar e em seu contexto familiar e comunitário.',
      },
    ],
  },
  // {
  //   id: '4',
  //   dia: '04/09/2025',
  //   content: '',
  //   img: '',
  //   topicos: [],
  // },
  {
    id: '5',
    dia: '11/09/2025',
    content: 'Brinquedo, Brincadeira e Jogo',
    img: 'jogo_brincadeira_esporte.jpg',
    topicos: [
      {
        titulo: 'Brinquedo',
        description:
          '- objeto: representação, imaginação, situação; <br>- Forma de comunicação com o mundo adulto',
      },
      {
        titulo: 'Brincadeira',
        description:
          '- Vigotsky <br>- Imaginação; <br>- Brincadeiras mudam conforme idade/ensinado por adultos a partir de 3 anos; <br>- Piaget; <br>- Assimilação',
      },
      {
        titulo: 'Jogo',
        description:
          '- Sistema Linguístico do dia-a-dia; <br>- Regras implícitas e explícitas; <br>- Objetos',
      },
    ],
  },
  {
    id: '6',
    dia: '18/09/2025',
    content: 'Escola Móvel',
    img: 'escola_movel.jpg',
    topicos: [
      {
        titulo: 'Educação DO movimento',
        description:
          'Aquisição de movimentos de forma sistematizada, coordenada e imposta pelo meio, seja dentro ou fora da escola.',
      },
      {
        titulo: 'Educação PELO movimento:',
        description:
          'Relacionada ao aumento do grau de complexidade dele, partindo dos básicos até chegar aos mais complexos, alcançando assim o desenvolvimento não apenas das habilidades motoras, motricidade, mas também o desenvolvimento social e intelectual.',
      },
    ],
  },
  {
    id: '7',
    dia: '02/10/2025',
    content: 'Organização Aula Interdisciplinar',
    img: 'plano_aula_interdisciplinar.jpg',
    topicos: [
      { titulo: 'Ciências', description: 'Evelin, Isabele, Alanna, Julia C.' },
      { titulo: 'Matemática', description: 'Aline, Gabrieli, Eduardo, Lara, Janini' },
      { titulo: 'Geografia', description: 'Lótus, Carol, Francine, Sara, Cristian, Luiza' },
      {
        titulo: 'Português',
        description: 'Gabriela, Julia S., Gabrielle, Millena, Marcos, Inara, Ana Luiza',
      },
    ],
  },
  {
    id: '8',
    dia: '09/10/2025',
    content: 'Ciências e Matemática',
    img: 'jogo_matematica.jpg',
    topicos: [
      { titulo: 'Ciências', description: 'Circuito com perguntas e quebra-cabeça final.' },
      { titulo: 'Matemática', description: 'Amarelinha de cálculos.' },
    ],
  },
  {
    id: '9',
    dia: '16/10/2025',
    content: 'Português e Geografia',
    img: 'aula_geografia.jpg',
    topicos: [
      { titulo: 'Português', description: '' },
      { titulo: 'Geografia', description: 'Caça Tesouro com coordenadas das Rosas dos Ventos.' },
    ],
  },
  // {
  //   id: '10',
  //   dia: '23/10/2025',
  //   content: '',
  //   img: '',
  //   topicos: [{ titulo: '', description: '' }],
  // },
  {
    id: '11',
    dia: '30/10/2025',
    content: 'Casa Verônica',
    img: 'foto_final.jpg',
    topicos: [],
  },
]);

const aulaDetail = ref<AulaDetail | null>(null);

const getImagePath = (aulaId: string, imgName: string) => {
  console.log('🧸 ~ imgName:', imgName);
  let imagePath = '';

  if (imgName != '') {
    imagePath = `../assets/Aula_${aulaId}/${imgName}`;
  } else {
    imagePath = `../assets/Aula_${aulaId}/capa_${aulaId}.jpg`;
  }

  return new URL(imagePath, import.meta.url).href;
};

onMounted(() => {
  aulaDetail.value = lstAulas.value.find((it) => it.id === $route.params.id) || null;
});
</script>
