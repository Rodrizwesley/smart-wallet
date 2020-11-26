import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CarteiraCorrenteModule } from "../carteira_corrente/carteira_corrente.module";
import { MovimentacaoCarteiraCorrenteController } from "./movimentacao_carteira_corrente.controller";
import { MovimentacaoCarteiraCorrente } from "./movimentacao_carteira_corrente.model";
import { MovimentacaoCarteiraCorrenteService } from "./movimentacao_carteira_corrente.service";

@Module({
    imports: [SequelizeModule.forFeature([MovimentacaoCarteiraCorrente]), CarteiraCorrenteModule],
    providers: [MovimentacaoCarteiraCorrenteService],
    controllers: [MovimentacaoCarteiraCorrenteController]
})
export class MovimentacaoCarteiraCorrenteModule {   }