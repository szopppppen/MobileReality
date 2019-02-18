import { StoreBase, AutoSubscribeStore, autoSubscribe } from "resub";
import { HouseModel } from "./HouseModel";
import { BackendManager } from "./BackendManager";

@AutoSubscribeStore
export class HousesStore extends StoreBase {
    private static instance: HousesStore;
    houses: HouseModel[] = [];

    static getInstance() {
        if (!HousesStore.instance) {
            HousesStore.instance = new HousesStore();
        }
        return HousesStore.instance;
    }

    loadData(): Promise<void> {
        return new Promise<void>(async (resolve) => {
            let response = await BackendManager.getInstance().loadHouses();
            if (response && response.length > 0) {
                this.houses = [];
                response.forEach(house => {
                    this.houses.push(new HouseModel(house._id, house.address, house.owner, house.price, house.area));
                });
                this.trigger();
                resolve();
            }
        });
    }

    addHouse(house: HouseModel): Promise<void> {
        return new Promise<void>(async (resolve) => {
            let response = await BackendManager.getInstance().addHouse(house);
            if (response) {
                this.houses.push(new HouseModel(response._id, response.address, response.owner, response.price, response.area));
                this.trigger();
                resolve();
            }
        });
    }

    @autoSubscribe
    getHouses() {
        return this.houses;
    }
}