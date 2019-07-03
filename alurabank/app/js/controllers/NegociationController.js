class NegociationController {
    constructor() {
        this._negociations = new Negociations();
        this._negociationsView = new NegociationsView('#negociationsView');
        this._inputDate = document.querySelector('#data');
        this._inputHowMuch = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this._negociationsView.update(this._negociations);
    }
    add(event) {
        event.preventDefault();
        const negociation = new Negociation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputHowMuch.value), parseFloat(this._inputValue.value));
        this._negociations.add(negociation);
        this._negociationsView.update(this._negociations);
        // this._negociations.stopArray().forEach(negociation =>{
        //     console.log(negociation.data);
        //     console.log(negociation.howMuch);
        //     console.log(negociation.value);
        //     console.log(negociation.volume);
        // });
    }
}
