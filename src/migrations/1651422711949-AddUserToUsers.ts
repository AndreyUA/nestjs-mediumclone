import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserToUsers1651422711949 implements MigrationInterface {
  name = 'AddUserToUsers1651422711949';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "username" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
  }
}
