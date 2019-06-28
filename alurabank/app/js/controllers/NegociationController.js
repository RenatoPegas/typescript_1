class NegociationController {
    constructor() {
        this._inputDate = document.querySelector('#data');
        this._inputHowMuch = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
    }
    add(event) {
        event.preventDefault();
        const negociation = new Negociation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputHowMuch.value), parseFloat(this._inputValue.value));
        console.log(negociation);
    }
}
