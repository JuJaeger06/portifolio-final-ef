<template>
  <q-page class="flex items-center justify-center w-full">
    <div class="grid grid-cols-5 gap-6">
      <div @click="$router.push(`/detail/${aula.id}`)" v-for="aula in lstAulas" :key="aula.id">
        <div class="book">
          <p>{{ aula.content }}</p>
          <div class="cover border-l-8 border-blue-950">
            <h5 class="font-bold">Aula: {{ aula.dia }}</h5>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Aulas } from 'components/models';

const lstAulas = ref<Aulas[]>([
  {
    id: '1',
    dia: '07/08/2025',
    content: 'Apresentação do plano de ensino e sondagem.',
  },
  {
    id: '2',
    dia: '14/08/2025',
    content:
      'Rememorar brincadeiras e jogos da infância para reelaboração em aula, com caráter pedagógico.',
  },
  {
    id: '3',
    dia: '21/08/2025',
    content: 'Brincar e a BNCC',
  },
  // {
  //   id: '4',
  //   dia: '04/09/2025',
  //   content:
  //     'Reelaboração de jogos e brincadeiras em aula, com aplicação pedagógica nos anos iniciais e educação infantil',
  // },
  {
    id: '5',
    dia: '11/09/2025',
    content: 'Brinquedo, Brincadeira e Jogo',
  },
  {
    id: '6',
    dia: '18/09/2025',
    content: 'Escola móvel, ensino através do movimento. Participação Professor Phillip Ilha',
  },
  {
    id: '7',
    dia: '02/10/2025',
    content: 'Organização aula interdisciplinar',
  },
  {
    id: '8',
    dia: '09/10/2025',
    content: 'Aulas interdisciplinares - Ciências e Matemática',
  },
  {
    id: '9',
    dia: '16/10/2025',
    content: 'Aula interdisciplinar - Geografia e Português',
  },
  // {
  //   id: '10',
  //   dia: '23/10/2025',
  //   content: 'Organização de portifolio sobre a disciplina e conhecimentos mobilizados',
  // },
  {
    id: '11',
    dia: '30/10/2025',
    content: 'Casa verônica',
  },
]);
</script>
