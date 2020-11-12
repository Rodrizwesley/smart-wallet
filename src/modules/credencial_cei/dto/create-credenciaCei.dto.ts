import { Usuario } from "src/modules/usuario/usuario.model";

export class CreateCredenciaCeiDto {
    idCredenciaCei: number;
    idUsuario: number;
    cpfCei: string;
    senhaCei: string;
}