class Negociation {
    constructor(date, howMuch, value) {
        this._date = date;
        this._howMuch = howMuch;
        this._value = value;
    }
    get data() { return this._date; }
    get howMuch() { return this._howMuch; }
    get value() { return this._value; }
    get volume() { return this._howMuch * this._value; }
}
