 class Negociations {

     private _negociations: Array<Negociation> = [];

     add(negociation: Negociation): void{
        
        this._negociations.push(negociation);
     }
      stopArray(): Negociation[] {

        return [].concat(this._negociations);  //defensive programming
        
      }
            
 }