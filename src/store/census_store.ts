import { DemographicsReq, HouseHoldReq } from '@interface/census';
import { getDemographicsInfo, getHouseHoldInfo } from '@module/census_module';

async function getDemographics(req: DemographicsReq) {
    const res = await getDemographicsInfo(req);
    return res;
}

async function getHouseHolds(req: HouseHoldReq) {
    const res = await getHouseHoldInfo(req);
    return res;
}

export { getDemographics, getHouseHolds };
