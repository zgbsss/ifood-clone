import numeral from "numeral";

export const formatNumber = (Number) => numeral(Number).format('$,0.00');