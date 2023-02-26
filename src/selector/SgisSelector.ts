import axios from 'axios';
import { selector } from 'recoil';
import { getAccessKey } from '../module/SgisModule';

const getKey = selector({
  key: 'getKey',
  get: async ({ get }) => {
    return getAccessKey();
  },
});

export { getKey };
