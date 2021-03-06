export interface J4careDateTime {
    FullYear:string;
    Month:string;
    Date:string;
    Hours:string;
    Minutes:string;
    Seconds:string;
    dateObject?:Date;
}
export type J4careDateTimeMode = "range" | "leftOpen" | "rightOpen" | "single";

export interface RangeObject {
    firstDateTime:J4careDateTime;
    secondDateTime:J4careDateTime;
    mode:J4careDateTimeMode;
}

export type StatisticsPage = "simple"|"detailed"

export type FilterTag = "button"|"input"|"checkbox"|"select"|"modality"|"range-picker-limit"|"range-picker-time"|"range-picker" | "p-calendar" |"multi-select"|"label"|"label_large"|"dummy";

export type RangeUnit = "hour" | "day" | "week" | "month" | "year";

export class SelectDropdown {
    private _value:string;
    private _text:string;
    private _label:string;
    private _title?:string;
    constructor(value:any,text:string, title?:string){
        this._value = value;
        this._text = text;
        this._label = text;
        this._title = title;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get label(): string {
        return this._label;
    }

    set label(value:string) {
        this._label = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}
export type Quantity = "count"|"size"|string;
export type StudyDateMode = "StudyReceiveDateTime"|"StudyDate"|string;
export type FilterSchema = FilterSchemaElement[];

export interface FilterSchemaElement {
    tag:FilterTag;
    filterKey?:string;
    type?:"text"|"number";
    text?:string;
    id?:string;
    description?:string;
    placeholder?:string;
    showStar?:boolean;
    maxSelectedLabels?:number;
    options?:SelectDropdown[]
}

export type StudyTab = "study" | "patient" | "mwl" | "diff";
export type AccessLocation = "internal" | "external";

export interface StudyFilterConfig {
    filterSchemaMain:{schema:FilterSchema,lineLength:number};
    filterSchemaExpand:{schema:FilterSchema,lineLength:number};
    filterModel:any;
    expand:boolean;
    quantityText:{
        count:string,
        size:string
    }
}

export interface StudyPageConfig {
    tab:StudyTab;
    accessLocation:AccessLocation;
}
