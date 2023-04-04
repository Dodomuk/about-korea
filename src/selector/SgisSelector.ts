import { atom, DefaultValue, selector } from 'recoil';
import { getAccessKey } from '@module/SgisModule';

const accessKey = atom({
    key: 'accessKey',
    default: ''
});

const getKey = selector({
    key: 'accessKeySelector',
    get: ({ get }) => {
        get(accessKey);
    },
    set: ({ set }, newValue) => set(accessKey, newValue instanceof DefaultValue ? newValue : '')
});

const search = atom({
    key: 'search',
    default: ''
});

export { accessKey, getKey, search };
