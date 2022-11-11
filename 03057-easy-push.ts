/**
 * Push
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type Push<T extends unknown[], U> = [...T, U]

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
]
