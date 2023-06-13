import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";

describe("<App /> component", () => { // describe() function groups tests together
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />); // shallow rendering
    });

    test("render list of events", () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1); // check if EventList component is rendered
    });

    test("render CitySearch", () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1); // check if CitySearch component is rendered
    });

    test("render NumberOfEvents", () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1); // check if NumberOfEvents component is rendered
    });


});

describe("<App /> integration", () => {
    test("App passes 'events' state as a prop to EventList", () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });
});