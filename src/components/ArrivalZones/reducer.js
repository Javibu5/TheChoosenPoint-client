import { FETCH_ARRIVAL } from "../../actions/fetchArrival";

export const ArrivalZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARRIVAL:
      return {
        ...state,
        arrivalZones: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  arrivalZones: []
};
