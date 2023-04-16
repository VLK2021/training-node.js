"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedTableUser1681627361136 = void 0;
const typeorm_1 = require("typeorm");
class CreatedTableUser1681627361136 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Users', true);
    }
}
exports.CreatedTableUser1681627361136 = CreatedTableUser1681627361136;
//# sourceMappingURL=1681627361136-CreatedTableUser.js.map