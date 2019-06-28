class NegociationController{
    
    private _inputDate: HTMLInputElement;
    private _inputHowMuch: HTMLInputElement;
    private _inputValue: HTMLInputElement;

    constructor(){

        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputHowMuch = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');
    }

    add(event: Event){

        event.preventDefault();
        
        const negociation = new Negociation(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputHowMuch.value),
            parseFloat(this._inputValue.value)
        );

        console.log(negociation);
    }
}