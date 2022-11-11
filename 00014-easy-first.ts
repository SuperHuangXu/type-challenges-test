/**
 * 第一个元素
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type First<T extends any[]> = T extends [any, ...any] ? T[0] : never

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
]
