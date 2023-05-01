import axios from 'axios';
import { DemograhicInfo, DemographicsReq, HouseHoldInfo, HouseHoldReq } from '@interface/census';

export async function getDemographicsInfo(param: DemographicsReq) {
    let result: DemograhicInfo[] = [];
    try {
        await axios
            .get(`/api/OpenAPI3/stats/searchpopulation.json`, {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('인구 조사 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getHouseHoldInfo(param: HouseHoldReq) {
    let result: HouseHoldInfo[] = [];
    try {
        await axios
            .get('/api//OpenAPI3/stats/household.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('가구 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}
/**
 * @Param msg : axios 호출 응답 유형
 */
function isSuccess(msg: string) {
    return msg === 'Success';
}
