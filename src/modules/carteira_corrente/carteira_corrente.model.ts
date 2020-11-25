import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey } from "sequelize-typescript";
import { InstituicaoFinanceira } from "../instituicao_financeira/instituicao_financeira.model";
import { Usuario } from "../usuario/usuario.model";

@Table({tableName: 'carteira_corrente', createdAt: false, updatedAt: false})
export class CarteiraCorrente extends Model<CarteiraCorrente>{

    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id_carteira_corrente'})
    idCarteiraCorrente: number;

    @ForeignKey(() => InstituicaoFinanceira)
    @Column({field: 'id_instituicao_financeira'})
    idInstituicaoFinanceira: number;

    @ForeignKey(() => Usuario)
    @Column({field: 'id_usuario'})
    idUsuario: number;

    @Column({field: 'nm_carteira_corrente'})
    nmCarteiraCorrente: string;

    @Column({field: 'saldo'})
    saldo: number;

    @Column({field: 'agencia'})
    agencia: string;

    @Column({field: 'conta'})
    conta: string;

    @Column({field: 'final_cartao'})
    finalCartao: string;

    @Column({field: 'cartao', type: 'tinyint'})
    cartao: number;
}