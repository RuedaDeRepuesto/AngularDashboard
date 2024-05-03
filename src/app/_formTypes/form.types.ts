
import {MaskitoOptions} from '@maskito/core';

export class ComplexText{
    private text: string;
    private type:ComplexEnum;
    private _pattern:string|undefined;

  constructor(text: string,type:ComplexEnum,pattern:string|undefined = undefined) {
    this.setFormats();
    this.text = text;
    this.type = type;
    this._pattern = pattern;
  }

  private setFormats(){
  }
  
  get(): string {
    return this.text;
  }

  getType(){
    return this.type;
  }



  public get pattern(){
    return this._pattern;
  }



  set(text: string): void {
    this.text = text;
  }
}

export type ComplexEnum = 'email'|'tel';

export class DatePickInput{

 

  constructor(private _date:string|Date,private _showTime = false){

  }



  public get date(){
    return this._date;
  }

  public get showTime(){
    return this._showTime;
  }
}