/**
 * AnyOf
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type IsTrue<N> = keyof N extends []
  ? false
  : N extends '' | 0 | false | [] | undefined | null
  ? false
  : true

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? IsTrue<F> extends true
    ? true
    : AnyOf<R>
  : false

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<
    Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<
    Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
  Expect<Equal<AnyOf<[{}]>, false>>
]
