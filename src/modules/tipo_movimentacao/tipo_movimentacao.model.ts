import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: 'tipo_movimentacao', createdAt: false, updatedAt: false})
export class TipoMovimentacao extends Model<TipoMovimentacao>{

    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id_tipo_movimentacao'})
    idTipoMovimentacao: number;

    @Column({field: 'nome_movimentacao', type: 'varchar'})
    nomeMovimentacao: string;
}