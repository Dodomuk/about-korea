import { DemograhicInfo } from '@/interface/Census';
import { atom } from 'recoil';

const populationStat = atom<DemograhicInfo[]>({
    key: 'populationStat',
    default: []
});

export { populationStat };
