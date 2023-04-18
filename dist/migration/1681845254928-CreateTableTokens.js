"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTokens1681845254928 = void 0;
class CreateTableTokens1681845254928 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Tokens(
                id INT PRIMARY KEY AUTO_INCREMENT,
                refreshToken VARCHAR(250) NOT NULL,
                userId INT NOT NULL,
                FOREIGN KEY (userId) REFERENCES Users (id)
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Tokens
        `);
    }
}
exports.CreateTableTokens1681845254928 = CreateTableTokens1681845254928;
//# sourceMappingURL=1681845254928-CreateTableTokens.js.map