export enum InputTypeEnum {
    shortText,
    longText,
    radio,
    select,
    checkmark,
    date, 
    number,
}

export type FormInput = {
    id: string,
    type: InputTypeEnum,
    label: string,
    required: boolean,
    name: string,
    options: string[] | null,
    defaultValue: string | number,
    cssClasses: string[]
}