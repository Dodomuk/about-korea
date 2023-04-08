import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { accessKey } from '@selector/SgisSelector';

import { useEffect } from 'react';
import { getAccessKey } from '@/module/SgisModule';
import TextFilter from '@components/search/TextFilter';
import ProgressBar from '@/components/bridge';

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

    return <TextFilter />;
};
export default Main;
