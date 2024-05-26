export interface GenericObject {
    [key: string]: string | number | boolean | File | GenericObject | Array<GenericObject>;
  }
  