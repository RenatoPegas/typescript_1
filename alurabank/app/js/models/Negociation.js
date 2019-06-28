class Negociation {
    constructor(_date, _howMuch, _value) {
        this._date = _date;
        this._howMuch = _howMuch;
        this._value = _value;
    }
    get data() { return this._date; }
    get howMuch() { return this._howMuch; }
    get value() { return this._value; }
    get volume() { return this._howMuch * this._value; }
}
