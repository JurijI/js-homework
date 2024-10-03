// Завдання 1: Виведіть на екран зарплату Петі та Колі.
var obj = {'Коля': '1000', 'Вася': '500', 'Петя': '200'};
document.getElementById('salary-kolia').innerHTML = `Зарплата Коли: ${obj['Коля']}`;
document.getElementById('salary-petya').innerHTML = `Зарплата Пети: ${obj['Петя']}`;

// Завдання 2: Створіть об'єкт криптокошилок.
var cryptoWallets = {
    'Коля': {
        owner: 'Коля',
        currencies: {
            Bitcoin: {
                name: 'Bitcoin',
                logo: 'BTC',
                coins: 2,
                rate: 1000000
            },
            Ethereum: {
                name: 'Ethereum',
                logo: 'ETH',
                coins: 5,
                rate: 70000
            },
            Stellar: {
                name: 'Stellar',
                logo: 'XLM',
                coins: 1000,
                rate: 10
            }
        },
        getCurrencyInfo: function(currencyName) {
            if (this.currencies[currencyName]) {
                let currency = this.currencies[currencyName];
                let totalValue = currency.coins * currency.rate;
                return `Доброго дня, ${this.owner}! На вашому балансі (${currency.name} ${currency.logo}) залишилося ${currency.coins} монет, якщо ви сьогодні продасте їх, то отримаєте ${totalValue} грн.`;
            } else {
                return 'Валюта не знайдена в гаманці.';
            }
        }
    },
    'Петя': {
        owner: 'Петя',
        currencies: {
            Bitcoin: {
                name: 'Bitcoin',
                logo: 'BTC',
                coins: 1,
                rate: 1000000
            },
            Ethereum: {
                name: 'Ethereum',
                logo: 'ETH',
                coins: 3,
                rate: 70000
            },
            Stellar: {
                name: 'Stellar',
                logo: 'XLM',
                coins: 500,
                rate: 10
            }
        },
        getCurrencyInfo: function(currencyName) {
            if (this.currencies[currencyName]) {
                let currency = this.currencies[currencyName];
                let totalValue = currency.coins * currency.rate;
                return `Доброго дня, ${this.owner}! На вашому балансі (${currency.name} ${currency.logo}) залишилося ${currency.coins} монет, якщо ви сьогодні продасте їх, то отримаєте ${totalValue} грн.`;
            } else {
                return 'Валюта не знайдена в гаманці.';
            }
        }
    }
};

document.getElementById('wallet').innerHTML = 
    cryptoWallets['Коля'].getCurrencyInfo('Bitcoin') + '<br>' + 
    cryptoWallets['Коля'].getCurrencyInfo('Ethereum') + '<br>' + 
    cryptoWallets['Коля'].getCurrencyInfo('Stellar') + '<br>' + 
    cryptoWallets['Петя'].getCurrencyInfo('Bitcoin') + '<br>' + 
    cryptoWallets['Петя'].getCurrencyInfo('Ethereum') + '<br>' + 
    cryptoWallets['Петя'].getCurrencyInfo('Stellar');

// Завдання 3: Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.
function isEmpty(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

// Пример использования функции isEmpty
console.log(isEmpty({})); // true
console.log(isEmpty({a: 1})); // false

// Завдання 4: Виведіть на сторінку назву валюти ціну купівлі та ціну продажу.
async function fetchExchangeRates() {
    try {
        let response = await fetch('https://api.privatbank.ua/p24api/exchange_rates?json&date=01.07.2024');
        let data = await response.json();
        let exchangeRateInfo = '';

        data.exchangeRate.forEach(rate => {
            if (rate.currency && rate.purchaseRate && rate.saleRate) {
                exchangeRateInfo += `<p>${rate.currency}: Купівля - ${rate.purchaseRate}, Продаж - ${rate.saleRate}</p>`;
            }
        });

        document.getElementById('exchange-rates').innerHTML = exchangeRateInfo;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

fetchExchangeRates();
