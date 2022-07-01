import { formatData } from './index'

describe('helpers/formatData:', () => {
    const {
        formatTelephone,
        formatcellPhone,
        formatCpf,
        formatFullAddress,
        formatZipCode,
        capitalize,
        unformatString
    } = formatData

    it('formatTelephone', () => {
        const tel = formatTelephone('1900001111')
        expect(tel).toEqual('(19) 0000-1111')
    })

    it('formatCelphone', () => {
        const cel = formatcellPhone('19900001111')
        expect(cel).toEqual('(19) 90000-1111')
    })

    it('formatCpf', () => {
        const cpf = formatCpf('00011122233')
        expect(cpf).toEqual('000.111.222-33')
    })

    it('formatFullAddress', () => {
        const fullAddress = formatFullAddress(
            'rua',
            'numero',
            'complemento',
            'bairro',
            'cidade',
            'estado',
            'cep'
        )
        expect(fullAddress).toEqual(
            'rua, numero (complemento) - bairro, cidade - estado / cep'
        )
    })

    it('formatZipCode', () => {
        const zip = formatZipCode('00111222')
        expect(zip).toEqual('00111-222')
    })

    it('capitalize', () => {
        const capt = capitalize('teste')
        expect(capt).toEqual('Teste')
    })

    it('unformatString', () => {
        const random = unformatString('aáe èiî $ oõ #uú')
        expect(random).toBe('aeiou')
    })
})
