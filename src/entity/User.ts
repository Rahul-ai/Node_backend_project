import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { BaseClass } from "./BaseEntity"

@Entity()
export class User extends BaseClass {

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
