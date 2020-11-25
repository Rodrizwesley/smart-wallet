export class CreateMovimentacaoCarteiraCorrenteDto {
    idMovimentacaoCarteiraCorrente: number;
    idTipoMovimentacao: number;
    idCarteiraCorrente: number;
    dataMovimentacao: Date;
    valor: number;
    descricaoMovimentacao: string;
    idUsuario: number;
}