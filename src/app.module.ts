import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
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
      models: [Usuario],
      autoLoadModels: false,
      synchronize: true,
    }),
    UsuarioModule
  ],
})
export class AppModule {}
