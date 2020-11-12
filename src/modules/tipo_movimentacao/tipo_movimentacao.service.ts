import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize/types";
import { TipoMovimentacao } from "./tipo_movimentacao.model";

@Injectable()
export class TipoMovimentacaoService {

    constructor(
        @InjectModel(TipoMovimentacao)
        private readonly tipoMovimentacaoModel: typeof TipoMovimentacao,
        private readonly sequelize: Sequelize
    ) { }

    async findOne(idTipoMovimentcao: number): Promise<TipoMovimentacao> {
        return this.tipoMovimentacaoModel.findOne({where: {idTipoMovimentcao}});
    }

    async findAll(): Promise<TipoMovimentacao[]> {
        return this.tipoMovimentacaoModel.findAll();
    }
}