export interface LocaleWithName {
  name: {
    en?: string;
    ar?: string;
    bn?: string;
    hi?: string;
    fil?: string;
    ur?: string;
  };
}

export interface LocaleWithLangPrefix {
  ar?: string;
  en?: string;
  bn?: string;
  hi?: string;
  fil?: string;
  ur?: string;
}

export interface LocaleWithCamelizedPrefix {
  nameAr?: string;
  nameEn?: string;
  nameBn?: string;
  nameHi?: string;
  nameFil?: string;
  nameUr?: string;
}

export type TranslationObject = Record<string, string>;

export interface GenericTranslation {
  [x: string]: string | number | null | TranslationObject;
}
