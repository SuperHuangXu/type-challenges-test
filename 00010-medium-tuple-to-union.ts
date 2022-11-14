/**
 * 元组转合集
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type TupleToUnion<T extends [...any]> = T[number]

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
]
