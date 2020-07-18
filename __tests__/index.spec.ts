import { sum, validateCpf, generateCpf } from '../src'test('Sum 4 + 5 = 9', () => {    expect(sum(4, 5)).toBe(9)});test('Generate fake valid cpf, mask string', () => {    expect(generateCpf(true)).toHaveLength(14)})test('Generate fake valid cpf, only numbers', () => {    expect(generateCpf(false)).toHaveLength(11)})test('Validate cpf, with number fake (really)', () => {    expect(validateCpf(generateCpf(true))).toBe(true)})test('Cpf invalid', () => {    expect(validateCpf(12345)).toBe(false)    expect(validateCpf(40513673135)).toBe(false)    expect(validateCpf("123.145.567-12")).toBe(false)})test('Validate cpf without value', () => {    expect(validateCpf(undefined)).toBe(false)})