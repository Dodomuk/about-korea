import { atom, selector } from 'recoil';
import { getAccessKey } from '@module/SgisModule';

const accessKey = atom({
  key: 'accessKey',
  default: '',
});

const getKey = selector({
  key: '',
  get: async ({ get }) => {
    return await getAccessKey();
  },
});

const search = atom({
  key: 'search',
  default: '',
});

export { accessKey, getKey, search };
