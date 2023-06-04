import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents/> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    });

    test("Default input is 24", () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(24);
    });

    test("Value changes correctly", () => {
        NumberOfEventsWrapper.find(".numberOfEvents").simulate("change", {
            target: { value: 18 },
        });
        expect(NumberOfEventsWrapper.state("query")).toBe(18);
    });
});