import { connect } from "react-redux";
import { ArrivalZones } from "../components/ArrivalZones";
import { fetchArrival } from "../actions/fetchArrival";

const mapStateToProps = ({ arrivalZones }) => ({
  arrivalZones
});

const mapDispatchtoProps = dispatch => ({
  fetchArrival: apiReq => dispatch(fetchArrival(apiReq))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ArrivalZones);
