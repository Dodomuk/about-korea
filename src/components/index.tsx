import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { accessKey, selectedItem } from '@selector/sgis_selector';

import { getAccessKey } from '@module/sgis_module';

import NavBar from '@common/nav-bar';
import Population from '@components/search/view/population';
import HouseHold from '@components/search/view/household';
import HouseCount from '@components/search/view/house_count';

const Main = () => {
    const keyHandler = useSetRecoilState(accessKey);
    const selectedComponent = useRecoilValue(selectedItem);

    useEffect(() => {
        getAccessKey().then((res) => {
            // sgis 발급 토큰 저장
            keyHandler(res);
        });
        // toastify style 주입(1회 필수)
        injectStyle();
    }, []);

    useEffect(() => {}, [selectedComponent]);

    // FIXME : (전역화 고려)
    function moveErrorPage() {
        const navigate = useNavigate();
        navigate('/error');
    }

    function Contents() {
        switch (selectedComponent) {
            case '인구':
                return <Population />;
            case '가구':
                return <HouseHold />;
            case '주택':
                return <HouseCount />;
            default:
                return <div>헤에에</div>;
        }
    }

    return (
        <>
            <NavBar />
            <Contents />
        </>
    );
};
export default Main;
