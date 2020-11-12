import { AutoIncrement, Column, Model, PrimaryKey, Table, ForeignKey } from 'sequelize-typescript';
import { Usuario } from '../usuario/usuario.model';

@Table({tableName: 'credencial_cei', createdAt: false, updatedAt: false})
export class CredencialCei extends Model<CredencialCei> {

    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id_credencial_cei'})
    idCrendecialCei: number;

    @ForeignKey(() => Usuario)
    @Column({field: 'id_usuario'})
    idUsuario: number;

    @Column({field: 'cpf_cei', type: 'varchar'})
    cpfCei: string;

    @Column({field: 'senha_cei', type: 'varchar'})
    senhaCei: string;

}