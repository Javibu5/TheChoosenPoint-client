import React, { Component } from "react";
import axios from "axios";
import Zone from "../Zone";

export class ArrivalZones extends Component {
  componentDidMount() {
    axios
      .get("https://the-chosen-point.herokuapp.com/api/arrival_zones", {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        const { data } = response;
        this.props.selectSite(data);
      });
  }

  render() {
    const { arrivalZones } = this.props;
    return arrivalZones ? (
      arrivalZones.map(arrivalZone => {
        const { name, description } = arrivalZone;
        return <Zone name={name} description={description} />;
      })
    ) : (
      <div>Loading...</div>
    );
  }
}
