import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { accessKey } from '@selector/sgis_selector';

import { getAccessKey } from '@module/sgis_module';

import TextFilter from '@components/search/text_filter';
import NavBar from '@common/nav-bar';

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

    return (
        <>
            <NavBar />
            <TextFilter />
        </>
    );
};
export default Main;
