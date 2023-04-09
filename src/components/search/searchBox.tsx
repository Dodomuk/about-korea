import { useState } from 'react';

import './searchBox.css';

import { DemographicsReq } from '@/interface/Census';
import { accessKey } from '@/selector/SgisSelector';
import { progressBeforeNav, yearList } from '@/utils/everything';
import { getDemographics } from '@store/CensusStore';
import dayjs from 'dayjs';

import { Button, Option, Select, Typography } from '@material-tailwind/react';
import { populationStat } from '@selector/CensusSelector';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const searchBox = () => {
    const key = useRecoilValue(accessKey);
    const populationStatHandler = useSetRecoilState(populationStat);
    const [selectedYear, setSelectedYear] = useState(Number(dayjs().format('YYYY')) - 2);
    const searchYearList = yearList();

    const navigate = useNavigate();

    function yearSelect(year: number) {
        setSelectedYear(year);
    }

    async function getPopulation() {
        const demographicsReqParam: DemographicsReq = {
            accessToken: key,
            year: selectedYear
        };

        await getDemographics(demographicsReqParam).then((res) => {
            populationStatHandler(res);
        });
        progressBeforeNav(navigate, 'population');
    }

    return (
        <div>
            {/* 년도 select */}
            <Typography variant="h4" color="white">
                조건을 입력하세요
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                추후 검색된 값 넣음
            </Typography>
            <form className="mt-8 mb-2 xl:w-96 max-w-screen-lg">
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
        </div>
    );
};

export default searchBox;
