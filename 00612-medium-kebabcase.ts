/**
 * KebabCase
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md#kebabcase--
 */

/* _____________ Your Code Here _____________ */

type CheckEmoji<S extends string> = S extends `${number}`
  ? false
  : Uppercase<S> extends Lowercase<S>
  ? true
  : false

type IsUppercase<S extends string> = CheckEmoji<S> extends true
  ? false
  : Uppercase<S> extends S
  ? true
  : false

type KebabCase<S, F extends boolean = true> = S extends `${infer U}${infer R}`
  ? U extends '-' | '_'
    ? `${U}${KebabCase<R, false>}`
    : IsUppercase<U> extends true
    ? `${F extends false ? '-' : ''}${Lowercase<U>}${KebabCase<R, false>}`
    : `${U}${KebabCase<R, false>}`
  : S

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>
]
