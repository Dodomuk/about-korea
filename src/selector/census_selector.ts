import { DemograhicInfo, HouseCountInfo, HouseHoldInfo } from '@interface/census';
import { atom } from 'recoil';

const populationStat = atom<DemograhicInfo[]>({
    key: 'populationStat',
    default: []
});

const houseHoldStat = atom<HouseHoldInfo[]>({
    key: 'houseHoldStat',
    default: []
});

const houseCountStat = atom<HouseCountInfo[]>({
    key: 'houseCountStat',
    default: []
});

export { populationStat, houseHoldStat, houseCountStat };
