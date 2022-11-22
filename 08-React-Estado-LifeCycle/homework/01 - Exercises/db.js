import {
   Delfin,
   Leon,
   Pavo,
   Serpiente,
   Cocodrilo,
} from './src/assets/imagenes';

export default {
   zoo: {
      species: [Mamíferos, Reptiles, Aves],
      animals: [
         {
            name: 'León',
            specie: 'Mamíferos',
            image: Leon,
         },
         {
            name: 'Delfín',
            specie: 'Mamíferos',
            image: Delfin,
         },
         {
            name: 'Cocodrilo',
            specie: 'Reptiles',
            image: Cocodrilo,
         },
         {
            name: 'Pavo real',
            specie: 'Aves',
            image: Pavo,
         },
         {
            name: 'Boa constrictor',
            specie: 'Reptiles',
            image: Serpiente,
         },
      ],
   },
};
