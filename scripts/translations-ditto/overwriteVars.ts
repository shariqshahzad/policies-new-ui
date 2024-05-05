const MATCH_BETWEEN_BRACKETS = /{(.*?)}/gm;

export const overwriteVars = (en: string, ar: string) => {
  const vars = {
    en: en.match(MATCH_BETWEEN_BRACKETS) ?? [],
    ar: ar.match(MATCH_BETWEEN_BRACKETS) ?? [],
  };

  if (vars.en.length !== vars.ar.length || !vars.en.length || !vars.ar.length) {
    return ar;
  }

  vars.ar.forEach((varAr, i) => {
    ar = ar.replace(varAr, vars.en[i]);
  });

  return ar;
};
