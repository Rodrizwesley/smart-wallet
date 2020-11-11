import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({tableName: 'usuario', createdAt: false, updatedAt: false})
export class Usuario extends Model<Usuario> {    

    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id_usuario'})
    idUsuario: number;

    @Column({field: 'cpf_usuario', type: 'varchar'})
    cpfUsuario: string;

    @Column({field: 'nome_usuario', type: 'varchar'})
    nomeUsuario: string;

    @Column({field: 'telefone_usuario', type: 'varchar'})
    telefoneUsuario: string;
    
    @Column({field: 'email_usuario', type: 'varchar'})
    emailUsuario: string;

    @Column({field: 'senha_usuario', type: 'varchar'})
    senhaUsuario: string;

}

