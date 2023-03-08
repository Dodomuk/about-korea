import { atom } from 'recoil';

const populationStatistics = atom({
  key: 'populationStatistics',
  default: 'click',
});

export { populationStatistics };
