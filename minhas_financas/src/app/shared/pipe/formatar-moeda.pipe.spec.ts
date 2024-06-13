import { FormatarMoedaPipe } from "./formatar-moeda.pipe";
import { TestBed } from "@angular/core/testing";

describe("FormatarMoedaPipe", () => {
  let pipe: FormatarMoedaPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    pipe = new FormatarMoedaPipe();
  });

  describe("FormatarMoedaPipe", () => {
    it("create an instance", () => {
      const pipe = new FormatarMoedaPipe();
      expect(pipe).toBeTruthy();
    });
  });

  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should format number to BRL currency", () => {
    const value = 12345.67;
    const expectedResult = "R$12.345,67";
    expect(pipe.transform(value)).toEqual(expectedResult);
  });

  it("should format number to USD currency", () => {
    const value = 12345.67;
    const expectedResult = "$12,345.67";
    expect(pipe.transform(value, "en-US", "USD")).toEqual(expectedResult);
  });

  it("should format number to EUR currency", () => {
    const value = 12345.67;
    const expectedResult = "€12.345,67";
    expect(pipe.transform(value, "de-DE", "EUR")).toEqual(expectedResult);
  });

  it("should return null for null or NaN input", () => {
    const value = null;
    expect(pipe.transform(value)).toBeNull();

    const valueNaN = NaN;
    expect(pipe.transform(valueNaN)).toBeNull();
  });
});
