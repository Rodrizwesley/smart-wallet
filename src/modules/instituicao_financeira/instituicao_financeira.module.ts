import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { InstituicaoFinanceiraController } from "./instituicao_financeira.controller";
import { InstituicaoFinanceira } from "./instituicao_financeira.model";
import { InstituicaoFinanceiraService } from "./instituicao_financeira.service";

@Module({
    imports: [SequelizeModule.forFeature([InstituicaoFinanceira])],
    providers: [InstituicaoFinanceiraService],
    controllers: [InstituicaoFinanceiraController]
})
export class InstituicaoFinanceiraModule {  }