export type HttpCommonStatus = {
    errCd: number;
    errMsg: string;
    id: string;
};

export type CommonReq = {
    accessToken: string; //액세스토큰
    adm_cd?: number; //행정구역코드("영역검색유무"가 행정구역일 경우)
};

export type ChartData = {
    labels: string[];
    data: (string | number)[];
    dataLabel?: string;
    colors?: string[];
};

export enum SearchTool {
    YEAR,
    GENDER,
    AGE_TYPE,
    HOUSEHOLD_TYPE,
    HOUSE_TYPE, //주택유형
    HOUSE_AREA_TYPE //주택면적
}

export enum ToastType {
    INFO,
    SUCCESS,
    ERROR,
    WARNING
}
