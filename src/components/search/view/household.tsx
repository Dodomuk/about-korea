import CustomizeToast from '@/components/common/customize-toast';
import { HouseHoldReq } from '@/interface/census';
import { ToastType } from '@/interface/common';
import { houseHoldStat } from '@/selector/census_selector';
import { getHouseHolds } from '@/store/census_store';
import { progressBeforeNav } from '@/utils/everything';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SearchBox from '../tools/search_box';

function HouseHold() {
    const houseHoldStatHandler = useSetRecoilState(houseHoldStat);

    const navigate = useNavigate();

    async function getHouseHold(params: HouseHoldReq) {
        if (params) {
            const houseHoldReqParam: HouseHoldReq = {
                accessToken: params.accessToken,
                year: params.year
            };

            await getHouseHolds(houseHoldReqParam).then((res) => {
                houseHoldStatHandler(res);
            });

            progressBeforeNav(navigate, 'household');
        } else {
            CustomizeToast('년도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getHouseHold} />
        </>
    );
}

export default HouseHold;
