const MATCH_NUMBERS = /[0-9][0-9]*(?!([0-9]|st|[rn]d))/gm;

export const replaceNumbersWithVar = (text: string, i = 0) => text.replace(MATCH_NUMBERS, () => `{var${++i}}`);
