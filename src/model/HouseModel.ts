export class HouseModel {
    id: string;
    address: string;
    owner: string;
    price: string;
    area: string;

    constructor(id: string = "", address: string = "", owner: string = "", price: string = "", area: string = "") {
        this.id = id;
        this.address = address;
        this.owner = owner;
        this.price = price;
        this.area = area;
    }
}