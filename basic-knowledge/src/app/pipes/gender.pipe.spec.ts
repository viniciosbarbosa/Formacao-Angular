import { GenderPipe } from "./gender.pipe";

describe("GenderPipe", () => {
  let pipe: GenderPipe;

  beforeEach(() => {
    pipe = new GenderPipe();
  });

  it('should transform "F" to "Feminino"', () => {
    const result = pipe.transform("F");
    expect(result).toBe("Feminino");
  });

  it('should transform "M" to "Masculino"', () => {
    const result = pipe.transform("M");
    expect(result).toBe("Masculino");
  });

  it('should transform any other value to "Não Definido"', () => {
    const result = pipe.transform("X");
    expect(result).toBe("Não Definido");
  });

  it('should transform lowercase "f" to "Feminino"', () => {
    const result = pipe.transform("f");
    expect(result).toBe("Feminino");
  });

  it('should transform lowercase "m" to "Masculino"', () => {
    const result = pipe.transform("m");
    expect(result).toBe("Masculino");
  });
});
