import { AxiosResponse } from 'axios';
import { selectorFamily } from 'recoil';
import { DemographicsReq } from '../interface/Census';
import { getDemographicsInfo } from '../module/CensusModule';
import { populationStatistics } from '../store/CensusStore';

const getDemographics = selectorFamily<AxiosResponse, DemographicsReq>({
  key: 'getDemographics',
  get: (req: DemographicsReq) => async () => {
    return await getDemographicsInfo(req);
  },
  // set: ({ set }, newValue) => {
  //   set(populationStatistics, newValue);
  // },
});

export { getDemographics };
