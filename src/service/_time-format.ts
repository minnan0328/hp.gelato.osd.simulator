export const toDisplayTimeFormat = (
    totalSeconds: number,
    format: string = "HH:mm",
): string => {
    if (totalSeconds < 0) totalSeconds = 0;
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const secPad = (num: number): string => num.toString().padStart(2, '0');
    const minPad = (num: number): string => num.toString().padStart(1, '0');

    return `${minPad(minutes)}:${secPad(seconds)}`;
};

export const minutesTolSeconds = (time: number): number => {
    return time * 60;
};

export const secondsToMinutes = (time: number): number => {
    return time / 60;
};
