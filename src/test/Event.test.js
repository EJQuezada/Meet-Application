import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  const event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test("renders the component", () => {
    expect(EventWrapper).toBeDefined();
  });

  test("correct details are rendered", () => {
    const display = EventWrapper.find(".detailsButton");
    display.simulate("click");
    const summary = EventWrapper.find(".title");
    const details = EventWrapper.find(".details li");
    expect(summary.text()).toBe(`Summary: ${event.summary}`);
    expect(details.at(0).text()).toBe(`Description: ${event.description}`);
    expect(details.at(1).text()).toBe(`Location: ${event.location}`);
    expect(details.at(2).text()).toBe(
      `Start: ${new Date(event.start.dateTime).toISOString()}`
    );
    expect(details.at(3).text()).toBe(
      `End: ${new Date(event.end.dateTime).toISOString()}`
    );
  });

  test("toggle boolean", () => {
    const display = EventWrapper.find(".detailsButton");
    display.simulate("click");
    expect(EventWrapper.state("hide")).toBe(true);
  });
});