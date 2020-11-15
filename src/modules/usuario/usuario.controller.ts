import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { Usuario } from "./usuario.model";
import { UsuarioService } from "./usuario.service";

@Controller('usuario')
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return this.usuarioService.create(createUsuarioDto);
    }

    @Get('find/:idUsuario')
    findOne(@Param('idUsuario') idUsuario: number): Promise<Usuario> {
        return this.usuarioService.findOne(idUsuario);
    }

    @Put('update')
    update(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return this.usuarioService.update(createUsuarioDto);
    }

    @Delete('delete/:idUsuario')
    delete(@Param('idUsuario') idUsuario: number): Promise<void> {
        return this.usuarioService.delete(idUsuario);
    }

    @Post('login')
    login(@Body() credentidals: any): Promise<Object> {
        return this.usuarioService.login(credentidals.email, credentidals.senha);
    }

    @Post('findCpfEmail')
    findByCPFAndEmail(@Body() obj: any): Promise<Object> {
        return this.usuarioService.findByCPFAndEmail(obj.cpf, obj.email);
    }

    @Put('trocarSenha')
    trocarSenha(@Body() obj: any): Promise<Usuario> {
        return this.usuarioService.trocarSenha(obj.idUsuario, obj.novaSenha);
    }
    
}
