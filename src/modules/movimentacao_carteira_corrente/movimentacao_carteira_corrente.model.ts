import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { CarteiraCorrente } from "../carteira_corrente/carteira_corrente.model";
import { TipoMovimentacao } from "../tipo_movimentacao/tipo_movimentacao.model";
import { Usuario } from "../usuario/usuario.model";

@Table({tableName: 'movimentcao_carteira_corrente', createdAt: false, updatedAt: false})
export class MovimentacaoCarteiraCorrente extends Model<MovimentacaoCarteiraCorrente> {

    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id_movimentacao_carteira_corrente'})
    idMovimentacaoCarteiraCorrente: number;

    @ForeignKey(() => TipoMovimentacao)
    @Column({field: 'id_tipo_movimentacao'})
    idTipoMovimentacao: number;

    @ForeignKey(() => CarteiraCorrente)
    @Column({field: 'id_carteira_corrente'})
    idCarteiraCorrente: number;
    
    @Column({field: 'data_movimentacao', type: 'timestamp'})
    dataMovimentacao: Date;

    @Column({field: 'valor', type: 'double'})
    valor: number;

    @Column({field: 'descricao_movimentacao', type: 'varchar'})
    descricaoMovimentacao: string

    @ForeignKey(() => Usuario)
    @Column({field: 'id_usuario'})
    idUsuario: number;

}