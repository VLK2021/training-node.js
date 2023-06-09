import {getManager} from "typeorm";

import {IToken, Token} from "../../entity/token";

class TokenRepository {
    public async createToken(token: any): Promise<IToken> {
        return getManager().getRepository(Token).save(token);
    }

    public findByParams(filterObject: Partial<IToken>): Promise<IToken | undefined> {
        return getManager().getRepository(Token).findOne(filterObject);
    }

    public async findTokenByUserId(userId: number): Promise<IToken | undefined> {
        return getManager().getRepository(Token).findOne({ userId });
    }

    async deleteByParams(findObject: Partial<IToken>) {
        return getManager().getRepository(Token).delete(findObject);
    }
}

export const tokenRepository = new TokenRepository();