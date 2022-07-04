const formatTelephone = (telephone: string): string => {
    let formatTelephone = ''
    if (telephone) {
        formatTelephone = `(${telephone.substring(0, 2)}) `
        formatTelephone = `${formatTelephone}${telephone.substring(2, 6)}-`
        formatTelephone = `${formatTelephone}${telephone.substring(6, 10)}`
    }
    return formatTelephone
}

const formatcellPhone = (cellPhone: string): string => {
    let formatCellPhone = ''
    if (cellPhone) {
        formatCellPhone = `(${cellPhone.substring(0, 2)}) `
        formatCellPhone = `${formatCellPhone}${cellPhone.substring(2, 7)}-`
        formatCellPhone = `${formatCellPhone}${cellPhone.substring(7, 12)}`
    }
    return formatCellPhone
}

const formatCpf = (cpf: string): string => {
    let formatCpf = ''
    if (cpf) {
        formatCpf = `${cpf.substring(0, 3)}.`
        formatCpf = `${formatCpf}${cpf.substring(3, 6)}.`
        formatCpf = `${formatCpf}${cpf.substring(6, 9)}-`
        formatCpf = `${formatCpf}${cpf.substring(9, 12)}`
    }
    return formatCpf
}

const formatFullAddress = (
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    zip: string
): string => {
    let formatFullAddress = ''

    formatFullAddress = `${street}, ${number}${
        complement ? ` (${complement})` : ''
    } - ${neighborhood}, ${city} - ${state} / ${zip}`

    return formatFullAddress
}

const formatZipCode = (zipCode: string): string => {
    let formatZipCode = ''
    if (zipCode) {
        formatZipCode = `${zipCode.substring(0, 5)}-${zipCode.substring(5, 8)}`
    }
    return formatZipCode
}

const capitalize = (value: string): string =>
    value.charAt(0).toUpperCase() + value.slice(1)

const formatBRDateToUSDate = (date: string): string => {
    const arr = date.split('/')
    return `${arr[2]}-${arr[1]}-${arr[0]}`
}

const unformatString = (data: string): string =>
    data.replace(/[^a-zA-Z0-9]/g, '')

export const formatData = {
    formatTelephone,
    formatcellPhone,
    formatCpf,
    formatFullAddress,
    formatZipCode,
    capitalize,
    unformatString,
    formatBRDateToUSDate
}
