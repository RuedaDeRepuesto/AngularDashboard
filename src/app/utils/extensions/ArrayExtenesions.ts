

export class ArrayUtils{

    /**
     * busca coincidencias ignorando mayusculas y minusculas dentro del array, pero solo en las determinadas claves
     * @param self Array
     * @param searchString termino a buscar
     * @param keys Array con terminos a buscar
     * @returns 
     */
    public static search<T>(self:T[],searchString:string,keys:string[]){
        searchString = searchString.toLowerCase();
        let newArray:T[] = []
        console.log(self);
        for (const i of self) {
            for (const j of keys) {
                const keyValue = (i as any)[j].toString().toLowerCase();
                if(keyValue.includes(searchString)){
                    newArray.push(i);
                    break;
                }
                
            }
        }
        return newArray;
    }
}
