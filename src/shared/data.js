import { format } from 'date-fns';

import { inputDateFormat } from './constants';

export const ourHeroes = [
  {
    id: 10,
    firstName: 'Categorie',
    lastName: '1',
    capeCounter: 1,
    originDate: format(new Date(1996, 5, 1), inputDateFormat),
    description: 'Articles',
    descriptionArticle:'Description',
    nomDetail: 'FRUITS: Cet article represente les fruit.',
    descriptionDetail:'Par exemple, nous avons une pomme, une banane, un orange',
  },
  {
    id: 20,
    firstName: 'Categorie',
    lastName: '2',
    capeCounter: 3,
    originDate: format(new Date(1998, 7, 1), inputDateFormat),
    description: 'Articles',
    descriptionArticle:'Description',
    nomDetail: 'LEGUMES: Cet article represente les legumes.',
    descriptionDetail: 'Par exemple, nous avons une carotte, une tomate, une brocolie',
  },
  
];
