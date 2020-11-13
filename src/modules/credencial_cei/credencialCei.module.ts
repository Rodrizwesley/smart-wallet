import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { CredencialCei } from "./credencialCei.model";
import { CredencialCeiService } from "./credencialCei.service";
import { CredencialCeiController } from "./credencialCei.controller";
import CeiCrawler from 'cei-crawler';

@Module({
    imports: [SequelizeModule.forFeature([CredencialCei])],
    providers: [CredencialCeiService],
    controllers: [CredencialCeiController]  
})
export class CredencialCeiModule {}