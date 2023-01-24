import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class DataRecord {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    item: string

    @Column()
    amount: number

    @Column()
    purchase_price: number

    @Column({})
    approved_by_purchasing_department: number
    
    @Column()
    approved_by_director: number
}