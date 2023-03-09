import { atom, selector } from 'recoil';
import { getAccessKey } from '@module/SgisModule';

const getKey = selector({
  key: '',
  get: async ({ get }) => {
    return await getAccessKey();
  },
});

const accessKey = atom({
  key: 'accessKey',
  default: '',
});

export { getKey, accessKey };
