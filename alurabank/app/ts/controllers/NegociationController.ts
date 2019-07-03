class NegociationController{
    
    private _inputDate: HTMLInputElement;
    private _inputHowMuch: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negociations: Negociations = new Negociations();
    private _negociationsView = new NegociationsView('#negociationsView');

    constructor(){

        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputHowMuch = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');
        this._negociationsView.update(this._negociations);
    }

    add(event: Event){

        event.preventDefault();
        
        const negociation = new Negociation(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputHowMuch.value),
            parseFloat(this._inputValue.value)
        );
        
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