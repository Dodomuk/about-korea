import { useState } from 'react';

import '@scss/search.scss';

import { accessKey } from '@/selector/sgis_selector';

import { Button, Typography } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { SearchTool } from '@/interface/common';

import YearBox from './year_box';
import GenderBox from './gender_box';
import AgePoolBox from './age_pool_box';
import HouseHoldTypeBox from './household_type_box';

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
    const [selectedAgePool, setSelectedAgePool] = useState('');
    const [selectedHouseHoldType, setSelectedHouseHoldType] = useState('')
    const optionMap = new Map();

    function yearSelect(year: number) {
        optionMap.set('year', year);
        setSelectedYear(year);
    }

    function genderSelect(gender: number) {
        optionMap.set('gender', gender);
        setSelectedGender(gender);
    }

    function agePoolSelect(agePool: string) {
        optionMap.set('agePool', agePool);
        setSelectedAgePool(agePool);
    }

    function houseHoldTypeSelect(houseHoldType: string) {
        optionMap.set('houseHoldType', houseHoldType)
        setSelectedHouseHoldType(houseHoldType)
    }

    // 필수 입력 값
    function EssentialTools() {
        const essentials = props.tools.essentials || [];

        const jsxList: JSX.Element[] = [];

        const yearBoxContainer = <YearBox yearSelect={yearSelect} key={'year'} />;
        // const oceanSerfaceTypeContainer
        // const dataTypeContainer

        essentials.forEach(essential => {
            switch (essential) {
                case SearchTool.YEAR:
                    jsxList.push(yearBoxContainer);
                    break;
            }

        })

        return <>{jsxList.map((x) => x)}</>;
    }

    // 선택 입력 값
    function OptionalTools() {
        const options = props.tools.options || [];

        const jsxList: JSX.Element[] = [];

        const genderBoxContainer = <div className="mt-4"><GenderBox genderSelect={genderSelect} key={'gender'} /></div>
        const agePoolBoxContainer = <div className="mt-4"><AgePoolBox agePoolSelect={agePoolSelect} key={'agePool'} /></div>
        const houseHoldTypeBoxContainer = <div className="mt-4"><HouseHoldTypeBox houseHoldTypeSelect={houseHoldTypeSelect} key={'houseHoldType'} /></div>

        options.forEach(option => {
            switch (option) {
                case SearchTool.GENDER: {
                    jsxList.push(genderBoxContainer);
                    break;
                }
                case SearchTool.AGE_TYPE: {
                    jsxList.push(agePoolBoxContainer);
                    break;
                }
                case SearchTool.HOUSEHOLD_TYPE: {
                    jsxList.push(houseHoldTypeBoxContainer);
                    break;
                }
            }
        })

        return <div>{jsxList.map((x) => x)}</div>;
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
