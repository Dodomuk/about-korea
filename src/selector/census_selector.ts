import { DemographicsRes, HouseHoldRes } from '@interface/census';
import { atom } from 'recoil';

const populationStat = atom<DemographicsRes[]>({
    key: 'populationStat',
    default: []
});

const houseHoldStat = atom<HouseHoldRes[]>({
    key: 'houseHoldStat',
    default: []
});

export { populationStat, houseHoldStat };
