import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity"

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2})
    preco: number

    @IsNotEmpty()
    @Column()
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
    
}