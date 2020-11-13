import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarteiraCorrente } from './modules/carteira_corrente/carteira_corrente.model';
import { CarteiraCorrenteModule } from './modules/carteira_corrente/carteira_corrente.module';
import { CredencialCei } from './modules/credencial_cei/credencialCei.model';
import { CredencialCeiModule } from './modules/credencial_cei/credencialCei.module';
import { InstituicaoFinanceira } from './modules/instituicao_financeira/instituicao_financeira.model';
import { InstituicaoFinanceiraModule } from './modules/instituicao_financeira/instituicao_financeira.module';
import { MovimentacaoCarteiraCorrente } from './modules/movimentacao_carteira_corrente/movimentacao_carteira_corrente.model';
import { MovimentacaoCarteiraCorrenteModule } from './modules/movimentacao_carteira_corrente/movimentacao_carteira_corrente.module';
import { TipoMovimentacao } from './modules/tipo_movimentacao/tipo_movimentacao.model';
import { TipoMovimentacaoModule } from './modules/tipo_movimentacao/tipo_movimentacao.module';
import { Usuario } from './modules/usuario/usuario.model';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'q1w2e3r4t5y6',
      database: 'smart_wallet',
      models: [Usuario, CredencialCei, CarteiraCorrente, MovimentacaoCarteiraCorrente, TipoMovimentacao, InstituicaoFinanceira],
      autoLoadModels: false,
      synchronize: true,
    }),
    UsuarioModule,
    CredencialCeiModule,
    CarteiraCorrenteModule,
    MovimentacaoCarteiraCorrenteModule,
    TipoMovimentacaoModule,
    InstituicaoFinanceiraModule
  ],
})
export class AppModule {}
