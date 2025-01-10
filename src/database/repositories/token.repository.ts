import { Tokens } from ".."
import { IToken } from "../collections/Token"


export class CTokenRepository {
    async insertTokens(tokens: IToken[]) {
        return await Tokens.insertMany(tokens)
    }

    async findToken(address: string) {
        return await Tokens.findOne({ address })
    }

    async findTokens(page: number, pageSize: number) {
        return await Tokens.find().skip(page * pageSize).limit(pageSize).toArray()
    }
}