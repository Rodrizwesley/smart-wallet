export class CreateCarteiraCorrenteDto {
    idCarteiraCorrente: number;
    idInstituicaoFinanceira: number;
    idUsuario: number;
    nmCarteiraCorrente: string;
    saldo: number;
    agencia: string;
    conta: string;
    finalCartao: string;
    cartao: number;
}