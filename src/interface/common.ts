export type HttpCommonStatus = {
    errCd: number;
    errMsg: string;
    id: string;
};

export type ChartData = {
    labels: string[];
    data: (string | number)[];
    dataLabel?: string;
    colors?: string[];
};

export enum ToastType {
    INFO,
    SUCCESS,
    ERROR,
    WARNING
}
