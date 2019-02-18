import { Alert } from "react-native";
import { HouseModel } from "./HouseModel";

export class BackendManager {
    private static instance: BackendManager;

    static getInstance() {
        if (!BackendManager.instance) {
            BackendManager.instance = new BackendManager();
        }
        return BackendManager.instance;
    }

    async loadHouses(): Promise<any> {
        try {
            let response = await fetch(
                'http://mr-test-backend.sadek.usermd.net/houses',
            );
            let responseJson = await response.json();
            return responseJson.houses;
        } catch (error) {
            Alert.alert("Error", `Couldn't fetch items - ${error}`, [{ text: "OK" }]);
        }
    }

    async addHouse(house: HouseModel): Promise<any> {
        try {
            let response = await fetch(
                'http://mr-test-backend.sadek.usermd.net/houses',
                {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "address": house.address,
                        "owner": house.owner,
                        "price": house.price,
                        "area": Number(house.area),
                    }),
                }
            );
            let responseJson = await response.json();
            return responseJson;
            
        } catch (error) {
            Alert.alert("Error", `Error while adding element`, [{ text: "OK" }]);
        }
    }
}