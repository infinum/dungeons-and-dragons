declare module 'mobx-jsonapi-store' {
  export class JsonApiStore {
    constructor(opts: Object)

    sync(data: Object): Object | Array<JsonApiRecord>
    find(type: string, id: string): JsonApiRecord
    findAll(type: string): Array<JsonApiRecord>
    remove(type: string, id: string): Array<JsonApiRecord> | JsonApiRecord
    reset(): void
  }

  export class JsonApiRecord {
    attributes: Object
    relationships?: Object
    type: string
    id: string

    set<T>(key: string, value: T): T
  }
}