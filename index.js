import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const api = new Freecurrencyapi('fca_live_WHehF5eZ1nta8ib46YxSMlF31j9d2BXV2l7ifmZr');

convertCurrency("INR","USD",3)
export async function convertCurrency(fromCurrency, toCurrency,units){
const res  = await api.latest({
    base_currency:fromCurrency,
    currencies:toCurrency,
});
const multiplier = res.data[toCurrency];
return multiplier*units
}