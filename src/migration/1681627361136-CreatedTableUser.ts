import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatedTableUser1681627361136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },

                {
                    name: 'firstName',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },

                {
                    name: 'lastName',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },

                {
                    name: 'age',
                    type: 'int',
                    isNullable: false,
                },

                {
                    name: 'city',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },

                {
                    name: 'phone',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'email',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                },

                {
                    name: 'createdAT',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },

                {
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }), true)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users', true);
    }

}
