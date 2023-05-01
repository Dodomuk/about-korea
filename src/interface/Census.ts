import { HttpCommonStatus } from '@interface/common';

export type DemographicsReq = {
    accessToken: string; //액세스토큰
    year: number; //기준년도
    gender?: number; //성별(default: 0)
    adm_cd?: number; //행정구역코드("영역검색유무"가 행정구역일 경우)
    low_search?: number; //하위 통계 정보 유무("영역검색유무"가 행정구역일 경우)
    age_type?: number; //연령타임
    edu_level?: number; //교육정도( * 2010년까지 제공, 2015년도는 제공하지 않음)
    mrg_state?: number; //혼인상태( * 2010년까지 제공, 2015년도는 제공하지 않음)
};

export type DemographicsRes = {
    result: DemograhicInfo[];
} & HttpCommonStatus;

export type DemograhicInfo = {
    adm_cd: string; //설명
    adm_nm: string; //행정구역명
    population: string; //인구수
    avg_age: number; //검색인구 평균나이
};

export type HouseHoldReq = {
    accessToken: string; //액세스토큰
    year: number; //기준년도
    adm_cd?: number; //행정구역코드("영역검색유무"가 행정구역일 경우)
    low_search?: number; //하위 통계 정보 유무  "영역검색유무"가 행정구역일 경우
    household_type?: string; //1세대가구	01  2세대가구	02  3세대가구	03  4세대가구	04  5세대이상가구	05  1인가구	A0  비혈연가구	B0
    ocptn_type?: string; //자기집	1  전세(월세없음)	2  보증금 있는 월세	3  보증금 없는 월세	4  사글세	5  무상(관사,사택,친척집 등) 6
};

export type HouseHoldRes = {
    result: HouseHoldInfo[];
} & HttpCommonStatus;

export type HouseHoldInfo = {
    adm_cd: string; //설명
    adm_nm: string; //행정구역명
    household_cnt: string; // 가구수
    family_member_cnt: string; // 총 가구원 수
    avg_family_member_cnt: string; // 평균가구원수
};
