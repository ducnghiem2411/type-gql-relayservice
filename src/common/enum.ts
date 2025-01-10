export enum UserRole {
    "ADMIN",
    "USER"
}

export enum ResourceType {
    "ENERGY",
    "BANDWIDTH"
}

export enum OrderRequestType {
    "EXTEND",
    "EXTRA_BUY",
    "OVER_BUY"
}

export enum FromSourceType {
    "API",
    "TELEGRAM",
    "BOT",
    "INTERNAL_API",
    "COMMAND",
    "FAST_CHARGE"
}

export enum DelegateStatus {
    "DELEGATED",
    "PENDING",
    "FAILED",
    "CLAIMED",
    "CLAIM_FAILED"
}

export enum ActiveAddressRequestType {
    'SUCCESS',
    'FAIL',
    'PENDING',
    'CHECKING'
}

export enum TransactionType {
    "ONCHAIN",
    "OFFCHAIN"
}

export enum TransactionSourceType {
    "INTERNAL",
    "EXTERNAL"
}

export enum TransactionStatus {
    'SUCCESS',
    'FAILED'
}

export enum TransactionActionType {
    "DEPOSIT",
    "ADD",
    "REMOVE",
    "REVERT_ADD",
    "REVERT_REMOVE",
    "WITHDRAW",
    "TO_SAFU"
}

