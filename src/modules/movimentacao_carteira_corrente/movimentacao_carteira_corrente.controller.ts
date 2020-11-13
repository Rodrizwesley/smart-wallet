import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateMovimentacaoCarteiraCorrenteDto } from "./dto/create-movimentacao_carteira_corrente.dto";
import { MovimentacaoCarteiraCorrente } from "./movimentacao_carteira_corrente.model";
import { MovimentacaoCarteiraCorrenteService } from "./movimentacao_carteira_corrente.service";

@Controller('movimentacaoCorrente')
export class MovimentacaoCarteiraCorrenteController {

    constructor(private readonly movimentacaoCarteiraCorrente: MovimentacaoCarteiraCorrenteService) {   }

    @Post('create')
    create(@Body() createMovimentacaoCarteiraCorrenteDto: CreateMovimentacaoCarteiraCorrenteDto): Promise<MovimentacaoCarteiraCorrente> {
        return this.movimentacaoCarteiraCorrente.create(createMovimentacaoCarteiraCorrenteDto);
    }

    @Get('findIdCarteira/:idCarteira')
    findByIdCarteira(@Param('idCarteira') idCarteira: number): Promise<MovimentacaoCarteiraCorrente[]> {
        return this.movimentacaoCarteiraCorrente.findAllByIdCarteiraCorrente(idCarteira);
    }

    @Get('findIdMovimentacao/:idMovimetacao')
    findByIdMovimentacao(@Param('idMovimetacao') idMovimentacao: number): Promise<MovimentacaoCarteiraCorrente> {
        return this.movimentacaoCarteiraCorrente.findOne(idMovimentacao);
    }

    @Put('update')
    update(@Body() createMovimentacaoCarteiraCorrenteDto: CreateMovimentacaoCarteiraCorrenteDto): Promise<MovimentacaoCarteiraCorrente> {
        return this.movimentacaoCarteiraCorrente.update(createMovimentacaoCarteiraCorrenteDto);
    }

    @Delete('delete/:idMovimentacao')
    delete(@Param('idMovimentacao') idMovimentacao: number): Promise<void> {
        return this.movimentacaoCarteiraCorrente.delete(idMovimentacao);
    }

}