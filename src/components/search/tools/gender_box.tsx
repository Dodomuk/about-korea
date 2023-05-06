import { useEffect } from 'react';
import { Option, Select } from '@material-tailwind/react';

function GenderBox(props: { genderSelect(gender: number): void }) {
    const searchGenderMap = new Map();

    useEffect(() => {
        searchGenderMap.set('전체', 0);
        searchGenderMap.set('남자', 1);
        searchGenderMap.set('여자', 2);
    }, []);

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="성별" color="green" success>
                {[...searchGenderMap.keys()].map((gender: string) => (
                    <Option key={`gender_${gender}`} onClick={() => props.genderSelect(searchGenderMap.get(gender))}>
                        {gender}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
export default GenderBox;
