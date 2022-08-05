import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemsTable1659707115449 implements MigrationInterface {
  name = 'ItemsTable1659707115449';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "items" (
            "uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "id" SERIAL NOT NULL,
            "name" character varying(64) NOT NULL,
            "createAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updateAt" TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT "PK_2e718ee16b63344e3a362744e4e" PRIMARY KEY ("uid"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "items"`);
  }
}
