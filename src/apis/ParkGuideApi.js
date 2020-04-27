import axios from 'axios';
import { BACKEND_BASE_URI } from '../constants/constants';


class ParkGuideApi {
    static getAllParkingLots() {
        return axios.get(BACKEND_BASE_URI + "/parking-lots");
    }
    static getTodoById(id) {
        return axios.get(BACKEND_BASE_URI + "/parking-lots/" + id);
    }
    static getAllParkingLotsLocation() {
        return axios.get(BACKEND_BASE_URI + "/parking-lots/locations");
    }
}

export default ParkGuideApi;