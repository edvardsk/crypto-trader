import values from 'lodash/values';
import sortBy from 'lodash/sortBy';

export const formatCurrencies = currenciesPairs => {
  const result = {};
  const pairs = values(currenciesPairs);

  pairs.forEach(currenciesPair => {
    result[currenciesPair.base] = true;
  });

  const currencies = sortBy(Object.keys(result));

  const currencyRelations = {};

  currencies.forEach(currency => {
    currencyRelations[currency] = pairs.filter(currenciesPair => currenciesPair.base === currency);
  });

  return {
    currencies,
    currencyRelations,
  };
};
