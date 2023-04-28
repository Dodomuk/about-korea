import { getDemographics } from '@/store/census_store';

import { DemographicsReq } from '@/interface/census';
import { useSetRecoilState } from 'recoil';
import { populationStat } from '@/selector/census_selector';
import { progressBeforeNav } from '@/utils/everything';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SearchBox from '../tools/search_box';

function Population() {
    const populationStatHandler = useSetRecoilState(populationStat);

    const navigate = useNavigate();

    async function getPopulation(params: DemographicsReq) {
        // 년도를 선택한 경우
        if (params.year) {
            const demographicsReqParam: DemographicsReq = {
                accessToken: params.accessToken,
                year: params.year
            };

            await getDemographics(demographicsReqParam).then((res) => {
                populationStatHandler(res);
            });
            progressBeforeNav(navigate, 'population');
            // 아직 년도를 선택하지 않은 경우
        } else {
            toast.error('년도를 입력해주세요!', {
                position: 'bottom-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            });
        }
    }

    return (
        <>
            <SearchBox callFunc={getPopulation} />
        </>
    );
}

export default Population;
