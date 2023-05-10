import { SearchTool } from '@/interface/common';
import dayjs from 'dayjs';

export const toolBox: { [key: string]: { essentials: SearchTool[]; options?: SearchTool[] } } = {
    population: { essentials: [SearchTool.YEAR], options: [SearchTool.GENDER, SearchTool.AGE_TYPE] },
    household: { essentials: [SearchTool.YEAR], options: [SearchTool.HOUSEHOLD_TYPE] },
    house: { essentials: [SearchTool.YEAR], options: [SearchTool.HOUSE_TYPE, SearchTool.HOUSE_AREA_TYPE] },
    company: { essentials: [SearchTool.YEAR] },
    farmhousehold: { essentials: [SearchTool.YEAR] },
    forestryhousehold: { essentials: [SearchTool.YEAR] },
    fisherthousehold: { essentials: [SearchTool.YEAR, SearchTool.OCEAN_SURFACE_TYPE] },
    householdmember: { essentials: [SearchTool.YEAR, SearchTool.INDUSTRY_TYPE], options: [SearchTool.GENDER] }
};

export const yearList = () => {
    const list = [];
    //sgis 에서 제공하는 년도 (2015  ~  2021)
    for (let index = 2015; index < Number(dayjs().format('YYYY')) - 1; index++) {
        list.push(index);
    }
    return list.reverse();
};

export const GENDER_KIT: { [key: string]: number } = {
    전체: 0,
    남자: 1,
    여자: 2
};

export const AGEPOOL_KIT: { [key: string]: number } = {
    /* 종류 코드 */
    '10대이하': 30,
    '10대': 31,
    '20대': 32,
    '30대': 33,
    '40대': 34,
    '50대': 35,
    '60대': 36,
    '70대': 37,
    '80대': 38,
    '90대': 39
};

export const HOUSEHOLD_TYPE_KIT: { [key: string]: string } = {
    /* 종류     코드 */
    '1세대가구': '01',
    '2세대가구': '02',
    '3세대가구': '03',
    '4세대가구': '04',
    '5세대이상가구': '05',
    '1인가구': 'A0',
    비혈연가구: 'B0'
};

export const HOUSE_TYPE_KIT: { [key: string]: string } = {
    /* 종류  코드 */
    단독주택: '01',
    아파트: '02',
    연립주택: '03',
    다세대주택: '04',
    비거주용_건물: '05',
    주택이외: '06'
};

export const HOUSE_AREA_TYPE_KIT: { [key: string]: string } = {
    '20㎡ 이하': '01',
    '20㎡ ~ 40㎡': '02',
    '40㎡ ~ 60㎡': '03',
    '60㎡ ~ 85㎡': '04',
    '85㎡ ~ 100㎡': '05',
    '100㎡ ~ 130㎡': '06',
    '130㎡ ~ 165㎡': '07',
    '165㎡ ~ 230㎡': '08',
    '230㎡ 초과': '09'
};

export const OCEAN_SURFACE_TYPE_KIT: { [key: string]: number } = {
    전체: 0,
    내수면어가: 1,
    해수면어가: 2
};

export const INDUSTRY_TYPE_KIT: { [key: string]: number } = {
    농가: 1,
    임가: 2,
    해수면어가: 3,
    내수면어가: 4
};
