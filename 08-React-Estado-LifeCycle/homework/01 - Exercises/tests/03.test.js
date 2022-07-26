import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import Species from "../src/components/Species/Species";
import data from "../db.json";

configure({ adapter: new Adapter() });

describe("03 | Ejercicios", () => {
  let species;

  beforeAll(() => expect(isReact.classComponent(Species)).toBeFalsy());

  beforeEach(() => {
    species = shallow(<Species species={data.animals.species} />);
  });

  it("Debería renderizar un unico div", () => {
    expect(species.find("div").length).toBe(1);
  });

  it("Debería renderizar una etiqueta h2 con el texto 'Species'", () => {
    const h2 = species.find("h2");
    expect(h2).toHaveLength(1);
    expect(h2.text()).toBe("Species");
  });

  it("Debería renderizar un botón por cada una de las especies, y el texto de cada botón debe ser el de cada una de las especies", () => {
    const buttons = species.find("button");
    expect(buttons).toHaveLength(data.animals.species.length);
    const buttonsTexts = buttons.map((button) => button.text());
    expect(
      buttonsTexts.includes(
        buttons.at(0).text() && buttons.at(1).text() && buttons.at(2).text()
      )
    ).toBeTruthy();
  });

  it("Cada botón debería tener el evento onClick con un valor de la prop handleSpecies", () => {
    const buttons = species.find("button");
    buttons.forEach((b) => {
      expect(b.prop("onClick")).toBe(species.instance().handleSpecies);
    });
  });
});
