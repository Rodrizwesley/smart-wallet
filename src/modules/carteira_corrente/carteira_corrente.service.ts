import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CarteiraCorrente } from "./carteira_corrente.model";
import { CreateCarteiraCorrenteDto } from "./dto/create-carteira_corrente.dto";

@Injectable()
export class CarteiraCorrenteService {

    constructor(
        @InjectModel(CarteiraCorrente)
        private readonly carteiraCorrenteModel: typeof CarteiraCorrente,
        private readonly sequelize: Sequelize
    ) { }

    async create(createCarteiraCorrente: CreateCarteiraCorrenteDto): Promise<CarteiraCorrente> {
        const carteiraCorrente = new CarteiraCorrente();

        carteiraCorrente.idInstituicaoFinanceira = createCarteiraCorrente.idInstituicaoFinanceira;
        carteiraCorrente.idUsuario = createCarteiraCorrente.idUsuario;
        carteiraCorrente.saldo = 0.00;
        carteiraCorrente.agencia = createCarteiraCorrente.agencia;
        carteiraCorrente.conta = createCarteiraCorrente.conta;

        return await carteiraCorrente.save();
    }

    async findOne(idCarteiraCorrente: number): Promise<CarteiraCorrente> {
        return this.carteiraCorrenteModel.findOne({where: {idCarteiraCorrente}});
    }

    async findByIdUsuario(idUsuario: number): Promise<CarteiraCorrente[]> {
        return this.carteiraCorrenteModel.findAll({where: {idUsuario}});
    }

    async update(createCarteiraCorrenteDto: CreateCarteiraCorrenteDto): Promise<CarteiraCorrente> {
        const carteiraCorrente = await this.findOne(createCarteiraCorrenteDto.idCarteiraCorrente);

        carteiraCorrente.saldo = createCarteiraCorrenteDto.saldo;

        await carteiraCorrente.save();

        return await this.findOne(createCarteiraCorrenteDto.idCarteiraCorrente);

    }

    async delete(idCarteiraCorrente: number): Promise<void> {
        const carteiraCorrente = await this.findOne(idCarteiraCorrente);
        carteiraCorrente.destroy();
    }


}