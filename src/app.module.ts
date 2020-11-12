import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CredencialCei } from './modules/credencial_cei/credencialCei.model';
import { CredencialCeiModule } from './modules/credencial_cei/credencialCei.module';
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
      models: [Usuario, CredencialCei],
      autoLoadModels: false,
      synchronize: true,
    }),
    UsuarioModule,
    CredencialCeiModule
  ],
})
export class AppModule {}
