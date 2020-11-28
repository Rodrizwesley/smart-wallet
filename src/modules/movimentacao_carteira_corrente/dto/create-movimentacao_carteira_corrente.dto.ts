export class CreateMovimentacaoCarteiraCorrenteDto {
    idMovimentacaoCarteiraCorrente: number;
    idTipoMovimentacao: number;
    idCarteiraCorrente: number;
    dataMovimentacao: string;
    valor: number;
    descricaoMovimentacao: string;
    idUsuario: number;
}