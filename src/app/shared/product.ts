export class Product{

    id: string
    name:string
    vendor:string
    images:Image[]
    active:boolean
    handle:string
    barcode:number
    tags:string
    createdAt:string
    price:number
    taxPercent:number
    description:string

    
    
    constructor(   id: string,
        name:string,
        vendor:string,
        images:Image[],
        active:boolean,
        handle:string,
        barcode:number,
        tags:string,
        createdAt:string,
        price:number,
        taxPercent:number,
        description:string
    
        ){
       this.id=id;
       this.name=name;
       this.vendor=vendor;
       this.images=images;
       this.active=active;
       this.handle=handle;
       this.barcode=barcode;
       this.tags=tags;
       this.createdAt=createdAt;
       this.price=price;
       this.taxPercent=taxPercent;
       this.description=description;

    }
    }
    export class Image{
url:string
constructor(url:string){
    this.url=url;
}
    }