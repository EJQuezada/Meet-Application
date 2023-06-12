import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test("Default input is 32", () => {
        expect(NumberOfEventsWrapper.state("query")).toBe(32);
    });

    test("render number of events input correctly", () => {
        const numberOfEvents = NumberOfEventsWrapper.state("query");
        expect(NumberOfEventsWrapper.find(".number-of-events-input").prop("value")).toBe(
        numberOfEvents
        );
    });
});