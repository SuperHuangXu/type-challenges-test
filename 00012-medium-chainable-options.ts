/**
 * 可串联构造器
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type Chainable<T = {}> = {
  option<K extends string, V extends any>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<T, K> & { [Key in K]: V }>
  get(): T
}

/* _____________ 测试用例 _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a.option('name', 'another name').option('name', 123).get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}
