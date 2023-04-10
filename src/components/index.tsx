import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { accessKey } from '@selector/SgisSelector';

import { useEffect } from 'react';
import { getAccessKey } from '@/module/SgisModule';
import TextFilter from '@components/search/TextFilter';
import { injectStyle } from 'react-toastify/dist/inject-style';

const Main = () => {
    const keyHandler = useSetRecoilState(accessKey);

    useEffect(() => {
        getAccessKey().then((res) => {
            // sgis 발급 토큰 저장
            keyHandler(res);
        });
        // toastify style 주입(1회 필수)
        injectStyle();
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
