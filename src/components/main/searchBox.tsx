import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import './searchBox.css';

import { search } from '@selector/SgisSelector';

import TextFilter from './TextFilter';
import { yearList } from '@/utils/everything';
import { DemographicsReq } from '@/interface/Census';
import dayjs from 'dayjs';
import { getDemographics } from '@/selector/CensusSelector';

import { Select, Option, Typography, Button, Input } from '@material-tailwind/react';

const searchBox = (props: { accessKey: string }) => {
    const [searchText, setSearchText] = useRecoilState(search);
    const [selectedYear, setSelectedYear] = useState(Number(dayjs().format('YYYY')) - 2);
    const searchYearList = yearList();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    function yearSelect(year: number) {
        setSelectedYear(year);
    }

    function getPopulation() {
        const demographicsReqParam: DemographicsReq = {
            accessToken: props.accessKey,
            year: selectedYear
        };

        console.log(demographicsReqParam);
        getDemographics(demographicsReqParam);
    }

    // // 조건 클릭 검색창
    // function SearchConditionList() {
    //     const list = yearList();

    //     const itemVariants: Variants = {
    //         open: {
    //             opacity: 1,
    //             y: 0,
    //             transition: { type: 'spring', stiffness: 300, damping: 1 }
    //         },
    //         closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    //     };

    //     const [isOpen, setIsOpen] = useState(false);

    //     return (
    //         <motion.nav initial={false} animate={isOpen ? 'openbox' : 'closed'} className="menu">
    //             <motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
    //                 Menu
    //                 <motion.div
    //                     variants={{
    //                         open: { rotate: 180 },
    //                         closed: { rotate: 0 }
    //                     }}
    //                     transition={{ duration: 0.2 }}
    //                     style={{ originY: 0.55 }}
    //                 >
    //                     <svg width="15" height="15" viewBox="0 0 20 20">
    //                         <path d="M0 7 L 20 7 L 10 16" />
    //                     </svg>
    //                 </motion.div>
    //             </motion.button>
    //             <motion.ul
    //                 variants={{
    //                     open: {
    //                         clipPath: 'inset(0% 0% 0% 0% round 10px)',
    //                         transition: {
    //                             type: 'spring',
    //                             bounce: 0,
    //                             duration: 0.7,
    //                             delayChildren: 0.3,
    //                             staggerChildren: 0.05
    //                         }
    //                     },
    //                     closed: {
    //                         clipPath: 'inset(10% 50% 90% 50% round 10px)',
    //                         transition: {
    //                             type: 'spring',
    //                             bounce: 0,
    //                             duration: 0.3
    //                         }
    //                     }
    //                 }}
    //                 style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    //             >
    //                 {list.map((year) => (
    //                     <motion.li key={year} variants={itemVariants}>
    //                         {year}년
    //                     </motion.li>
    //                 ))}
    //             </motion.ul>
    //         </motion.nav>
    //     );
    // }

    return (
        <div>
            {/* <input type="text" value={searchText} onChange={onChange}></input>
            <div>
                <div>
                    <span>
                        <TextFilter searchText={searchText} />
                    </span>
                </div>
            </div> */}
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
            {/* <div>
                <SearchConditionList />
            </div> */}
        </div>
    );
};

export default searchBox;
