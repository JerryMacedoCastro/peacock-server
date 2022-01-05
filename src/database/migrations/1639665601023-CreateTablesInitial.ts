import { MigrationInterface, QueryRunner } from "typeorm";
import tablesInital from "../tablesInitial";

export class CreateTablesInitial1639665601023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(tablesInital);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
