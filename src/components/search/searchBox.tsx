import { useState } from 'react';

import '@scss/search.scss';

import { DemographicsReq } from '@interface/Census';
import { accessKey } from '@selector/SgisSelector';
import { progressBeforeNav, yearList } from '@/utils/everything';
import { getDemographics } from '@store/CensusStore';

import { Button, Option, Select, Typography } from '@material-tailwind/react';
import { populationStat } from '@selector/CensusSelector';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { toast, ToastContainer } from 'react-toastify';

const SearchBox = () => {
    const key = useRecoilValue(accessKey);
    const populationStatHandler = useSetRecoilState(populationStat);
    const [selectedYear, setSelectedYear] = useState(0);
    const searchYearList = yearList();

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
                autoClose: 300000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
        }
    }

    return (
        <div className="box-wrapper">
            {/* 년도 select */}
            <Typography variant="h4" color="white">
                조건을 입력하세요
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                추후 검색된 값 넣음
            </Typography>
            <form className="box-form mt-8 mb-2 xl:w-96 max-w-screen-lg">
                <div className="xl:w-96 pl-2">
                    <Select label="검색할 년도">
                        {searchYearList.map((year) => (
                            <Option key={`year_${year}`} onClick={() => yearSelect(year)}>
                                {year}
                            </Option>
                        ))}
                    </Select>
                </div>
                <Button color="white" variant="filled" className="block text-center mt-4 font-bold text-gray-800 rounded-md" onClick={() => getPopulation()}>
                    검색
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SearchBox;
