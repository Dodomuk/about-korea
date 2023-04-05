import { DemographicsReq, DemographicsRes } from '@interface/Census';
import { getDemographicsInfo } from '@module/CensusModule';

async function getDemographics(req: DemographicsReq) {
    const res = await getDemographicsInfo(req);
    return res;
}

export { getDemographics };
