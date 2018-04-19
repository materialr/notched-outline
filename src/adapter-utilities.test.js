import adapterUtilities from './adapter-utilities';

const adapterUtilitiesInstance = adapterUtilities();

const CLASS_NAME_1 = 'CLASS_NAME_1';
const CLASS_NAME_2 = 'CLASS_NAME_2';

test('\'addClass()\' adds a className and sends the list to \'updateClassNames()\'', () => {
  const expectedFirst = [CLASS_NAME_1];
  const expectedSecond = [CLASS_NAME_1, CLASS_NAME_2];
  const updateClassNames = jest.fn();

  adapterUtilitiesInstance.addClass(updateClassNames)(CLASS_NAME_1);
  adapterUtilitiesInstance.addClass(updateClassNames)(CLASS_NAME_2);

  expect(updateClassNames.mock.calls[0][0]).toEqual(expectedFirst);
  expect(updateClassNames.mock.calls[1][0]).toEqual(expectedSecond);
});

test('\'getHeight()\' gets the element\'s height', () => {
  const OFFSET_HEIGHT = 'OFFSET_HEIGHT';
  const element = { offsetHeight: OFFSET_HEIGHT };
  const expected = OFFSET_HEIGHT;

  const actual = adapterUtilitiesInstance.getHeight(element)();

  expect(actual).toBe(expected);
});

test('\'getIdleOutlineStyleValue()\' returns the style value for the element', () => {
  const ELEMENT = 'ELEMENT';
  const PROPERTY = 'PROPERTY';
  const RETURN = 'RETURN';
  const getComputedStyle = jest.fn();
  const getPropertyValue = jest.fn();
  const expectedGetComputedStyle = ELEMENT;
  const expectedGetPropertyValue = PROPERTY;
  const expectedReturn = RETURN;
  getComputedStyle.mockReturnValue({ getPropertyValue });
  getPropertyValue.mockReturnValue(RETURN);
  global.getComputedStyle = getComputedStyle;

  const actualReturn = adapterUtilitiesInstance.getIdleOutlineStyleValue(ELEMENT)(PROPERTY);
  const actualGetComputedStyle = getComputedStyle.mock.calls[0][0];
  const actualGetPropertyValue = getPropertyValue.mock.calls[0][0];

  expect(actualGetComputedStyle).toBe(expectedGetComputedStyle);
  expect(actualGetPropertyValue).toBe(expectedGetPropertyValue);
  expect(actualReturn).toBe(expectedReturn);
});

test('\'getWidth()\' gets the element\'s width', () => {
  const OFFSET_WIDTH = 'OFFSET_WIDTH';
  const element = { offsetWidth: OFFSET_WIDTH };
  const expected = OFFSET_WIDTH;

  const actual = adapterUtilitiesInstance.getWidth(element)();

  expect(actual).toBe(expected);
});

test('\'removeClass()\' removes a classNames and sends the list of classNames to \'updateClassNames()\'', () => {
  const expectedFirst = [CLASS_NAME_1];
  const expectedSecond = [];
  const updateClassNames = jest.fn();

  adapterUtilitiesInstance.removeClass(updateClassNames)(CLASS_NAME_2);
  adapterUtilitiesInstance.removeClass(updateClassNames)(CLASS_NAME_1);

  expect(updateClassNames.mock.calls[0][0]).toEqual(expectedFirst);
  expect(updateClassNames.mock.calls[1][0]).toEqual(expectedSecond);
});
