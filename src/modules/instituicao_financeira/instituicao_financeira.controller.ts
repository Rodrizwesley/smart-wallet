import { Controller, Get, Param } from "@nestjs/common";
import { InstituicaoFinanceira } from "./instituicao_financeira.model";
import { InstituicaoFinanceiraService } from "./instituicao_financeira.service";

@Controller('instituicaoFinanceira')
export class InstituicaoFinanceiraController{
    constructor(private readonly instituicaoFinanceiraService: InstituicaoFinanceiraService) {  }

    @Get('findById/:idIF')
    findeOne(@Param('idIF') idInstituicaoFinanceira: number ): Promise<InstituicaoFinanceira> {
        return this.instituicaoFinanceiraService.findOne(idInstituicaoFinanceira);
    }

    @Get('findAll')
    findAll(): Promise<InstituicaoFinanceira[]> {
        return this.instituicaoFinanceiraService.findAll();
    }
}