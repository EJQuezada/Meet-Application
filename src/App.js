import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import Event from "./Event";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: []
  }

componentDidMount() {
  getEvents().then((events) => {
    this.setState({ events, locations: extractLocations(events) });
  });
}

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <Event />
        <NumberOfEvents />
      </div>
    );
  }
}

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === "all") ?
      events:
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
  });
}

export default App;
