/**
 * 深度 Readonly
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> | Array<unknown>
    ? DeepReadonly<T[P]>
    : T[P]
}

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        }
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        }
      ]
    }
  }
}
