import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import Event from "./Event";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css"
import { ErrorAlert, InfoAlert, WarningALert } from "./Alert";
import CityEventsChart from "./components/CityEventsChart";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (!eventCount) {
      getEvents().then((events) => {
        const locationEvents = (location === "all") ?
          events:
          events.filter((event) => event.location === location);
        this.setState({
          events: locationEvents
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <div className="alerts-container">
          {InfoAlert.length ? <InfoAlert text={infoAlert} /> : null}
          {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
          {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        </div>
        <CitySearch 
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert} />
        <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
        <CityEventsChart allLocations={allLocations} events={events} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
