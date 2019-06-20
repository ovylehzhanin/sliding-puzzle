import Model from '@app/model';

test('Should create model instance', () => {
  let model = new Model();

  expect(model).not.toBeUndefined();
});
