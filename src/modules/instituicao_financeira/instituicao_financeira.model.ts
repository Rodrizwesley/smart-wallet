import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: 'instituicao_financeira', createdAt: false, updatedAt: false})
export class InstituicaoFinanceira extends Model<InstituicaoFinanceira> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_instituicao_financeira'})
    idInstituicaoFinanceira: number;

    @Column({field: 'nome_reduzido', type: 'varchar'})
    nomeReduzido: string;

    @Column({field: 'nome_extenso', type: 'varchar'})
    nomeExtenso: string;

    @Column({field: 'codigo', type: 'varchar'})
    codigo: string;

    @Column({field: 'ISPB', type: 'varchar'})
    ispb: string;
}