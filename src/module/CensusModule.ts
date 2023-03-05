import axios from 'axios';
import { DemographicsReq } from '../interface/Census';

export async function getDemographicsInfo(param: any) {
  try {
    let result = {};
    await axios
      .get(`/api/OpenAPI3/stats/searchpopulation.json`, { params: param })
      .then((res) => {
        console.debug('인구 조사 처리 >> ', res);
        result = res;
      });
    return result;
  } catch (error) {
    throw error;
  }
}
