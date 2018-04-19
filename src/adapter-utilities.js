export default () => {
  let classNames = [];

  return {
    addClass: updateClassNames => (className) => {
      classNames = [...classNames, className];
      updateClassNames(classNames);
    },
    getHeight: element => () => element.offsetHeight,
    getIdleOutlineStyleValue: elementIdleOutline => property =>
      window.getComputedStyle(elementIdleOutline).getPropertyValue(property),
    getWidth: element => () => element.offsetWidth,
    removeClass: updateClassNames => (className) => {
      classNames = classNames.filter(currentClassName => currentClassName !== className);
      updateClassNames(classNames);
    },
  };
};
