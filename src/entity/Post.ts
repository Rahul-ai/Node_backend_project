import { Entity, Column } from "typeorm"
import { BaseClass } from "./BaseEntity"

@Entity()
export class Post extends BaseClass {

    @Column()
    post: string

}