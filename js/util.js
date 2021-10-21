/**
 * Возвращает случайное целое число из переданного диапазона включительно
 * @param {number} from от
 * @param {number} to до
 * @returns {number}
 */
export function getRandomIntegerFromRange(from, to) {
  if (from > to) {
    from -= to;
    to += from;
    from = to - from;
  } else if (from === to) {return from;}

  return from + Math.trunc((to - from + 1) * Math.random());
}

/**
   * Проверка длины строки
   * @param {number} stringForCheck строка на проверку
   * @param {number} maxLength максимальная длина строки включительно
   * @returns {boolean} не длиннее ли строка максимальной длины
   */
export function isNotLonger(stringForCheck, maxLength) {
  if (stringForCheck.length <= maxLength) {return true;}

  return false;
}
