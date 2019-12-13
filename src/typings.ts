export type MongooseResponse = {
    n: number;
    nModified: number;
    ok: number;
}

//FIXME: is it correct to all optional params
export type MongooseRemoveResponse = {
    n?: number;
    ok?: number;
    deletedCount?: number;
}
