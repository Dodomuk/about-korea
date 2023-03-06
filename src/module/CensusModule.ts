import axios from 'axios';
import { DemographicsReq, DemographicsRes } from '../interface/Census';

export async function getDemographicsInfo(param: any) {
  try {
    let result;
    result = await axios.get(`/api/OpenAPI3/stats/searchpopulation.json`, {
      params: param,
    });
    console.debug('인구 조사 처리 >> ', result);
    return result;
  } catch (error) {
    throw error;
  }
}
