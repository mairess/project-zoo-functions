const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna 4 ao chamar handlerElephants("count")', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array de nomes que possui o nome "Jefferson" contendo  ao chamar handlerElephants("names")', () => {
    const arrayContainsJefferson = handlerElephants('names');
    expect(arrayContainsJefferson).toContain('Jefferson');
  });
  it('retorna "undefined" ao chamar a função handlerElephants sem parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna um número próximo a 10.5 ao chamar handlerElephants("averageAge")', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 5);
  });
  it('retorna a mensagem "Parâmetro inválido, é necessário uma string" ao chamar a função com parâmetro que não seja string, handlerElephants(3544)', () => {
    expect(handlerElephants(3544)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('retorna "NW" ao chamar handlerElephants("location") sem parâmetro', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  it('retorna um número igual ou maior a 5 ao chamar handlerElephants("popularity")', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('retorna um array de dias da semana que não contém "Monday" ao chamar handlerElephants("availability")', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('retorna "null" ao chamar handlerElephants com um parâmetro uppercase ou parâmetro que não existe', () => {
    expect(handlerElephants('availaBIlity')).toBeNull();
    expect(handlerElephants('POPULARITY')).toBeNull();
    expect(handlerElephants('doesNotExitingParam')).not.toBeNull();
  });
});
