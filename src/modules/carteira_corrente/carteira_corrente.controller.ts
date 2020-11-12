import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CarteiraCorrenteService } from "./carteira_corrente.service";
import { CreateCarteiraCorrenteDto } from "./dto/create-carteira_corrente.dto";
import { CarteiraCorrente } from "./carteira_corrente.model";

@Controller('carteiraCorrente')
export class CarteiraCorrenteController {

    constructor (private readonly carteiraCorrenteService: CarteiraCorrenteService) {   }

    @Post('create')
    create(@Body() createCarteiraCorrenteDto: CreateCarteiraCorrenteDto):  Promise<CarteiraCorrente>  {
        return this.carteiraCorrenteService.create(createCarteiraCorrenteDto);
    }

    @Get('find/:idUsuario')
    findByIdUsuario(@Param('idUsuario') idUsuario: number): Promise<CarteiraCorrente[]> {
        return this.carteiraCorrenteService.findByIdUsuario(idUsuario);
    }

    @Put('update')
    update(@Body() createCarteiraCorrenteDto: CreateCarteiraCorrenteDto): Promise<CarteiraCorrente> {
        return this.carteiraCorrenteService.update(createCarteiraCorrenteDto);
    }

    @Delete('delete/:idCarteiraCorrente')
    delete(@Param('idCarteiraCorrente') idCarteiraCorrente: number): Promise<void> {
        return this.carteiraCorrenteService.delete(idCarteiraCorrente);
    }
}