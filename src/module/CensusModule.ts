import axios from 'axios';
import { DemographicsReq, DemograhicInfo } from '@interface/Census';

export async function getDemographicsInfo(param: DemographicsReq) {
    let result: DemograhicInfo[] = [];
    try {
        await axios
            .get(`/api/OpenAPI3/stats/searchpopulation.json`, {
                params: param
            })
            .then((res) => {
                if (res.data.errMsg === 'Success') result = res.data.result;

                console.debug('인구 조사 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}
