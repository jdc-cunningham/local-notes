// https://stackoverflow.com/a/8485137/2710227
export const keySafeStr = (str) => str.replace(/[^a-z0-9]/gi, '-').toLowerCase();
