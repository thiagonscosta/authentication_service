import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from 'src/app.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'micro_auth',
      username: 'postgres',
      password: 'root',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AppService],
})
export class AuthModule {}
