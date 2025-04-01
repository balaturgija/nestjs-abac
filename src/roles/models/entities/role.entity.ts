import { DataTypes } from 'sequelize';
import {
  Column,
  CreatedAt,
  Default,
  DeletedAt,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { AccountRole } from 'src/accounts/models/entities/account-role.entity';
import { RoleName } from 'src/roles/types/role-name.type';
import { v4 } from 'uuid';

@Table({
  tableName: 'roles',
  underscored: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  paranoid: true,
  timestamps: true,
})
export class Role extends Model<Role> {
  @PrimaryKey
  @IsUUID(4)
  @Default(v4)
  @Column({ type: DataTypes.UUID })
  id!: string;

  @Column({ type: DataTypes.STRING(255) })
  name!: RoleName;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt?: Date;

  /** Assotiations */
  @HasMany(() => AccountRole)
  accountRoles?: AccountRole[];
}
