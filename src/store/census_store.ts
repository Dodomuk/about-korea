import {
    CompanyReq,
    DemographicsReq,
    FarmHouseHoldReq,
    FisheryHouseHoldReq,
    ForestryHouseHoldReq,
    HouseCountReq,
    HouseholdmemberReq,
    HouseHoldReq
} from '@/interface/census';
import {
    getCompanyInfo,
    getDemographicsInfo,
    getFarmHouseHoldInfo,
    getFisheryHouseHoldInfo,
    getForestryHouseHoldInfo,
    getHouseCountInfo,
    getHouseHoldInfo,
    getHouseHoldMemberInfo
} from '@module/census_module';

async function getDemographics(req: DemographicsReq) {
    const res = await getDemographicsInfo(req);
    return res;
}

async function getHouseHolds(req: HouseHoldReq) {
    const res = await getHouseHoldInfo(req);
    return res;
}

async function getHouseCounts(req: HouseCountReq) {
    const res = await getHouseCountInfo(req);
    return res;
}

async function getCompanys(req: CompanyReq) {
    const res = await getCompanyInfo(req);
    return res;
}

async function getFarmHouseHolds(req: FarmHouseHoldReq) {
    const res = await getFarmHouseHoldInfo(req);
    return res;
}

async function getForestryHouseHolds(req: ForestryHouseHoldReq) {
    const res = await getForestryHouseHoldInfo(req);
    return res;
}

async function getFisheryHouseHolds(req: FisheryHouseHoldReq) {
    const res = await getFisheryHouseHoldInfo(req);
    return res;
}

async function getHouseHoldMembers(req: HouseholdmemberReq) {
    const res = await getHouseHoldMemberInfo(req);
    return res;
}

export {
    getDemographics,
    getHouseHolds,
    getHouseCounts,
    getCompanys,
    getFarmHouseHolds,
    getForestryHouseHolds,
    getFisheryHouseHolds,
    getHouseHoldMembers
};
