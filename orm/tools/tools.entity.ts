import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "tools" })
class Tools {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @Column({
        type: "boolean",
    })
    public scratch!: boolean;

    @Column({
        type: "boolean",
    })
    public appInventor!: boolean;

    @Column({
        type: "boolean",
    })
    public snap!: boolean;

    @Column({
        type: "boolean",
    })
    public mapBlocks!: boolean;

    @Column({
        type: "boolean",
    })
    public ctBlocks!: boolean;

    @Column({
        type: "boolean",
    })
    public pencilCode!: boolean;

    @Column({
        type: "boolean",
    })
    public noTools!: boolean;
}

export default Tools;