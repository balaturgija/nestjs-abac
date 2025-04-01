import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountsModule } from './accounts/accounts.module';
import { DatabaseModule } from './database/database.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.local`],
      isGlobal: true,
      cache: true,
    }),
    DatabaseModule,
    AccountsModule,
    RolesModule,
    OrganizationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
