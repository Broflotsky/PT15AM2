import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import Species from "../src/components/Species/Species";
import data from "../db.json";

configure({ adapter: new Adapter() });

describe("04 | Ejercicios", () => {
  let species;

  beforeAll(() => expect(isReact.classComponent(Species)).toBeFalsy());

  beforeEach(() => {
    species = shallow(
      <Species
        handleAllSpecies={() => {}}
        handleSpecies={() => {}}
        species={data.zoo.species}
      />
    );
    expect(species.find("div").length).toBe(1);
  });

  it("Debería renderizar una etiqueta h2 con el texto 'Species'", () => {
    const h2 = species.find("h2");
    expect(h2).toHaveLength(1);
    expect(h2.text()).toBe("Species");
  });

  it("Debería renderizar un botón por cada una de las especies, y el texto de cada botón debe ser el de cada una de las especies", () => {
    const buttons = species.find("button");
    const buttonsTexts = buttons.map((button) => button.text());
    expect(
      buttonsTexts.includes(
        buttons.at(0).text() && buttons.at(1).text() && buttons.at(2).text()
      )
    ).toBeTruthy();
  });

  it("Cada botón debería tener la propiedad 'key' con el valor de la especie", () => {
    const buttons = species.find("button");
    const buttonsKeys = buttons.map((button) => button.key());
    expect(
      buttonsKeys.includes(
        buttons.at(0).key() && buttons.at(1).key() && buttons.at(2).key()
      )
    ).toBeTruthy();
  });

  it("Cada botón debería tener el evento onClick", () => {
    const buttons = species.find("button");
    expect(buttons.length).toBeGreaterThan(1);
    buttons.forEach((button) => {
      expect(button.props().hasOwnProperty("onClick")).toBe(true);
      expect(button.props().onClick).toBeInstanceOf(Function);
    });
  });

  it("Cada botón debería tener la prop 'value' con el valor de la especie", () => {
    const buttons = species.find("button");
    const buttonsValues = buttons.map((button) => button.prop("value"));
    expect(
      buttonsValues.includes(
        buttons.at(0).prop("value") &&
          buttons.at(1).prop("value") &&
          buttons.at(2).prop("value")
      )
    ).toBeTruthy();
  });

  it("Renderiza una etiqueta 'button' con el texto 'All Animals' que llame a la función 'handleAllSpecies' en su evento 'onClick'", () => {
    const button = species.find("button").at(3);
    expect(button.text()).toBe("All Animals");
    expect(button.props().onClick).toBeInstanceOf(Function);
  });
});
