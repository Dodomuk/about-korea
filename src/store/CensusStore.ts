import { atom } from 'recoil';

const populationStatistics = atom({
  key: 'populationStatistics',
  default: [{
    adm_cd: '',
    adm_nm: '',
    population: '0',
    avg_age: 0
  }]
});

export { populationStatistics };
