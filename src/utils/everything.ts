import dayjs from 'dayjs';

export const contentsList = [
    {
        subject: '센서스',
        content: [
            { id: 'census', title: '센서스' },
            { id: 'population', title: '인구통계' },
            { id: 'household', title: '가구통계' },
            { id: 'house', title: '주택통계' },
            { id: 'company', title: '사업체통계' },
            { id: 'industrycode', title: '산업분류' },
            { id: 'farmhousehold', title: '농가통계' },
            { id: 'forestryhousehold', title: '임가통계' },
            { id: 'fisheryhousehold', title: '어가통계' },
            { id: 'householdmember', title: '가구원통계' }
        ]
    }
];

export const yearList = () => {
    const list = [];
    for (let index = 1980; index < Number(dayjs().format('YYYY')); index++) {
        list.push(index);
    }
    return list.reverse();
};
