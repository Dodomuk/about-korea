import { atom } from 'recoil';

const keyState = atom({
  key: 'keyState',
  default: '키를 발급 받으려면 클릭!',
});

const populationStatistics = atom({
  key: 'populationStatistics',
  default: '',
});

export { keyState };
