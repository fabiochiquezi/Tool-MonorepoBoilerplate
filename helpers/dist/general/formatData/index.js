"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = void 0;
const formatTelephone = (telephone) => {
    let formatTelephone = '';
    if (telephone) {
        formatTelephone = `(${telephone.substring(0, 2)}) `;
        formatTelephone = `${formatTelephone}${telephone.substring(2, 6)}-`;
        formatTelephone = `${formatTelephone}${telephone.substring(6, 10)}`;
    }
    return formatTelephone;
};
const formatcellPhone = (cellPhone) => {
    let formatCellPhone = '';
    if (cellPhone) {
        formatCellPhone = `(${cellPhone.substring(0, 2)}) `;
        formatCellPhone = `${formatCellPhone}${cellPhone.substring(2, 7)}-`;
        formatCellPhone = `${formatCellPhone}${cellPhone.substring(7, 12)}`;
    }
    return formatCellPhone;
};
const formatCpf = (cpf) => {
    let formatCpf = '';
    if (cpf) {
        formatCpf = `${cpf.substring(0, 3)}.`;
        formatCpf = `${formatCpf}${cpf.substring(3, 6)}.`;
        formatCpf = `${formatCpf}${cpf.substring(6, 9)}-`;
        formatCpf = `${formatCpf}${cpf.substring(9, 12)}`;
    }
    return formatCpf;
};
const formatFullAddress = (street, number, complement, neighborhood, city, state, zip) => {
    let formatFullAddress = '';
    formatFullAddress = `${street}, ${number}${complement ? ` (${complement})` : ''} - ${neighborhood}, ${city} - ${state} / ${zip}`;
    return formatFullAddress;
};
const formatZipCode = (zipCode) => {
    let formatZipCode = '';
    if (zipCode) {
        formatZipCode = `${zipCode.substring(0, 5)}-${zipCode.substring(5, 8)}`;
    }
    return formatZipCode;
};
const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const formatBRDateToUSDate = (date) => {
    const arr = date.split('/');
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
};
const unformatString = (data) => data.replace(/[^a-zA-Z0-9]/g, '');
exports.formatData = {
    formatTelephone,
    formatcellPhone,
    formatCpf,
    formatFullAddress,
    formatZipCode,
    capitalize,
    unformatString,
    formatBRDateToUSDate
};
