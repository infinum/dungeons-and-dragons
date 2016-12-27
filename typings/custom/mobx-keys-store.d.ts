declare module 'mobx-keys-store' {
  export default class KeysStore {
    setItem<T>(name: string, value: T): T
    removeItem(name: string): void
    increaseItem(name: string, amount: number): number
    decreaseItem(name: string, amount: number): number
  }
}