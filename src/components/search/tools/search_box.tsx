import { useState } from 'react';

import '@scss/search.scss';

import { accessKey } from '@/selector/sgis_selector';

import { Button, Typography } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';
import { ToastContainer } from 'react-toastify';
import YearBox from './year_box';

const SearchBox = (props: { callFunc(params: any): void }) => {
    const key = useRecoilValue(accessKey);
    const [selectedYear, setSelectedYear] = useState(0);

    function yearSelect(year: number) {
        setSelectedYear(year);
    }

    async function getViewModel() {
        const param = {
            accessToken: key,
            year: selectedYear
        };

        props.callFunc(param);
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
                <Button color="white" variant="filled" className="block text-center mt-4 font-bold text-gray-800 rounded-md" onClick={() => getViewModel()}>
                    검색
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SearchBox;
