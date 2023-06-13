import React, { Component } from "react"; 
import Event from "./Event";
import CitySearch from "./CitySearch";

class EventList extends Component {
    render() {
        return (
            <div className="App">
                <CitySearch />
                <EventList events={this.state.events} />
            </div>
        ); 
    //{
        //const { events } = this.props;
        //return (
        //    <ul className='EventList'>
        //        {this.props.events.map(event) => ( 
        //            <li key={event.id}>
        //                <Event event={event} />
        //            </li>
        //        )}
        //    </ul>
        //);
    //}
    };
}

export default EventList;