import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { accessKey, getKey } from '@selector/SgisSelector';
import { search } from '@selector/SgisSelector';

import Population from '@components/chart/population';
import SearchBox from '@components/main/searchBox';
import { useEffect } from 'react';
import { getAccessKey } from '@/module/SgisModule';
import TextFilter from './main/TextFilter';

const Main = () => {
    const [key, setKey] = useRecoilState(accessKey);

    useEffect(() => {
        if (!key) {
            getAccessKey().then((res) => {
                setKey(res);
            });
        }
    }, []);

    function StateComp() {
        if (key) {
            return (
                <>
                    {/* <Population accessKey={key} /> */}
                    <div>{/* <button className="px-4 bg-orange-400" onClick="">인구통계 검색 버튼(임시)</button> */}</div>
                    <div>
                        <SearchBox accessKey={key} />
                    </div>
                </>
            );
        } else {
            return <></>;
        }
    }

    // FIXME : (전역화 고려)
    function moveErrorPage() {
        const navigate = useNavigate();
        navigate('/error');
    }

    function moveCensusSearchPage() {
        const navigate = useNavigate();
        navigate('/error');
    }

    return (
        <>
            <TextFilter />
        </>
    );
};
export default Main;
