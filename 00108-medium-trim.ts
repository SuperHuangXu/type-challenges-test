/**
 * Trim
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type Empty = ' ' | '\t' | '\n'
type Trim<S extends string> = S extends `${Empty}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${Empty}`
  ? Trim<L>
  : S

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
]
