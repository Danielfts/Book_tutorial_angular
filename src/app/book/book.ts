import { Editorial } from "../editorial/editorial";

export class Book {
    constructor(
        public id:number,
        public name:string,
        public isbn:string,
        public description:string,
        public image:string,
        public publicshingdate:any,
        public editorial:Editorial
    ){

    }
}
