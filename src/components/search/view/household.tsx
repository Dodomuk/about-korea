import { houseHoldStat } from '@/selector/census_selector';
import { useSetRecoilState } from 'recoil';

function HouseHold() {
    const houseHoldStatHandler = useSetRecoilState(houseHoldStat);
}

export default HouseHold;
