"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedTablePost1681715495017 = void 0;
const typeorm_1 = require("typeorm");
class CreatedTablePost1681715495017 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Posts',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },
                {
                    name: 'body',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },
                {
                    name: 'userId',
                    type: 'int',
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
            foreignKeys: [
                {
                    columnNames: ['userId'],
                    referencedTableName: 'Users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Posts', true);
    }
}
exports.CreatedTablePost1681715495017 = CreatedTablePost1681715495017;
//# sourceMappingURL=1681715495017-CreatedTablePost.js.map