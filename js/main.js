function getRandomIntegerFromRange(from, to) {
  if (from > to) {
    from -= to;
    to += from;
    from = to - from;
  } else if (from === to) {return from;}

  return from + Math.trunc((to - from + 1) * Math.random());
}

function isNotLonger(stringForCheck, maxLength) {
  if (stringForCheck.length <= maxLength) {return true;}

  return false;
}
