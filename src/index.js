import { MDCNotchedOutlineFoundation } from '@material/notched-outline';

import adapterUtilities from './adapter-utilities';

export default ({
  elementIdleOutline,
  elementRoot,
  updateClassNames,
  updateOutlinePathAttribute,
}) => {
  const {
    addClass,
    getHeight,
    getIdleOutlineStyleValue,
    getWidth,
    removeClass,
  } = adapterUtilities();

  return new MDCNotchedOutlineFoundation({
    addClass: addClass(updateClassNames),
    getHeight: getHeight(elementRoot),
    getIdleOutlineStyleValue: getIdleOutlineStyleValue(elementIdleOutline),
    getWidth: getWidth(elementRoot),
    removeClass: removeClass(updateClassNames),
    setOutlinePathAttr: updateOutlinePathAttribute,
  });
};
