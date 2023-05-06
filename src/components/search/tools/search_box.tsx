import { useState } from 'react';

import '@scss/search.scss';

import { accessKey } from '@/selector/sgis_selector';

import { Button, Typography } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';
import { ToastContainer } from 'react-toastify';
import YearBox from './year_box';
import { SearchTool } from '@/interface/common';
import GenderBox from './Gender_box';

const SearchBox = (props: {
    callFunc(params: any): void;
    tools: {
        essentials: SearchTool[];
        options?: SearchTool[] | undefined;
    };
}) => {
    const key = useRecoilValue(accessKey);
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedGender, setSelectedGender] = useState(0);
    const optionMap = new Map();

    function yearSelect(year: number) {
        optionMap.set('year', year);
        setSelectedYear(year);
    }

    function genderSelect(gender: number) {
        optionMap.set('gender', gender);
        setSelectedGender(gender);
    }

    // 필수 입력 값
    function EssentialTools() {
        const essentials = props.tools.essentials;

        const jsxList: JSX.Element[] = [];

        const YearBoxContainer = <YearBox yearSelect={yearSelect} key={'year'} />;

        if (essentials.includes(SearchTool.YEAR)) {
            jsxList.push(YearBoxContainer);
        }

        return <>{jsxList.map((x) => x)}</>;
    }

    // 선택 입력 값
    function OptionalTools() {
        const options = props.tools.options;

        const jsxList: JSX.Element[] = [];

        const GenderBoxContainer = <GenderBox genderSelect={genderSelect} key={'gender'} />;

        if (options) {
            if (options.includes(SearchTool.GENDER)) {
                jsxList.push(GenderBoxContainer);
            }
        }

        return <div className="mt-4">{jsxList.map((x) => x)}</div>;
    }

    async function getViewModel() {
        optionMap.set('accessToken', key);

        const param = Object.fromEntries(optionMap);

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
                <EssentialTools />
                <OptionalTools />
                <Button
                    color="white"
                    variant="filled"
                    className="block text-center mt-4 font-bold text-gray-800 rounded-md"
                    onClick={() => getViewModel()}
                >
                    검색
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SearchBox;
