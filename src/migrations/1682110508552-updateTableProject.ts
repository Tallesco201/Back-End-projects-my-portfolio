import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableProject1682110508552 implements MigrationInterface {
    name = 'UpdateTableProject1682110508552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "link_repo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "link_page" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "link_page"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "link_repo"`);
    }

}
