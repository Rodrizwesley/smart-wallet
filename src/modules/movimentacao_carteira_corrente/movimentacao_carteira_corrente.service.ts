import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CarteiraCorrenteService } from "../carteira_corrente/carteira_corrente.service";
import { CreateMovimentacaoCarteiraCorrenteDto } from "./dto/create-movimentacao_carteira_corrente.dto";
import { MovimentacaoCarteiraCorrente } from "./movimentacao_carteira_corrente.model";

@Injectable()
export class MovimentacaoCarteiraCorrenteService {

    constructor(
        @InjectModel(MovimentacaoCarteiraCorrente)
        private readonly movimentacaoCarteiraCorrente: typeof MovimentacaoCarteiraCorrente,
        private readonly carteiraCorrenteService: CarteiraCorrenteService,
        private readonly sequelize: Sequelize
    ) { }

    async create(createMovimentacaoCarteiraDto: CreateMovimentacaoCarteiraCorrenteDto): Promise<MovimentacaoCarteiraCorrente> {
        const movimentacaoCarteiraCorrente = new MovimentacaoCarteiraCorrente();

        movimentacaoCarteiraCorrente.idCarteiraCorrente = createMovimentacaoCarteiraDto.idCarteiraCorrente;
        movimentacaoCarteiraCorrente.idTipoMovimentacao = createMovimentacaoCarteiraDto.idTipoMovimentacao;
        movimentacaoCarteiraCorrente.valor = createMovimentacaoCarteiraDto.valor;
        movimentacaoCarteiraCorrente.dataMovimentacao = createMovimentacaoCarteiraDto.dataMovimentacao;
        movimentacaoCarteiraCorrente.descricaoMovimentacao = createMovimentacaoCarteiraDto.descricaoMovimentacao;
        movimentacaoCarteiraCorrente.idUsuario = createMovimentacaoCarteiraDto.idUsuario;

        const carteiraCorrente = await this.carteiraCorrenteService.findOne(createMovimentacaoCarteiraDto.idCarteiraCorrente);
        carteiraCorrente.saldo += movimentacaoCarteiraCorrente.valor;

        await this.carteiraCorrenteService.update(carteiraCorrente);

        return await movimentacaoCarteiraCorrente.save();
    }

    async findOne(idMovimentacaoCarteiraCorrente: number): Promise<MovimentacaoCarteiraCorrente> {
        return this.movimentacaoCarteiraCorrente.findOne({where: {idMovimentacaoCarteiraCorrente}});
    }

    async findAllByIdUsuario(idUsuario: number): Promise<MovimentacaoCarteiraCorrente[]> {
        return this.movimentacaoCarteiraCorrente.findAll({where: {idUsuario}});
    }

    async update(createMovimentacaoCarteiraDto: CreateMovimentacaoCarteiraCorrenteDto): Promise<MovimentacaoCarteiraCorrente> {
        const movimentacaoCarteiraCorrente = await this.findOne(createMovimentacaoCarteiraDto.idMovimentacaoCarteiraCorrente);
        
        movimentacaoCarteiraCorrente.idCarteiraCorrente = createMovimentacaoCarteiraDto.idCarteiraCorrente;
        movimentacaoCarteiraCorrente.idTipoMovimentacao = createMovimentacaoCarteiraDto.idTipoMovimentacao;
        movimentacaoCarteiraCorrente.valor = createMovimentacaoCarteiraDto.valor;
        movimentacaoCarteiraCorrente.dataMovimentacao = createMovimentacaoCarteiraDto.dataMovimentacao;
        movimentacaoCarteiraCorrente.descricaoMovimentacao = createMovimentacaoCarteiraDto.descricaoMovimentacao;

        await movimentacaoCarteiraCorrente.save();

        const carteiraCorrente = await this.carteiraCorrenteService.findOne(createMovimentacaoCarteiraDto.idCarteiraCorrente);
        carteiraCorrente.saldo += movimentacaoCarteiraCorrente.valor;

        await this.carteiraCorrenteService.update(carteiraCorrente);

        return await this.findOne(createMovimentacaoCarteiraDto.idMovimentacaoCarteiraCorrente);
    }

    async delete(idMovimentacaoCarteiraCorrente: number): Promise<void>{
        const movimentacaoCarteiraCorrente = await this.findOne(idMovimentacaoCarteiraCorrente);

        const carteiraCorrente = await this.carteiraCorrenteService.findOne(movimentacaoCarteiraCorrente.idCarteiraCorrente);
        carteiraCorrente.saldo += movimentacaoCarteiraCorrente.valor;

        await this.carteiraCorrenteService.update(carteiraCorrente);
        movimentacaoCarteiraCorrente.destroy();
    }

}