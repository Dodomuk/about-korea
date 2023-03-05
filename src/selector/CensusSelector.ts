import { selectorFamily } from 'recoil';
import { DemographicsReq, DemographicsRes } from '../interface/Census';

import { getDemographicsInfo } from '../module/CensusModule';

interface Param extends DemographicsReq {
  [key: string]: any;
}

const getDemographics = selectorFamily<DemographicsRes, Param>({
  key: 'getDemographics',
  get: (req) => async () => {
    // return async () => {
    return await getDemographicsInfo(req);
    // };
  },
});

export default { getDemographics };
