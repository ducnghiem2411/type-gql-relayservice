import { CPoolRepository } from "./pool.repository"
import { CTokenRepository } from "./token.repository"

const PoolRepository = new CPoolRepository()
const TokenRepository = new CTokenRepository()

export { PoolRepository, TokenRepository }