class Negociations {
    constructor() {
        this._negociations = [];
    }
    add(negociation) {
        this._negociations.push(negociation);
    }
    stopArray() {
        return [].concat(this._negociations); //defensive programming
    }
}
