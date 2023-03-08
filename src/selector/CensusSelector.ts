import { AxiosResponse } from 'axios';
import { selectorFamily } from 'recoil';
import { DemographicsReq, DemographicsRes } from '../interface/Census';
import { getDemographicsInfo } from '../module/CensusModule';
import { populationStatistics } from '../store/CensusStore';

const getDemographics = selectorFamily<DemographicsRes, DemographicsReq>({
  key: 'getDemographics',
  get: (req: DemographicsReq) => async () => {
    const res = await getDemographicsInfo(req);
    return res;
  },
  // set: ({ set }, newValue) => {
  //   set(populationStatistics, newValue);
  // },
});

export { getDemographics };
