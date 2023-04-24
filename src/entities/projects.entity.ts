import { 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany,
    BeforeInsert,BeforeUpdate
    } from "typeorm";


    @Entity("projects")
        class Project{
            @PrimaryGeneratedColumn("uuid")
            id:string;

            @Column({unique:true})
            name:string;

            @Column()
            image_url:string;

            @Column()
            link_repo:string;

            @Column()
            link_page:string;

            @CreateDateColumn()
            createdAt: Date;

            @UpdateDateColumn()
            updatedAt: Date;
        }

        export {Project}



            
