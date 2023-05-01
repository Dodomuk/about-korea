import { DemograhicInfo, HouseHoldInfo } from '@interface/census';
import { atom } from 'recoil';

const populationStat = atom<DemograhicInfo[]>({
    key: 'populationStat',
    default: []
});

const houseHoldStat = atom<HouseHoldInfo[]>({
    key: 'houseHoldStat',
    default: []
});

export { populationStat, houseHoldStat };
