import { DataTypes } from 'sequelize';
import {
  Column,
  CreatedAt,
  Default,
  DeletedAt,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { v4 } from 'uuid';

@Table({
  tableName: 'accounts',
  underscored: true,
  createdAt: true,
  updatedAt: true,
  paranoid: true,
})
export class Account extends Model<Account> {
  @PrimaryKey
  @IsUUID(4)
  @Default(v4)
  @Column({ type: DataTypes.UUID })
  id!: string;

  @Unique(true)
  @IsEmail
  @Column({
    type: DataTypes.STRING(255),
  })
  email!: string;

  @Column({
    type: DataTypes.STRING(255),
  })
  password!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt?: Date;

  /** Associations */
}
