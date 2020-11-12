import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { InstituicaoFinanceira } from "./instituicao_financeira.model";

@Injectable()
export class InstituicaoFinanceiraService {
    
    constructor(
        @InjectModel(InstituicaoFinanceira)
        private readonly instituicaoFinanceiraModel: typeof InstituicaoFinanceira,
        private readonly sequelize: Sequelize
    ){  }

    async findOne(idInstituicaoFinanceira: number): Promise<InstituicaoFinanceira> {
        return this.instituicaoFinanceiraModel.findOne({where:{idInstituicaoFinanceira}});
    }

    async findAll(): Promise<InstituicaoFinanceira[]> {
        return this.instituicaoFinanceiraModel.findAll();
    }
}