import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { accessKey, getKey } from '@selector/SgisSelector';
import { search } from '@selector/SgisSelector';

import Population from '@components/chart/population';
import SearchBox from '@/components/main/searchBox';
import { useEffect } from 'react';
import { getAccessKey } from '@/module/SgisModule';
import TextFilter from './main/TextFilter';

const Main = () => {
    const keyHandler = useSetRecoilState(accessKey);

    useEffect(() => {
        getAccessKey().then((res) => {
            keyHandler(res);
        });
    }, []);

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
