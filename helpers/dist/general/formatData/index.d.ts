export declare const formatData: {
    formatTelephone: (telephone: string) => string;
    formatcellPhone: (cellPhone: string) => string;
    formatCpf: (cpf: string) => string;
    formatFullAddress: (street: string, number: string, complement: string, neighborhood: string, city: string, state: string, zip: string) => string;
    formatZipCode: (zipCode: string) => string;
    capitalize: (value: string) => string;
    unformatString: (data: string) => string;
    formatBRDateToUSDate: (date: string) => string;
};
