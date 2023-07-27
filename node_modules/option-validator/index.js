import kindOf from 'kind-of';

function optionValidator(option, scheme, paths = ['option']) {
  checkType(option, scheme, paths);
  checkValidator(option, scheme, paths);
  checkChild(option, scheme, paths);
  return option;
}

function checkChild(option, scheme, paths) {
  const schemeType = kindOf(scheme);
  const optionType = kindOf(option);
  if (schemeType === 'object') {
    if (optionType === 'object') {
      Object.keys(scheme).forEach((key) => {
        const childOption = option[key];
        const childScheme = scheme[key];
        const childPath = paths.slice();
        childPath.push(key);
        checkType(childOption, childScheme, childPath);
        checkValidator(childOption, childScheme, childPath);
        optionValidator(childOption, childScheme, childPath);
      });
    } else {
      throw new Error(`[Type Error]: '${paths.join('.')}' require 'object' type, but got '${optionType}'`);
    }
  }

  if (schemeType === 'array') {
    if (optionType === 'array') {
      option.forEach((_, key) => {
        const childOption = option[key];
        const childScheme = scheme[key] || scheme[0];
        const childPath = paths.slice();
        childPath.push(key);
        checkType(childOption, childScheme, childPath);
        checkValidator(childOption, childScheme, childPath);
        optionValidator(childOption, childScheme, childPath);
      });
    } else {
      throw new Error(`[Type Error]: '${paths.join('.')}' require 'array' type, but got '${optionType}'`);
    }
  }
}

function checkType(option, scheme, paths) {
  if (kindOf(scheme) !== 'string') return;
  const optionType = kindOf(option);
  let result = false;
  if (scheme[0] === '?') {
    scheme = scheme.slice(1) + '|undefined';
  }
  if (scheme.indexOf('|') > -1) {
    result = scheme
      .split('|')
      .map((item) => item.toLowerCase().trim())
      .filter(Boolean)
      .some((item) => optionType === item);
  } else {
    result = scheme.toLowerCase().trim() === optionType;
  }
  if (!result) {
    throw new Error(`[Type Error]: '${paths.join('.')}' require '${scheme}' type, but got '${optionType}'`);
  }
}

function checkValidator(option, scheme, paths) {
  if (kindOf(scheme) !== 'function') return;
  const optionType = kindOf(option);
  const result = scheme(option, optionType, paths);
  if (result === true) return;
  const resultType = kindOf(result);
  if (resultType === 'string') {
    throw new Error(result);
  } else if (resultType === 'error') {
    throw result;
  } else {
    throw new Error(
      `[Validator Error]: The scheme for '${paths.join('.')}' validator require return true, but got '${result}'`
    );
  }
}

optionValidator.kindOf = kindOf;
export default optionValidator;
