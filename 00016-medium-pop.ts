/**
 * 出堆
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type Pop<T extends any[]> = T extends [...infer R, any] ? R : []

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>
]
