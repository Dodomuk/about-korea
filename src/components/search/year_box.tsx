import { yearList } from '@/utils/everything';
import { Option, Select } from '@material-tailwind/react';

function YearBox(props: { yearSelect(year: number): void }) {
    const searchYearList = yearList();

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="검색할 년도" color="green" success>
                {searchYearList.map((year) => (
                    <Option key={`year_${year}`} onClick={() => props.yearSelect(year)}>
                        {year}
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default YearBox;
