import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer"
import { v4 as uuid} from "uuid";
import { Schedules } from "./schedules.entity";

@Entity("user")
export class User{
@PrimaryGeneratedColumn("uuid")
readonly id: string

@Column({length: 69})
name: string

@Column({length: 69, unique: true})
email: string

@Column({length: 120})
@Exclude()
password: string

@Column()
isAdm: boolean

@Column({default: true})
isActive: boolean

@CreateDateColumn()
createdAt: Date

@UpdateDateColumn()
updatedAt: Date

@OneToMany(()=>Schedules, schedules=> schedules.user)
schedule: Schedules[]


}