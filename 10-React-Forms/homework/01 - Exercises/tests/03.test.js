// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Contact from "../src/components/Contact/Contact";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes

configure({ adapter: new Adapter() });

describe("02 | Ejercicios", () => {
  let contact;
  beforeEach(() => {
    contact = shallow(<Contact />);
  });

  
});
