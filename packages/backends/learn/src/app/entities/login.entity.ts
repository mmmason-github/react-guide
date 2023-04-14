/* eslint-disable new-cap */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({})
export class LoginEntity {
  @PrimaryGeneratedColumn("uuid")
  public readonly id!: number;

  @Column({ unique: true })
  public readonly email!: string;

  @Column()
  public readonly password!: string;
}
