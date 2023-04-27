import { useState } from 'react';

import '@scss/search.scss';

import { accessKey } from '@/selector/sgis_selector';
import { progressBeforeNav, yearList } from '@/utils/everything';
import { getDemographics } from '@/store/census_store';
import { DemographicsReq } from '@interface/census';

import { Button, Option, Select, Typography, SelectProps } from '@material-tailwind/react';
import { populationStat } from '@/selector/census_selector';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { toast, ToastContainer } from 'react-toastify';
import YearBox from './year_box';

const SearchBox = () => {
    const key = useRecoilValue(accessKey);
    const populationStatHandler = useSetRecoilState(populationStat);
    const [selectedYear, setSelectedYear] = useState(0);
    const searchYearList = yearList();
    const selectProps: SelectProps = { success: true, children: '' };

    const navigate = useNavigate();

    function yearSelect(year: number) {
        setSelectedYear(year);
    }

    async function getPopulation() {
        // 년도를 선택한 경우
        if (selectedYear) {
            const demographicsReqParam: DemographicsReq = {
                accessToken: key,
                year: selectedYear
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
        <div className="box-wrapper">
            {/* 년도 select */}
            <Typography variant="h4" color="white">
                조건을 입력하세요
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
                추후 검색된 값 넣음
            </Typography> */}
            <form className="box-form mt-8 mb-2 xl:w-96 max-w-screen-lg">
                <YearBox yearSelect={yearSelect} />
                <Button color="white" variant="filled" className="block text-center mt-4 font-bold text-gray-800 rounded-md" onClick={() => getPopulation()}>
                    검색
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SearchBox;
