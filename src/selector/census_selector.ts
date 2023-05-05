import {
    CompanyInfo,
    DemograhicInfo,
    FarmHouseHoldInfo,
    FisheryHouseHoldInfo,
    ForestryHouseHoldInfo,
    HouseCountInfo,
    HouseHoldInfo,
    HouseholdmemberInfo
} from '@interface/census';
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

const companyStat = atom<CompanyInfo[]>({
    key: 'companyStat',
    default: []
});

const farmHouseHoldStat = atom<FarmHouseHoldInfo[]>({
    key: 'farmHouseHoldStat',
    default: []
});

const forestryHouseHoldStat = atom<ForestryHouseHoldInfo[]>({
    key: 'forestryHouseHoldStat',
    default: []
});

const fisheryHouseHoldStat = atom<FisheryHouseHoldInfo[]>({
    key: 'fisheryHouseHoldStat',
    default: []
});

const houseHoldMemberStat = atom<HouseholdmemberInfo[]>({
    key: 'houseHoldMemberStat',
    default: []
});

export {
    populationStat,
    houseHoldStat,
    houseCountStat,
    companyStat,
    farmHouseHoldStat,
    forestryHouseHoldStat,
    fisheryHouseHoldStat,
    houseHoldMemberStat
};
