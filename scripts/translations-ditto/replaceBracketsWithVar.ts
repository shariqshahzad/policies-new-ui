const MATCH_BETWEEN_BRACKETS = /{(.*?)}/gm;

export const replaceBracketsWithVars = (text: string, i = 0) =>
  text.replace(MATCH_BETWEEN_BRACKETS, () => `{var${++i}}`);
