import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseClass  {
   @PrimaryGeneratedColumn()
   id: number

   @CreateDateColumn()
   created!: Date;

   @UpdateDateColumn()
   updated!: Date;

   @DeleteDateColumn()
   deletedAt?: Date;
}