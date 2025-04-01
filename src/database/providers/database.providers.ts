import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { AccountRole } from 'src/accounts/models/entities/account-role.entity';
import { Account } from 'src/accounts/models/entities/account.entity';
import { OrganizationResource } from 'src/organizations/models/entities/organization-resource.entity';
import { Organization } from 'src/organizations/models/entities/organization.entity';
import { Role } from 'src/roles/models/entities/role.entity';

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
        models: [Account, AccountRole, Role, Organization, OrganizationResource],
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
