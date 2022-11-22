/**
 * 最后一个元素
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type Last<T extends any[]> = T extends [...any, infer L] ? L : never

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
]
