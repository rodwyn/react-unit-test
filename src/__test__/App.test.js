import React from "react";
import { mount } from "enzyme";

import App from "../App";

describe("<App>", () => {
  let wrapper;

  beforeAll(() => {
    const props = {
      store: {
        getState: jest.fn(),
        sucbribe: jest.fn(),
        dispatch: jest.fn()
      }
    };
    wrapper = mount(<App {...props} />);
  })

  it("Component is render correctly.", () => {
    expect(wrapper).toBeTruthy();
  })
});
