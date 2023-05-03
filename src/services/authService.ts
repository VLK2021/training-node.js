import { IUser } from '../entity/user';
import { ITokenData } from '../interfaces';
import { tokenService } from './tokenService';


class AuthService {
    // public async registration(body: IUser) {
    //     const { email } = body;
    //
    //     const userFromDb = await userService.getUserByEmail(email);
    //     if (userFromDb) {
    //         throw new Error(`User with amail: ${email} already exists`);
    //     }
    //     const createdUser = await userService.createdUser(body);
    //     return this._getTokenData(createdUser);
    // }

    public async registration(createdUser: IUser): Promise<ITokenData> {
        return this._getTokenData(createdUser);
    }

    private async _getTokenData(userData: IUser) {
        const { id, email } = userData;
        const tokensPair = await tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenService.saveToken(id, tokensPair.refreshToken, tokensPair.accessToken);

        return {
            ...tokensPair,
            userId: id,
            userEmail: email,
        }
    }
}

export const authService = new AuthService();
