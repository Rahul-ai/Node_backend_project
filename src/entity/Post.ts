import { Entity, Column } from "typeorm"
import { BaseClass } from "./CommonId"

@Entity()
export class Post extends BaseClass {

    @Column()
    post: string

}