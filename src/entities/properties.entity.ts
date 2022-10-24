import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Exclude } from "class-transformer"
import { v4 as uuid} from "uuid";
import { Schedules } from "./schedules.entity";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";


@Entity("properties")
export class Properties{
@PrimaryGeneratedColumn("uuid")
readonly id: string

@Column({default: false})
sold: boolean

@Column("decimal", { precision: 12, scale: 2 })
value: number

@Column({type: "integer"})
size: number

@CreateDateColumn()
createdAt: Date

@UpdateDateColumn()
updatedAt: Date

@OneToMany(()=> Schedules, schedules=> schedules.properties)
schedules: Schedules[]

@OneToOne(()=> Addresses,{eager:true})@JoinColumn()
address: Addresses

@ManyToOne(()=> Categories, {eager:true})
category: Categories

}