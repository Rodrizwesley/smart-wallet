import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CredencialCeiService } from "./credencialCei.service";

@Controller('cei')
export class CredencialCeiController {
    constructor(private readonly createCredencialCeiService: CredencialCeiService) {}

    @Get('sincronizar')
    ceiCrawler(): Promise<Object> {
        return this.createCredencialCeiService.getWallet();
    }

}