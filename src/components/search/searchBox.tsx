import { useState } from 'react';

import './searchBox.css';

import { progressBeforeNav, yearList } from '@/utils/everything';
import { DemographicsReq } from '@/interface/Census';
import dayjs from 'dayjs';
import { getDemographics } from '@store/CensusStore';
import { accessKey } from '@/selector/SgisSelector';

import { Select, Option, Typography, Button } from '@material-tailwind/react';
import { useRecoilState, useSetRecoilState } from 'recoil';
// import { useLocation, useNavigate } from 'react-router-dom';
import { populationStat } from '@selector/CensusSelector';

const searchBox = () => {
    const [key, setKey] = useRecoilState(accessKey);
    // const navigate = useNavigate();

    const populationStatHandler = useSetRecoilState(populationStat);
    const [selectedYear, setSelectedYear] = useState(Number(dayjs().format('YYYY')) - 2);
    const searchYearList = yearList();

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
        // navigate({ pathname: '/progress', search: `?page=population` });

        progressBeforeNav('population');
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
