import { DemographicsReq } from '@interface/census';
import { getDemographicsInfo } from '@module/census_module';

async function getDemographics(req: DemographicsReq) {
    const res = await getDemographicsInfo(req);
    return res;
}

export { getDemographics };
