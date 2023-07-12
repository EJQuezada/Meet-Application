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

    test("render number of events label", () => {
        expect(NumberOfEventsWrapper.find(".number-of-events-label")).toHaveLength(0);
    });
    
});