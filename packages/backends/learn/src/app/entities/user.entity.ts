/* eslint-disable new-cap */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({})
export class UserEntity {
  @PrimaryGeneratedColumn("uuid") id!: number;

  @Column({ unique: true }) email!: string;

  @Column() password!: string;
}
