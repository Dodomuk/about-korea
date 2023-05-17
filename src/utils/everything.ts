import { NavigateFunction } from 'react-router-dom';

export const contentsList: { [key: string]: { id: string; title: string }[] } = {
    센서스: [
        { id: 'population', title: '인구통계' },
        { id: 'household', title: '가구통계' },
        { id: 'house', title: '주택통계' },
        { id: 'company', title: '사업체통계' },
        { id: 'farmhousehold', title: '농가통계' },
        { id: 'forestryhousehold', title: '임가통계' },
        { id: 'fisheryhousehold', title: '어가통계' }
        // { id: 'householdmember', title: '가구원통계' } // SGIS에서 가구원 통계에 대한 값을 주지 않음
    ]
};
//
//차트에 랜덤한 색상 부여
export function chartSketch(count: number) {
    const sketchArr: string[] = [];
    const getColorCode = (): string => {
        const color = palette[Math.floor(Math.random() * palette.length)];
        return sketchArr.includes(color) ? getColorCode() : color;
    };

    for (let i = 0; i < count; i++) {
        sketchArr.push(getColorCode());
    }

    return sketchArr;
}

const palette = [
    '#ff0000',
    '#800000',
    '#a52a2a',
    '#8b4513',
    '#bc8f8f',
    '#fa8072',
    '#ff7f50',
    '#f4a460',
    '#ffa8c00',
    '#ffff00',
    '#f0e68c',
    '#7cfc00',
    '#32cd32',
    '#006400',
    '#3cb371',
    '#008080',
    '#20b2aa',
    '#5f9ea0',
    '#4682b4',
    '#7fffd4',
    '#b0c4de',
    '#87cefa',
    '#00ffff',
    '#1e90ff',
    '#0000ff',
    '#0000cd',
    '#000080',
    '#6a5acd',
    '#7b68ee',
    '#9932cc',
    '#8a2be2',
    '#ba55d3',
    '#ff69b4',
    '#ffc0cb',
    '#dcdcdc',
    '#c0c0c0',
    '#a9a9a9',
    '#708090',
    '#2f4f4f',
    '#fffafa'
];

export function progressBeforeNav(navigate: NavigateFunction, to: string) {
    navigate({ pathname: '/progress', search: `?page=${to}` });
}
