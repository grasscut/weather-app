import moment from "moment/moment";

export const dayTimes = [
    {
        abbr: 'morn',
        name: 'Morning',
        start: 5
    },
    {
        abbr: 'day',
        name: 'Day',
        start: 12
    },
    {
        abbr: 'eve',
        name: 'Evening',
        start: 18
    },
    {
        abbr: 'night',
        name: 'Night',
        start: 24
    }
];

export const getDayTime = date => {
    const hours = Number(moment(date).local().format('kk'));

    return dayTimes
        .reduce(
            (prevTime, time) => {
                const match = hours >= prevTime.start && hours < time.start;

                return match ? prevTime : time;
            }
        );
};