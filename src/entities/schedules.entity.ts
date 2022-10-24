import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from "typeorm";
import { Exclude } from "class-transformer"
import { v4 as uuid} from "uuid";
import { User } from "./user.entity";
import { Properties } from "./properties.entity";

@Entity("schedules")
export class Schedules{
@PrimaryGeneratedColumn("uuid")
readonly id: string

@Column({type:"date"})
date: Date

@Column({type:"time"})
hour: string

@ManyToOne(()=> User,{eager:true})
user: User

@ManyToOne(()=> Properties)
properties: Properties


}