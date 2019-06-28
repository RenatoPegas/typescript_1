class Negociation{

    constructor(private _date: Date, private _howMuch: number, private _value: number){}

    get data() { return this._date; }

    get howMuch() { return this._howMuch; }

    get value() { return this._value; }

    get volume(){ return this._howMuch * this._value; }
}