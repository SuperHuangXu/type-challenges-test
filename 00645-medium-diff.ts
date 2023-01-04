/**
 * Diff
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
]
