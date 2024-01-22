import { add } from "@/add";

describe('add', () => {
  it('should add when 2 numbers are passed', () => {
    expect(add(1, 2)).toEqual(3)
  })
});
