import axios from "axios";
import { BACKEND_BASE_URI } from "../constants/constants";

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
  static getParkingSlots(params) {
    return axios.get(BACKEND_BASE_URI + "/parking-lots", {
      params: params,
    });
  }
  static postRetrieveDiscounts(memberId, parkingLotId, carType) {
    return axios.post(BACKEND_BASE_URI + "/booking/discounts", {
      memberId: memberId,
      parkingLotId: parkingLotId,
      carType: carType,
    });
  }
  static postOrder(memberId, parkingLotId, slotId, discountId, startTime, endTime) {
    let body = discountId !== undefined ? {
      memberId: memberId,
      parkingLotId: parkingLotId,
      parkingSlotId: slotId,
      discountId: discountId,
      parkingStartTime: startTime,
      parkingEndTime: endTime,
    } : 
    {
      memberId: memberId,
      parkingLotId: parkingLotId,
      parkingSlotId: slotId,
      parkingStartTime: startTime,
      parkingEndTime: endTime,
    }

    return axios.post(BACKEND_BASE_URI + "/orders", body);
  }
}

export default ParkGuideApi;
