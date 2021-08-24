export class Store{

    id: string
    title:string
    shortId:string
    logo:Logo
    active:boolean
    latitude:number
    longitude:number
    address:string
    postalCode:number
    city:number
    
    
    constructor( id: string,
        title:string,
        shortId:string,
        logo:Logo,
        active:boolean,
        latitude:number,
        longitude:number,
        address:string,
        postalCode:number,
        city:number
        ){
       this.id=id;
       this.title=title;
       this.shortId=shortId;
       this.logo=logo;
       this.active=active;
       this.latitude=latitude;
       this.longitude=longitude;
       this.address=address;
       this.postalCode=postalCode;
       this.city=city;

    }
    }
    export class Logo{
url:string
constructor(url:string){
    this.url=url;
}
    }