import { selectorFamily } from 'recoil';
import { getDemographicsInfo } from '../module/CensusModule';
import { populationStatistics } from '../store/CensusStore';

const getDemographics = selectorFamily({
  key: 'getDemographics',
  get:
    (req) =>
    ({ get }) => {
      return getDemographicsInfo(req);
    },
  set: ({ set }, newValue) => {
    set(populationStatistics, newValue);
  },
});

export { getDemographics };
