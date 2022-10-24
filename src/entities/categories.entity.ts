import { Entity, Column,  PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer"
import { v4 as uuid} from "uuid";
import { Properties } from "./properties.entity";

@Entity("categories")
export class Categories{
@PrimaryGeneratedColumn("uuid")
readonly id: string

@Column({length: 69, unique: true})
name: string

@OneToMany(()=> Properties, properties=> properties.category )
properties: Properties[]

}