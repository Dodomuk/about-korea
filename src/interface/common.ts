export type HttpCommonStatus = {
    errCd: number;
    errMsg: string;
    id: string;
};

export type ChartData = {
    labels: string[];
    data: string[];
    dataLabel?: string;
    colors?: string[];
};
