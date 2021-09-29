function getRandomIntegerFromRange(from, to) {
    if (from > to) {
        let temp = from;
        from = to;
        to = temp;
    } else if (from == to) return from;

    return from + Math.trunc((to - from + 1) * Math.random());
}

function isNotLonger (stringForCheck, maxLength) {
    if (stringForCheck.length <= maxLength) return true;

    return false;
}