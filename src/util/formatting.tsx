export const formatIconDesc = (text: string) => {
    const s = text.replaceAll('-', ' ');
    let char = s.substring(0, 1)
    return char.toUpperCase() + s.substring(1, s.length);
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
export const formatDate = (UNIX: number) => {
    const i = (Math.floor(UNIX / 86400) + 5) % 7
    return DAYS_OF_WEEK[i];
}

export const farToCel = (num: number) => {
    return (num - 32) * .5556;
}