import { atom, DefaultValue, selector } from 'recoil';
import { NavigateFunction } from 'react-router-dom';

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

const navigator = atom<NavigateFunction | undefined>({
    key: 'navigator',
    default: undefined
});

export { accessKey, getKey, search, navigator };
