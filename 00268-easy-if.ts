/**
 * If
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type If<C extends true | false, T, F> = C extends true ? T : F

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
