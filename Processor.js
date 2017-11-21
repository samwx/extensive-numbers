const units = {
    0: 'zero',
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
};

const decimals = {
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'quatorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove',
    20: 'vinte',
    30: 'trinta',
    40: 'quarenta',
    50: 'cinquenta',
    60: 'sessenta',
    70: 'setenta',
    80: 'oitenta',
    90: 'noventa'
};

const hundreds = {
    '_100': 'cem',
    100: 'cento',
    200: 'duzentos',
    300: 'trezentos',
    400: 'quatrocentos',
    500: 'quinhentos',
    600: 'seiscentos',
    700: 'setecentos',
    800: 'oitocentos',
    900: 'novecentos'
};

class Processor {
    translate(number) {
        if (number > 999 || number < 0 || !Number.isInteger(Number(number))) {
            return 'Número inválido';
        }
        else {
            if (number < 10) {
                return this.getUnits(number);
            }
            if (number > 9 && number <=20) {
                return decimals[number];
            }
            if (number > 20 && number < 100) {
                return this.getDecimal(number);
            }
            if (number == 100) {
                return hundreds['_100'];
            }
            if (number > 100 && number <= 999) {
                return this.getHundreds(number);
            }
        }
    }

    getUnits(number) {
        return units[number];
    }

    getDecimal(number) {
        const keys = Object.keys(decimals);

        if (keys.includes(number.toString())) {
            return decimals[number];
        }

        let splittedNumber = number.toString().split('');
        let match = keys.find(n => n.toString().startsWith(splittedNumber[0]));
        
        return `${decimals[match]} e ${units[splittedNumber[1]]}`;
    }

    getHundreds(number) {
        const keys = Object.keys(hundreds);

        if (keys.includes(number)) {
            return hundreds[number];
        }

        let splittedNumber = number.toString().split('');
        let decimal = splittedNumber[1] + splittedNumber[2];
        let match = keys.find(n => n.toString().startsWith(splittedNumber[0]));

        return splittedNumber[1] != 0 
            ? `${hundreds[match]} e ${this.getDecimal(parseInt(decimal))}`
            : `${hundreds[match]} e ${this.getUnits(parseInt(decimal))}`;
    }
}

module.exports = Processor;