// @ts-ignore
describe( 'Test examples', () => {
  it('should call with a value', () => {
    const foo = jest.fn();
    const hello = 'Hello JsDayCan!';

    foo(hello);

    expect(foo).toHaveBeenCalled();
    expect(foo).toHaveBeenCalledWith(hello);
  });

  it('should return a value', () => {
    const hello = 'Hello JsDayCan!';
    const bye = 'Happy coding!';

    const foo = jest.fn( (message) => bye);

    const response = foo(hello);

    expect(foo).toHaveBeenCalled();
    expect(foo).toHaveBeenCalledWith(hello);
    expect(response).toEqual(bye);
  });
});
