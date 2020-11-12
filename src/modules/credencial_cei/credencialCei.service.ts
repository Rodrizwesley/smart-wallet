import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CredencialCei } from './credencialCei.model';
import { CreateCredenciaCeiDto } from './dto/create-credenciaCei.dto';

import CeiCrawler from 'cei-crawler';

@Injectable()
export class CredencialCeiService {
    constructor(
        @InjectModel(CredencialCei)
        private readonly credencialModel: typeof CredencialCei,
        private readonly sequelize: Sequelize
        
    ) { }

    async create(credencialCeiDto: CreateCredenciaCeiDto): Promise<CredencialCei> {
        const credenciaCei = new CredencialCei();

        credenciaCei.idUsuario = credencialCeiDto.idUsuario;
        credenciaCei.cpfCei = credencialCeiDto.cpfCei;
        credenciaCei.senhaCei = credencialCeiDto.senhaCei;

        return await credenciaCei.save();
    }

    async findOne(idUsuario: number): Promise<CredencialCei> {
        return this.credencialModel.findOne({ where: { idUsuario } });
    }

    async delete(idUsuario: number): Promise<void> {
        const credenciaCei = await this.findOne(idUsuario);
        credenciaCei.destroy();
    }

    async getWallet(): Promise<any> {
        const cei = new CeiCrawler('47845745812', 'D86884697Bf3@1');
        let wallets = await cei.getWallet();
        return wallets
    }
}