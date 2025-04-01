import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        minifyAliases: true,
        models: [],
      });

      try {
        await sequelize.authenticate();
        return sequelize;
      } catch (error) {
        throw new Error(`Failed to connect to database: ${error}`);
      }
    },
    inject: [ConfigService],
  },
];
