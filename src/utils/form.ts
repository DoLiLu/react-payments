import { SLASH } from '../constant';

export const validateDigit = (digit: number | string, targetName: string) => {
  const value = String(digit).replace(/\D+/g, '');
  nextFocus(value, targetName, 4);
  return value;
};

export const validateExpire = (digit: string) => {
  const value = digit.replace(/\D+/g, '');

  if (Number(value.substring(0, 2)) > 12) {
    alert('1이상 12이하의 월을 입력해주세요');
    return '';
  }

  return insertSlash(value, value.length);
};

const insertSlash = (value: string, length: number) => {
  const DIGIT_BEFORE_SLASH_LENGTH = 3;
  const DIGIT_AFTER_SLASH_LENGTH = 5;

  let result = '';
  if (length < DIGIT_BEFORE_SLASH_LENGTH) result = value;
  else if (length < DIGIT_AFTER_SLASH_LENGTH) {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2);
  } else {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2, 4);
  }

  return result;
};

export const validatePassword = (digit: string, targetName: string) => {
  const value = digit.replace(/\D+/g, '');
  nextFocus(value, targetName, 1);
  return value;
};

const nextFocus = (
  value: string,
  targetName: string,
  nextFocusLength: number
) => {
  const nextId = Number(targetName.slice(-1)) + 1;
  const targetId = targetName.slice(0, targetName.length - 1);
  const nextRef = document.getElementById(targetId + nextId);
  if (value.length === nextFocusLength) {
    if (!nextRef) return;
    nextRef.focus();
  }
};
