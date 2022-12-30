/**
 * Length of String
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */
type LengthOfString<
  S extends string,
  C extends string[] = []
> = S extends `${infer A}${infer R}`
  ? LengthOfString<R, [A, ...C]>
  : C['length']

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]
