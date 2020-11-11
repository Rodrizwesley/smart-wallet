import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './usuario.model';
import { sha256 } from 'js-sha256';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectModel(Usuario)
        private readonly usuarioModel: typeof Usuario,
        private readonly sequelize: Sequelize,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const usuario = new Usuario();

        usuario.cpfUsuario = createUsuarioDto.cpfUsuario;
        usuario.emailUsuario = createUsuarioDto.emailUsuario;
        usuario.nomeUsuario = createUsuarioDto.nomeUsuario;
        usuario.senhaUsuario = sha256(createUsuarioDto.senhaUsuario);
        usuario.telefoneUsuario = createUsuarioDto.telefoneUsuario;

        return await usuario.save();
    }

    async findOne(idUsuario: number): Promise<Usuario> {
        return this.usuarioModel.findOne({where:{idUsuario}});
    }

    async update(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        let usuario = await this.findOne(createUsuarioDto.idUsuario);

        usuario.nomeUsuario = createUsuarioDto.nomeUsuario;
        usuario.telefoneUsuario = createUsuarioDto.telefoneUsuario;
        usuario.emailUsuario = createUsuarioDto.emailUsuario;

        await usuario.save();

        return await this.findOne(createUsuarioDto.idUsuario);
    }

    async delete(idUsuario: number): Promise<void> {
        const user = await this.findOne(idUsuario);
        user.destroy();
    }

    async login(emailUsuario: string, senhaUsuario: string): Promise<Object> {
        let retorno = {
            isAuthenticate: false,
            Usuario: null
        };

        let usuario;

        await this.sequelize.query('SELECT * FROM usuario WHERE email_usuario = :email', {
            replacements: {email: emailUsuario}
        }).then(res => {
            let _res = JSON.stringify(res[0], null, 2)

            usuario = JSON.parse(_res)[0]
        })

        senhaUsuario = sha256(senhaUsuario);

        if(senhaUsuario == usuario.senha_usuario){
            retorno.isAuthenticate = true;
            retorno.Usuario = usuario;
        }

        return retorno
    }


}