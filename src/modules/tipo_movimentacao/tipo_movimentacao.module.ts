import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TipoMovimentacaoController } from "./tipo_movimentacao.controller";
import { TipoMovimentacao } from "./tipo_movimentacao.model";
import { TipoMovimentacaoService } from "./tipo_movimentacao.service";

@Module({
    imports: [SequelizeModule.forFeature([TipoMovimentacao])],
    providers: [TipoMovimentacaoService],
    controllers: [TipoMovimentacaoController]
})
export class TipoMovimentacaoModule {  }