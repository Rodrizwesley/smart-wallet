import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CarteiraCorrenteController } from "./carteira_corrente.controller";
import { CarteiraCorrente } from "./carteira_corrente.model";
import { CarteiraCorrenteService } from "./carteira_corrente.service";

@Module({
    imports: [SequelizeModule.forFeature([CarteiraCorrente])],
    providers: [CarteiraCorrenteService],
    controllers: [CarteiraCorrenteController], 
    exports: [CarteiraCorrenteService]
})
export class CarteiraCorrenteModule {   }