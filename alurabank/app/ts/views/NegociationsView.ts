class NegociationsView{
    
    private _element: Element;

    constructor(selector:string){

        this._element = document.querySelector(selector);
        
    }

    update(model: Negociations) : void {
        this._element.innerHTML = this.template(model);
    }

    template(model: Negociations): string{

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.stopArray().map(negociation=>{
                        return `
                            <tr>
                                <td>${negociation.data.getDate()}/${negociation.data.getMonth() + 1}/${negociation.data.getFullYear()}</td>
                                <td>${negociation.howMuch}</td>
                                <td>${negociation.value}</td>
                                <td>${negociation.volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>   
        `;

    }
}