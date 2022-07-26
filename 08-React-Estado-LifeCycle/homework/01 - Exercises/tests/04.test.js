import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import Animals from "../src/components/Animals/Animals";

configure({ adapter: new Adapter() });

describe("04 | Ejercicios", () => {
  let animals;
  beforeAll(() => expect(isReact.classComponent(Animals)).toBeTruthy());

});
