import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import Animals from "../src/components/Animals/Animals";
import data from "../db.json";

configure({ adapter: new Adapter() });

describe("03 | Ejercicios", () => {
  let animals, animalsDivs;

  beforeAll(() => expect(isReact.classComponent(Animals)).toBe(true));

  beforeEach(() => {
    animals = shallow(<Animals animals={data.zoo.animals} />);
  });

  it("Debería renderizar un div por cada uno de los animales", () => {
    animalsDivs = animals.find("div");
    expect(animalsDivs.length).toBe(data.zoo.animals.length + 1);
  });

  it("Debería renderizar una etiqueta 'h5' dentro de cada div con el nombre de cada animal", () => {
    const h5Tags = animalsDivs.find("h5");
    expect(h5Tags.length).toBe(data.zoo.animals.length);
    h5Tags.forEach((h5, i) => {
      expect(h5.text()).toBe(data.zoo.animals[i].name);
    });
  });

  it("Debería renderizar una etiqueta 'img' dentro de cada div con la imagen de cada animal", () => {
    const animalsImgs = animalsDivs.find("img");
    expect(animalsImgs.length).toBe(data.zoo.animals.length);
    animalsImgs.forEach((img, i) => {
      expect(img.prop("src")).toEqual(data.zoo.animals[i].image);
      expect(img.prop("alt")).toBeDefined();
      expect(img.prop("width")).toBe("300px");
    });
  });

  it("Debería renderizar una etiqueta 'span' dentro de cada div con la especie de cada animal", () => {
    const animalsSpans = animalsDivs.find("span");
    expect(animalsSpans.length).toBe(data.zoo.animals.length);
    animalsSpans.forEach((span, i) => {
      expect(span.text()).toBe(data.zoo.animals[i].specie);
    });
  });
});
