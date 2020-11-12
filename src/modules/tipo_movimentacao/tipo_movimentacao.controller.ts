import { Controller, Get, Param } from "@nestjs/common";
import { TipoMovimentacao } from "./tipo_movimentacao.model";
import { TipoMovimentacaoService } from "./tipo_movimentacao.service";

@Controller('tipoMovimentacao')
export class TipoMovimentacaoController {
    constructor(private readonly tipoMovimentacaoService: TipoMovimentacaoService) {  }

    @Get('findById/:idIF')
    findeOne(@Param('idIF') idTipoMovimentacao: number ): Promise<TipoMovimentacao> {
        return this.tipoMovimentacaoService.findOne(idTipoMovimentacao);
    }

    @Get('findAll')
    findAll(): Promise<TipoMovimentacao[]> {
        return this.tipoMovimentacaoService.findAll();
    }
}