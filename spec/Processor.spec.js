describe('Processor', () => {
    const Processor = require('../Processor.js');
    const p = new Processor();

    it('Should convert two decimal digits', () => {
        let n = p.translate('42');
        expect(n).toEqual('quarenta e dois');
    });

    it('Should convert three decimal digits', () => {
        let n = p.translate('678');
        expect(n).toEqual('seiscentos e setenta e oito');
    });

    it('Should be a integer', () => {
        let n = p.translate('13,92');
        expect(n).toEqual('Número inválido');
    });

    it('Should be a positive number', () => {
        let n = p.translate('-23');
        expect(n).toEqual('Número inválido');
    });

    it('Should be less than 1000', () => {
        let n = p.translate('1456');
        expect(n).toEqual('Número inválido');
    });
})