import { DataTypes } from 'sequelize';
import {
  Column,
  CreatedAt,
  Default,
  DeletedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { v4 } from 'uuid';

@Table({
  tableName: 'organization_resources',
  underscored: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  paranoid: true,
  timestamps: true,
})
export class OrganizationResource extends Model<OrganizationResource> {
  @PrimaryKey
  @IsUUID(4)
  @Default(v4)
  @Column({ type: DataTypes.UUID })
  id!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt?: Date;

  /** Assotiations */
}
