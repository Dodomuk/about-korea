import dayjs from 'dayjs';

export const contentsList = [
    { id: 'population', title: '인구통계' },
    { id: 'houseHold', title: '가구통계' },
    { id: 'house', title: '주택통계' },
    { id: 'corp', title: '사업체통계' },
    { id: 'etc', title: '그 외' }
];

export const yearList = () => {
    const list = [];
    for (let index = 1980; index < Number(dayjs().format('YYYY')); index++) {
        list.push(index);
    }
    return list.reverse();
};
