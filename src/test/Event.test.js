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

  test("render event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(0);
  });

  test("render event location", () => {
    expect(EventWrapper.find(".event-location")).toHaveLength(0);
  });

  test("render event date", () => {
      expect(EventWrapper.find(".event-start")).toHaveLength(0);
  });

});
