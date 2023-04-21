import { DemograhicInfo } from '@interface/census';
import { atom } from 'recoil';

const populationStat = atom<DemograhicInfo[]>({
    key: 'populationStat',
    default: []
});

export { populationStat };
