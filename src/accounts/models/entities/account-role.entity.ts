import { DataTypes } from 'sequelize';
import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  DeletedAt,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Account } from 'src/accounts/models/entities/account.entity';
import { Role } from 'src/roles/models/entities/role.entity';
import { v4 } from 'uuid';

@Table({
  tableName: 'account_roles',
  underscored: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  paranoid: true,
  timestamps: true,
})
export class AccountRole extends Model<AccountRole> {
  @PrimaryKey
  @IsUUID(4)
  @AllowNull(false)
  @Default(v4)
  @Column({ type: DataTypes.UUID })
  id!: string;

  @ForeignKey(() => Account)
  @AllowNull(false)
  @IsUUID(4)
  @Column({ type: DataTypes.UUID })
  accountId!: string;

  @ForeignKey(() => Role)
  @AllowNull(false)
  @IsUUID(4)
  @Column({ type: DataTypes.UUID })
  roleId!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt?: Date;

  /** Assotiations */
  @BelongsTo(() => Role)
  role!: Role;

  @BelongsTo(() => Account)
  account!: Account;
}
