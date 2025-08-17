
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Student_2
 * 
 */
export type Student_2 = $Result.DefaultSelection<Prisma.$Student_2Payload>
/**
 * Model documents
 * 
 */
export type documents = $Result.DefaultSelection<Prisma.$documentsPayload>
/**
 * Model submissions
 * 
 */
export type submissions = $Result.DefaultSelection<Prisma.$submissionsPayload>
/**
 * Model test1
 * 
 */
export type test1 = $Result.DefaultSelection<Prisma.$test1Payload>
/**
 * Model test2
 * 
 */
export type test2 = $Result.DefaultSelection<Prisma.$test2Payload>
/**
 * Model userLogin
 * 
 */
export type userLogin = $Result.DefaultSelection<Prisma.$userLoginPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const User_role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type User_role = (typeof User_role)[keyof typeof User_role]

}

export type User_role = $Enums.User_role

export const User_role: typeof $Enums.User_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_2`: Exposes CRUD operations for the **Student_2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_2s
    * const student_2s = await prisma.student_2.findMany()
    * ```
    */
  get student_2(): Prisma.Student_2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.documentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submissions`: Exposes CRUD operations for the **submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submissions.findMany()
    * ```
    */
  get submissions(): Prisma.submissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test1`: Exposes CRUD operations for the **test1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test1s
    * const test1s = await prisma.test1.findMany()
    * ```
    */
  get test1(): Prisma.test1Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test2`: Exposes CRUD operations for the **test2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test2s
    * const test2s = await prisma.test2.findMany()
    * ```
    */
  get test2(): Prisma.test2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLogin`: Exposes CRUD operations for the **userLogin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLogins
    * const userLogins = await prisma.userLogin.findMany()
    * ```
    */
  get userLogin(): Prisma.userLoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Student_2: 'Student_2',
    documents: 'documents',
    submissions: 'submissions',
    test1: 'test1',
    test2: 'test2',
    userLogin: 'userLogin',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "student_2" | "documents" | "submissions" | "test1" | "test2" | "userLogin" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Student_2: {
        payload: Prisma.$Student_2Payload<ExtArgs>
        fields: Prisma.Student_2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Student_2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Student_2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload>
          }
          findFirst: {
            args: Prisma.Student_2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Student_2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload>
          }
          findMany: {
            args: Prisma.Student_2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload>[]
          }
          create: {
            args: Prisma.Student_2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload>
          }
          createMany: {
            args: Prisma.Student_2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Student_2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload>
          }
          update: {
            args: Prisma.Student_2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload>
          }
          deleteMany: {
            args: Prisma.Student_2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Student_2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Student_2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_2Payload>
          }
          aggregate: {
            args: Prisma.Student_2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_2>
          }
          groupBy: {
            args: Prisma.Student_2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Student_2CountArgs<ExtArgs>
            result: $Utils.Optional<Student_2CountAggregateOutputType> | number
          }
        }
      }
      documents: {
        payload: Prisma.$documentsPayload<ExtArgs>
        fields: Prisma.documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findFirst: {
            args: Prisma.documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findMany: {
            args: Prisma.documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          create: {
            args: Prisma.documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          createMany: {
            args: Prisma.documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          update: {
            args: Prisma.documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          deleteMany: {
            args: Prisma.documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      submissions: {
        payload: Prisma.$submissionsPayload<ExtArgs>
        fields: Prisma.submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findFirst: {
            args: Prisma.submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findMany: {
            args: Prisma.submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          create: {
            args: Prisma.submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          createMany: {
            args: Prisma.submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          update: {
            args: Prisma.submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          deleteMany: {
            args: Prisma.submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          aggregate: {
            args: Prisma.SubmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissions>
          }
          groupBy: {
            args: Prisma.submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsCountAggregateOutputType> | number
          }
        }
      }
      test1: {
        payload: Prisma.$test1Payload<ExtArgs>
        fields: Prisma.test1FieldRefs
        operations: {
          findUnique: {
            args: Prisma.test1FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.test1FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload>
          }
          findFirst: {
            args: Prisma.test1FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.test1FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload>
          }
          findMany: {
            args: Prisma.test1FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload>[]
          }
          create: {
            args: Prisma.test1CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload>
          }
          createMany: {
            args: Prisma.test1CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.test1DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload>
          }
          update: {
            args: Prisma.test1UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload>
          }
          deleteMany: {
            args: Prisma.test1DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.test1UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.test1UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test1Payload>
          }
          aggregate: {
            args: Prisma.Test1AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest1>
          }
          groupBy: {
            args: Prisma.test1GroupByArgs<ExtArgs>
            result: $Utils.Optional<Test1GroupByOutputType>[]
          }
          count: {
            args: Prisma.test1CountArgs<ExtArgs>
            result: $Utils.Optional<Test1CountAggregateOutputType> | number
          }
        }
      }
      test2: {
        payload: Prisma.$test2Payload<ExtArgs>
        fields: Prisma.test2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.test2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.test2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          findFirst: {
            args: Prisma.test2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.test2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          findMany: {
            args: Prisma.test2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload>[]
          }
          create: {
            args: Prisma.test2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          createMany: {
            args: Prisma.test2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.test2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          update: {
            args: Prisma.test2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          deleteMany: {
            args: Prisma.test2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.test2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.test2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          aggregate: {
            args: Prisma.Test2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest2>
          }
          groupBy: {
            args: Prisma.test2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Test2GroupByOutputType>[]
          }
          count: {
            args: Prisma.test2CountArgs<ExtArgs>
            result: $Utils.Optional<Test2CountAggregateOutputType> | number
          }
        }
      }
      userLogin: {
        payload: Prisma.$userLoginPayload<ExtArgs>
        fields: Prisma.userLoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userLoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userLoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload>
          }
          findFirst: {
            args: Prisma.userLoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userLoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload>
          }
          findMany: {
            args: Prisma.userLoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload>[]
          }
          create: {
            args: Prisma.userLoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload>
          }
          createMany: {
            args: Prisma.userLoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userLoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload>
          }
          update: {
            args: Prisma.userLoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload>
          }
          deleteMany: {
            args: Prisma.userLoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userLoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userLoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userLoginPayload>
          }
          aggregate: {
            args: Prisma.UserLoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLogin>
          }
          groupBy: {
            args: Prisma.userLoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.userLoginCountArgs<ExtArgs>
            result: $Utils.Optional<UserLoginCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    student_2?: Student_2Omit
    documents?: documentsOmit
    submissions?: submissionsOmit
    test1?: test1Omit
    test2?: test2Omit
    userLogin?: userLoginOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SubmissionsCountOutputType
   */

  export type SubmissionsCountOutputType = {
    documents: number
  }

  export type SubmissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | SubmissionsCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * SubmissionsCountOutputType without action
   */
  export type SubmissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionsCountOutputType
     */
    select?: SubmissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionsCountOutputType without action
   */
  export type SubmissionsCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    student_id: number | null
    age_years: number | null
  }

  export type StudentSumAggregateOutputType = {
    student_id: number | null
    age_years: number | null
  }

  export type StudentMinAggregateOutputType = {
    student_id: number | null
    class_level: string | null
    class_room: string | null
    student_number: string | null
    code_citizen: string | null
    gender: string | null
    prefix_name: string | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    age_years: number | null
    religion: string | null
    ethnicity: string | null
    guardian_first_name: string | null
    guardian_last_name: string | null
    guardian_relation: string | null
    father_first_name: string | null
    father_last_name: string | null
    mother_first_name: string | null
    mother_last_name: string | null
    created_at: Date | null
    updated_at: Date | null
    nationality: string | null
    status: string | null
    note: string | null
  }

  export type StudentMaxAggregateOutputType = {
    student_id: number | null
    class_level: string | null
    class_room: string | null
    student_number: string | null
    code_citizen: string | null
    gender: string | null
    prefix_name: string | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    age_years: number | null
    religion: string | null
    ethnicity: string | null
    guardian_first_name: string | null
    guardian_last_name: string | null
    guardian_relation: string | null
    father_first_name: string | null
    father_last_name: string | null
    mother_first_name: string | null
    mother_last_name: string | null
    created_at: Date | null
    updated_at: Date | null
    nationality: string | null
    status: string | null
    note: string | null
  }

  export type StudentCountAggregateOutputType = {
    student_id: number
    class_level: number
    class_room: number
    student_number: number
    code_citizen: number
    gender: number
    prefix_name: number
    first_name: number
    last_name: number
    birth_date: number
    age_years: number
    religion: number
    ethnicity: number
    guardian_first_name: number
    guardian_last_name: number
    guardian_relation: number
    father_first_name: number
    father_last_name: number
    mother_first_name: number
    mother_last_name: number
    created_at: number
    updated_at: number
    nationality: number
    status: number
    note: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    student_id?: true
    age_years?: true
  }

  export type StudentSumAggregateInputType = {
    student_id?: true
    age_years?: true
  }

  export type StudentMinAggregateInputType = {
    student_id?: true
    class_level?: true
    class_room?: true
    student_number?: true
    code_citizen?: true
    gender?: true
    prefix_name?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    age_years?: true
    religion?: true
    ethnicity?: true
    guardian_first_name?: true
    guardian_last_name?: true
    guardian_relation?: true
    father_first_name?: true
    father_last_name?: true
    mother_first_name?: true
    mother_last_name?: true
    created_at?: true
    updated_at?: true
    nationality?: true
    status?: true
    note?: true
  }

  export type StudentMaxAggregateInputType = {
    student_id?: true
    class_level?: true
    class_room?: true
    student_number?: true
    code_citizen?: true
    gender?: true
    prefix_name?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    age_years?: true
    religion?: true
    ethnicity?: true
    guardian_first_name?: true
    guardian_last_name?: true
    guardian_relation?: true
    father_first_name?: true
    father_last_name?: true
    mother_first_name?: true
    mother_last_name?: true
    created_at?: true
    updated_at?: true
    nationality?: true
    status?: true
    note?: true
  }

  export type StudentCountAggregateInputType = {
    student_id?: true
    class_level?: true
    class_room?: true
    student_number?: true
    code_citizen?: true
    gender?: true
    prefix_name?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    age_years?: true
    religion?: true
    ethnicity?: true
    guardian_first_name?: true
    guardian_last_name?: true
    guardian_relation?: true
    father_first_name?: true
    father_last_name?: true
    mother_first_name?: true
    mother_last_name?: true
    created_at?: true
    updated_at?: true
    nationality?: true
    status?: true
    note?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    student_id: number
    class_level: string
    class_room: string
    student_number: string
    code_citizen: string | null
    gender: string
    prefix_name: string | null
    first_name: string
    last_name: string
    birth_date: Date | null
    age_years: number | null
    religion: string | null
    ethnicity: string | null
    guardian_first_name: string | null
    guardian_last_name: string | null
    guardian_relation: string | null
    father_first_name: string | null
    father_last_name: string | null
    mother_first_name: string | null
    mother_last_name: string | null
    created_at: Date
    updated_at: Date
    nationality: string | null
    status: string
    note: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    class_level?: boolean
    class_room?: boolean
    student_number?: boolean
    code_citizen?: boolean
    gender?: boolean
    prefix_name?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    age_years?: boolean
    religion?: boolean
    ethnicity?: boolean
    guardian_first_name?: boolean
    guardian_last_name?: boolean
    guardian_relation?: boolean
    father_first_name?: boolean
    father_last_name?: boolean
    mother_first_name?: boolean
    mother_last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    nationality?: boolean
    status?: boolean
    note?: boolean
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    student_id?: boolean
    class_level?: boolean
    class_room?: boolean
    student_number?: boolean
    code_citizen?: boolean
    gender?: boolean
    prefix_name?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    age_years?: boolean
    religion?: boolean
    ethnicity?: boolean
    guardian_first_name?: boolean
    guardian_last_name?: boolean
    guardian_relation?: boolean
    father_first_name?: boolean
    father_last_name?: boolean
    mother_first_name?: boolean
    mother_last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    nationality?: boolean
    status?: boolean
    note?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "class_level" | "class_room" | "student_number" | "code_citizen" | "gender" | "prefix_name" | "first_name" | "last_name" | "birth_date" | "age_years" | "religion" | "ethnicity" | "guardian_first_name" | "guardian_last_name" | "guardian_relation" | "father_first_name" | "father_last_name" | "mother_first_name" | "mother_last_name" | "created_at" | "updated_at" | "nationality" | "status" | "note", ExtArgs["result"]["student"]>

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      class_level: string
      class_room: string
      student_number: string
      code_citizen: string | null
      gender: string
      prefix_name: string | null
      first_name: string
      last_name: string
      birth_date: Date | null
      age_years: number | null
      religion: string | null
      ethnicity: string | null
      guardian_first_name: string | null
      guardian_last_name: string | null
      guardian_relation: string | null
      father_first_name: string | null
      father_last_name: string | null
      mother_first_name: string | null
      mother_last_name: string | null
      created_at: Date
      updated_at: Date
      nationality: string | null
      status: string
      note: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly student_id: FieldRef<"Student", 'Int'>
    readonly class_level: FieldRef<"Student", 'String'>
    readonly class_room: FieldRef<"Student", 'String'>
    readonly student_number: FieldRef<"Student", 'String'>
    readonly code_citizen: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly prefix_name: FieldRef<"Student", 'String'>
    readonly first_name: FieldRef<"Student", 'String'>
    readonly last_name: FieldRef<"Student", 'String'>
    readonly birth_date: FieldRef<"Student", 'DateTime'>
    readonly age_years: FieldRef<"Student", 'Int'>
    readonly religion: FieldRef<"Student", 'String'>
    readonly ethnicity: FieldRef<"Student", 'String'>
    readonly guardian_first_name: FieldRef<"Student", 'String'>
    readonly guardian_last_name: FieldRef<"Student", 'String'>
    readonly guardian_relation: FieldRef<"Student", 'String'>
    readonly father_first_name: FieldRef<"Student", 'String'>
    readonly father_last_name: FieldRef<"Student", 'String'>
    readonly mother_first_name: FieldRef<"Student", 'String'>
    readonly mother_last_name: FieldRef<"Student", 'String'>
    readonly created_at: FieldRef<"Student", 'DateTime'>
    readonly updated_at: FieldRef<"Student", 'DateTime'>
    readonly nationality: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'String'>
    readonly note: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
  }


  /**
   * Model Student_2
   */

  export type AggregateStudent_2 = {
    _count: Student_2CountAggregateOutputType | null
    _avg: Student_2AvgAggregateOutputType | null
    _sum: Student_2SumAggregateOutputType | null
    _min: Student_2MinAggregateOutputType | null
    _max: Student_2MaxAggregateOutputType | null
  }

  export type Student_2AvgAggregateOutputType = {
    student_id: number | null
    age_years: number | null
  }

  export type Student_2SumAggregateOutputType = {
    student_id: number | null
    age_years: number | null
  }

  export type Student_2MinAggregateOutputType = {
    student_id: number | null
    class_level: string | null
    class_room: string | null
    student_number: string | null
    code_citizen: string | null
    gender: string | null
    prefix_name: string | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    age_years: number | null
    religion: string | null
    ethnicity: string | null
    guardian_first_name: string | null
    guardian_last_name: string | null
    guardian_relation: string | null
    father_first_name: string | null
    father_last_name: string | null
    mother_first_name: string | null
    mother_last_name: string | null
    created_at: Date | null
    updated_at: Date | null
    nationality: string | null
    status: string | null
    note: string | null
  }

  export type Student_2MaxAggregateOutputType = {
    student_id: number | null
    class_level: string | null
    class_room: string | null
    student_number: string | null
    code_citizen: string | null
    gender: string | null
    prefix_name: string | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    age_years: number | null
    religion: string | null
    ethnicity: string | null
    guardian_first_name: string | null
    guardian_last_name: string | null
    guardian_relation: string | null
    father_first_name: string | null
    father_last_name: string | null
    mother_first_name: string | null
    mother_last_name: string | null
    created_at: Date | null
    updated_at: Date | null
    nationality: string | null
    status: string | null
    note: string | null
  }

  export type Student_2CountAggregateOutputType = {
    student_id: number
    class_level: number
    class_room: number
    student_number: number
    code_citizen: number
    gender: number
    prefix_name: number
    first_name: number
    last_name: number
    birth_date: number
    age_years: number
    religion: number
    ethnicity: number
    guardian_first_name: number
    guardian_last_name: number
    guardian_relation: number
    father_first_name: number
    father_last_name: number
    mother_first_name: number
    mother_last_name: number
    created_at: number
    updated_at: number
    nationality: number
    status: number
    note: number
    _all: number
  }


  export type Student_2AvgAggregateInputType = {
    student_id?: true
    age_years?: true
  }

  export type Student_2SumAggregateInputType = {
    student_id?: true
    age_years?: true
  }

  export type Student_2MinAggregateInputType = {
    student_id?: true
    class_level?: true
    class_room?: true
    student_number?: true
    code_citizen?: true
    gender?: true
    prefix_name?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    age_years?: true
    religion?: true
    ethnicity?: true
    guardian_first_name?: true
    guardian_last_name?: true
    guardian_relation?: true
    father_first_name?: true
    father_last_name?: true
    mother_first_name?: true
    mother_last_name?: true
    created_at?: true
    updated_at?: true
    nationality?: true
    status?: true
    note?: true
  }

  export type Student_2MaxAggregateInputType = {
    student_id?: true
    class_level?: true
    class_room?: true
    student_number?: true
    code_citizen?: true
    gender?: true
    prefix_name?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    age_years?: true
    religion?: true
    ethnicity?: true
    guardian_first_name?: true
    guardian_last_name?: true
    guardian_relation?: true
    father_first_name?: true
    father_last_name?: true
    mother_first_name?: true
    mother_last_name?: true
    created_at?: true
    updated_at?: true
    nationality?: true
    status?: true
    note?: true
  }

  export type Student_2CountAggregateInputType = {
    student_id?: true
    class_level?: true
    class_room?: true
    student_number?: true
    code_citizen?: true
    gender?: true
    prefix_name?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    age_years?: true
    religion?: true
    ethnicity?: true
    guardian_first_name?: true
    guardian_last_name?: true
    guardian_relation?: true
    father_first_name?: true
    father_last_name?: true
    mother_first_name?: true
    mother_last_name?: true
    created_at?: true
    updated_at?: true
    nationality?: true
    status?: true
    note?: true
    _all?: true
  }

  export type Student_2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student_2 to aggregate.
     */
    where?: Student_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_2s to fetch.
     */
    orderBy?: Student_2OrderByWithRelationInput | Student_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Student_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Student_2s
    **/
    _count?: true | Student_2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_2MaxAggregateInputType
  }

  export type GetStudent_2AggregateType<T extends Student_2AggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_2[P]>
      : GetScalarType<T[P], AggregateStudent_2[P]>
  }




  export type Student_2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Student_2WhereInput
    orderBy?: Student_2OrderByWithAggregationInput | Student_2OrderByWithAggregationInput[]
    by: Student_2ScalarFieldEnum[] | Student_2ScalarFieldEnum
    having?: Student_2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_2CountAggregateInputType | true
    _avg?: Student_2AvgAggregateInputType
    _sum?: Student_2SumAggregateInputType
    _min?: Student_2MinAggregateInputType
    _max?: Student_2MaxAggregateInputType
  }

  export type Student_2GroupByOutputType = {
    student_id: number
    class_level: string
    class_room: string
    student_number: string
    code_citizen: string | null
    gender: string
    prefix_name: string | null
    first_name: string
    last_name: string
    birth_date: Date | null
    age_years: number | null
    religion: string | null
    ethnicity: string | null
    guardian_first_name: string | null
    guardian_last_name: string | null
    guardian_relation: string | null
    father_first_name: string | null
    father_last_name: string | null
    mother_first_name: string | null
    mother_last_name: string | null
    created_at: Date
    updated_at: Date
    nationality: string | null
    status: string
    note: string | null
    _count: Student_2CountAggregateOutputType | null
    _avg: Student_2AvgAggregateOutputType | null
    _sum: Student_2SumAggregateOutputType | null
    _min: Student_2MinAggregateOutputType | null
    _max: Student_2MaxAggregateOutputType | null
  }

  type GetStudent_2GroupByPayload<T extends Student_2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_2GroupByOutputType[P]>
            : GetScalarType<T[P], Student_2GroupByOutputType[P]>
        }
      >
    >


  export type Student_2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    class_level?: boolean
    class_room?: boolean
    student_number?: boolean
    code_citizen?: boolean
    gender?: boolean
    prefix_name?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    age_years?: boolean
    religion?: boolean
    ethnicity?: boolean
    guardian_first_name?: boolean
    guardian_last_name?: boolean
    guardian_relation?: boolean
    father_first_name?: boolean
    father_last_name?: boolean
    mother_first_name?: boolean
    mother_last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    nationality?: boolean
    status?: boolean
    note?: boolean
  }, ExtArgs["result"]["student_2"]>



  export type Student_2SelectScalar = {
    student_id?: boolean
    class_level?: boolean
    class_room?: boolean
    student_number?: boolean
    code_citizen?: boolean
    gender?: boolean
    prefix_name?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    age_years?: boolean
    religion?: boolean
    ethnicity?: boolean
    guardian_first_name?: boolean
    guardian_last_name?: boolean
    guardian_relation?: boolean
    father_first_name?: boolean
    father_last_name?: boolean
    mother_first_name?: boolean
    mother_last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    nationality?: boolean
    status?: boolean
    note?: boolean
  }

  export type Student_2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "class_level" | "class_room" | "student_number" | "code_citizen" | "gender" | "prefix_name" | "first_name" | "last_name" | "birth_date" | "age_years" | "religion" | "ethnicity" | "guardian_first_name" | "guardian_last_name" | "guardian_relation" | "father_first_name" | "father_last_name" | "mother_first_name" | "mother_last_name" | "created_at" | "updated_at" | "nationality" | "status" | "note", ExtArgs["result"]["student_2"]>

  export type $Student_2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student_2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      class_level: string
      class_room: string
      student_number: string
      code_citizen: string | null
      gender: string
      prefix_name: string | null
      first_name: string
      last_name: string
      birth_date: Date | null
      age_years: number | null
      religion: string | null
      ethnicity: string | null
      guardian_first_name: string | null
      guardian_last_name: string | null
      guardian_relation: string | null
      father_first_name: string | null
      father_last_name: string | null
      mother_first_name: string | null
      mother_last_name: string | null
      created_at: Date
      updated_at: Date
      nationality: string | null
      status: string
      note: string | null
    }, ExtArgs["result"]["student_2"]>
    composites: {}
  }

  type Student_2GetPayload<S extends boolean | null | undefined | Student_2DefaultArgs> = $Result.GetResult<Prisma.$Student_2Payload, S>

  type Student_2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Student_2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_2CountAggregateInputType | true
    }

  export interface Student_2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student_2'], meta: { name: 'Student_2' } }
    /**
     * Find zero or one Student_2 that matches the filter.
     * @param {Student_2FindUniqueArgs} args - Arguments to find a Student_2
     * @example
     * // Get one Student_2
     * const student_2 = await prisma.student_2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Student_2FindUniqueArgs>(args: SelectSubset<T, Student_2FindUniqueArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Student_2FindUniqueOrThrowArgs} args - Arguments to find a Student_2
     * @example
     * // Get one Student_2
     * const student_2 = await prisma.student_2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Student_2FindUniqueOrThrowArgs>(args: SelectSubset<T, Student_2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_2FindFirstArgs} args - Arguments to find a Student_2
     * @example
     * // Get one Student_2
     * const student_2 = await prisma.student_2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Student_2FindFirstArgs>(args?: SelectSubset<T, Student_2FindFirstArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_2FindFirstOrThrowArgs} args - Arguments to find a Student_2
     * @example
     * // Get one Student_2
     * const student_2 = await prisma.student_2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Student_2FindFirstOrThrowArgs>(args?: SelectSubset<T, Student_2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_2s
     * const student_2s = await prisma.student_2.findMany()
     * 
     * // Get first 10 Student_2s
     * const student_2s = await prisma.student_2.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const student_2WithStudent_idOnly = await prisma.student_2.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends Student_2FindManyArgs>(args?: SelectSubset<T, Student_2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_2.
     * @param {Student_2CreateArgs} args - Arguments to create a Student_2.
     * @example
     * // Create one Student_2
     * const Student_2 = await prisma.student_2.create({
     *   data: {
     *     // ... data to create a Student_2
     *   }
     * })
     * 
     */
    create<T extends Student_2CreateArgs>(args: SelectSubset<T, Student_2CreateArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_2s.
     * @param {Student_2CreateManyArgs} args - Arguments to create many Student_2s.
     * @example
     * // Create many Student_2s
     * const student_2 = await prisma.student_2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Student_2CreateManyArgs>(args?: SelectSubset<T, Student_2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student_2.
     * @param {Student_2DeleteArgs} args - Arguments to delete one Student_2.
     * @example
     * // Delete one Student_2
     * const Student_2 = await prisma.student_2.delete({
     *   where: {
     *     // ... filter to delete one Student_2
     *   }
     * })
     * 
     */
    delete<T extends Student_2DeleteArgs>(args: SelectSubset<T, Student_2DeleteArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_2.
     * @param {Student_2UpdateArgs} args - Arguments to update one Student_2.
     * @example
     * // Update one Student_2
     * const student_2 = await prisma.student_2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Student_2UpdateArgs>(args: SelectSubset<T, Student_2UpdateArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_2s.
     * @param {Student_2DeleteManyArgs} args - Arguments to filter Student_2s to delete.
     * @example
     * // Delete a few Student_2s
     * const { count } = await prisma.student_2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Student_2DeleteManyArgs>(args?: SelectSubset<T, Student_2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_2s
     * const student_2 = await prisma.student_2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Student_2UpdateManyArgs>(args: SelectSubset<T, Student_2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student_2.
     * @param {Student_2UpsertArgs} args - Arguments to update or create a Student_2.
     * @example
     * // Update or create a Student_2
     * const student_2 = await prisma.student_2.upsert({
     *   create: {
     *     // ... data to create a Student_2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_2 we want to update
     *   }
     * })
     */
    upsert<T extends Student_2UpsertArgs>(args: SelectSubset<T, Student_2UpsertArgs<ExtArgs>>): Prisma__Student_2Client<$Result.GetResult<Prisma.$Student_2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_2CountArgs} args - Arguments to filter Student_2s to count.
     * @example
     * // Count the number of Student_2s
     * const count = await prisma.student_2.count({
     *   where: {
     *     // ... the filter for the Student_2s we want to count
     *   }
     * })
    **/
    count<T extends Student_2CountArgs>(
      args?: Subset<T, Student_2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Student_2AggregateArgs>(args: Subset<T, Student_2AggregateArgs>): Prisma.PrismaPromise<GetStudent_2AggregateType<T>>

    /**
     * Group by Student_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Student_2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Student_2GroupByArgs['orderBy'] }
        : { orderBy?: Student_2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Student_2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student_2 model
   */
  readonly fields: Student_2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student_2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Student_2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student_2 model
   */
  interface Student_2FieldRefs {
    readonly student_id: FieldRef<"Student_2", 'Int'>
    readonly class_level: FieldRef<"Student_2", 'String'>
    readonly class_room: FieldRef<"Student_2", 'String'>
    readonly student_number: FieldRef<"Student_2", 'String'>
    readonly code_citizen: FieldRef<"Student_2", 'String'>
    readonly gender: FieldRef<"Student_2", 'String'>
    readonly prefix_name: FieldRef<"Student_2", 'String'>
    readonly first_name: FieldRef<"Student_2", 'String'>
    readonly last_name: FieldRef<"Student_2", 'String'>
    readonly birth_date: FieldRef<"Student_2", 'DateTime'>
    readonly age_years: FieldRef<"Student_2", 'Int'>
    readonly religion: FieldRef<"Student_2", 'String'>
    readonly ethnicity: FieldRef<"Student_2", 'String'>
    readonly guardian_first_name: FieldRef<"Student_2", 'String'>
    readonly guardian_last_name: FieldRef<"Student_2", 'String'>
    readonly guardian_relation: FieldRef<"Student_2", 'String'>
    readonly father_first_name: FieldRef<"Student_2", 'String'>
    readonly father_last_name: FieldRef<"Student_2", 'String'>
    readonly mother_first_name: FieldRef<"Student_2", 'String'>
    readonly mother_last_name: FieldRef<"Student_2", 'String'>
    readonly created_at: FieldRef<"Student_2", 'DateTime'>
    readonly updated_at: FieldRef<"Student_2", 'DateTime'>
    readonly nationality: FieldRef<"Student_2", 'String'>
    readonly status: FieldRef<"Student_2", 'String'>
    readonly note: FieldRef<"Student_2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student_2 findUnique
   */
  export type Student_2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * Filter, which Student_2 to fetch.
     */
    where: Student_2WhereUniqueInput
  }

  /**
   * Student_2 findUniqueOrThrow
   */
  export type Student_2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * Filter, which Student_2 to fetch.
     */
    where: Student_2WhereUniqueInput
  }

  /**
   * Student_2 findFirst
   */
  export type Student_2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * Filter, which Student_2 to fetch.
     */
    where?: Student_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_2s to fetch.
     */
    orderBy?: Student_2OrderByWithRelationInput | Student_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_2s.
     */
    cursor?: Student_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_2s.
     */
    distinct?: Student_2ScalarFieldEnum | Student_2ScalarFieldEnum[]
  }

  /**
   * Student_2 findFirstOrThrow
   */
  export type Student_2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * Filter, which Student_2 to fetch.
     */
    where?: Student_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_2s to fetch.
     */
    orderBy?: Student_2OrderByWithRelationInput | Student_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_2s.
     */
    cursor?: Student_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_2s.
     */
    distinct?: Student_2ScalarFieldEnum | Student_2ScalarFieldEnum[]
  }

  /**
   * Student_2 findMany
   */
  export type Student_2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * Filter, which Student_2s to fetch.
     */
    where?: Student_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_2s to fetch.
     */
    orderBy?: Student_2OrderByWithRelationInput | Student_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Student_2s.
     */
    cursor?: Student_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_2s.
     */
    skip?: number
    distinct?: Student_2ScalarFieldEnum | Student_2ScalarFieldEnum[]
  }

  /**
   * Student_2 create
   */
  export type Student_2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * The data needed to create a Student_2.
     */
    data: XOR<Student_2CreateInput, Student_2UncheckedCreateInput>
  }

  /**
   * Student_2 createMany
   */
  export type Student_2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Student_2s.
     */
    data: Student_2CreateManyInput | Student_2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student_2 update
   */
  export type Student_2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * The data needed to update a Student_2.
     */
    data: XOR<Student_2UpdateInput, Student_2UncheckedUpdateInput>
    /**
     * Choose, which Student_2 to update.
     */
    where: Student_2WhereUniqueInput
  }

  /**
   * Student_2 updateMany
   */
  export type Student_2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Student_2s.
     */
    data: XOR<Student_2UpdateManyMutationInput, Student_2UncheckedUpdateManyInput>
    /**
     * Filter which Student_2s to update
     */
    where?: Student_2WhereInput
    /**
     * Limit how many Student_2s to update.
     */
    limit?: number
  }

  /**
   * Student_2 upsert
   */
  export type Student_2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * The filter to search for the Student_2 to update in case it exists.
     */
    where: Student_2WhereUniqueInput
    /**
     * In case the Student_2 found by the `where` argument doesn't exist, create a new Student_2 with this data.
     */
    create: XOR<Student_2CreateInput, Student_2UncheckedCreateInput>
    /**
     * In case the Student_2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Student_2UpdateInput, Student_2UncheckedUpdateInput>
  }

  /**
   * Student_2 delete
   */
  export type Student_2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
    /**
     * Filter which Student_2 to delete.
     */
    where: Student_2WhereUniqueInput
  }

  /**
   * Student_2 deleteMany
   */
  export type Student_2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student_2s to delete
     */
    where?: Student_2WhereInput
    /**
     * Limit how many Student_2s to delete.
     */
    limit?: number
  }

  /**
   * Student_2 without action
   */
  export type Student_2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_2
     */
    select?: Student_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Student_2
     */
    omit?: Student_2Omit<ExtArgs> | null
  }


  /**
   * Model documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    id: number | null
    submission_id: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    id: number | null
    submission_id: number | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: number | null
    submission_id: number | null
    docname: string | null
    title: string | null
    note: string | null
    created_at: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: number | null
    submission_id: number | null
    docname: string | null
    title: string | null
    note: string | null
    created_at: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    submission_id: number
    docname: number
    title: number
    note: number
    created_at: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    id?: true
    submission_id?: true
  }

  export type DocumentsSumAggregateInputType = {
    id?: true
    submission_id?: true
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    submission_id?: true
    docname?: true
    title?: true
    note?: true
    created_at?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    submission_id?: true
    docname?: true
    title?: true
    note?: true
    created_at?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    submission_id?: true
    docname?: true
    title?: true
    note?: true
    created_at?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to aggregate.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithAggregationInput | documentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: number
    submission_id: number
    docname: string
    title: string
    note: string | null
    created_at: Date | null
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submission_id?: boolean
    docname?: boolean
    title?: boolean
    note?: boolean
    created_at?: boolean
    submissions?: boolean | submissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>



  export type documentsSelectScalar = {
    id?: boolean
    submission_id?: boolean
    docname?: boolean
    title?: boolean
    note?: boolean
    created_at?: boolean
  }

  export type documentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submission_id" | "docname" | "title" | "note" | "created_at", ExtArgs["result"]["documents"]>
  export type documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | submissionsDefaultArgs<ExtArgs>
  }

  export type $documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documents"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      submission_id: number
      docname: string
      title: string
      note: string | null
      created_at: Date | null
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type documentsGetPayload<S extends boolean | null | undefined | documentsDefaultArgs> = $Result.GetResult<Prisma.$documentsPayload, S>

  type documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documents'], meta: { name: 'documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {documentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentsFindUniqueArgs>(args: SelectSubset<T, documentsFindUniqueArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentsFindFirstArgs>(args?: SelectSubset<T, documentsFindFirstArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documentsFindManyArgs>(args?: SelectSubset<T, documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {documentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends documentsCreateArgs>(args: SelectSubset<T, documentsCreateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {documentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentsCreateManyArgs>(args?: SelectSubset<T, documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documents.
     * @param {documentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends documentsDeleteArgs>(args: SelectSubset<T, documentsDeleteArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {documentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentsUpdateArgs>(args: SelectSubset<T, documentsUpdateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {documentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentsDeleteManyArgs>(args?: SelectSubset<T, documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentsUpdateManyArgs>(args: SelectSubset<T, documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documents.
     * @param {documentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends documentsUpsertArgs>(args: SelectSubset<T, documentsUpsertArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentsCountArgs>(
      args?: Subset<T, documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentsGroupByArgs['orderBy'] }
        : { orderBy?: documentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documents model
   */
  readonly fields: documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends submissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, submissionsDefaultArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the documents model
   */
  interface documentsFieldRefs {
    readonly id: FieldRef<"documents", 'Int'>
    readonly submission_id: FieldRef<"documents", 'Int'>
    readonly docname: FieldRef<"documents", 'String'>
    readonly title: FieldRef<"documents", 'String'>
    readonly note: FieldRef<"documents", 'String'>
    readonly created_at: FieldRef<"documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * documents findUnique
   */
  export type documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findUniqueOrThrow
   */
  export type documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findFirst
   */
  export type documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findFirstOrThrow
   */
  export type documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findMany
   */
  export type documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents create
   */
  export type documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a documents.
     */
    data: XOR<documentsCreateInput, documentsUncheckedCreateInput>
  }

  /**
   * documents createMany
   */
  export type documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents update
   */
  export type documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a documents.
     */
    data: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
    /**
     * Choose, which documents to update.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents updateMany
   */
  export type documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
  }

  /**
   * documents upsert
   */
  export type documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the documents to update in case it exists.
     */
    where: documentsWhereUniqueInput
    /**
     * In case the documents found by the `where` argument doesn't exist, create a new documents with this data.
     */
    create: XOR<documentsCreateInput, documentsUncheckedCreateInput>
    /**
     * In case the documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
  }

  /**
   * documents delete
   */
  export type documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter which documents to delete.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents deleteMany
   */
  export type documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to delete.
     */
    limit?: number
  }

  /**
   * documents without action
   */
  export type documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
  }


  /**
   * Model submissions
   */

  export type AggregateSubmissions = {
    _count: SubmissionsCountAggregateOutputType | null
    _avg: SubmissionsAvgAggregateOutputType | null
    _sum: SubmissionsSumAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  export type SubmissionsAvgAggregateOutputType = {
    id: number | null
  }

  export type SubmissionsSumAggregateOutputType = {
    id: number | null
  }

  export type SubmissionsMinAggregateOutputType = {
    id: number | null
    teacher_name: string | null
    date_accept: Date | null
    time_accept: Date | null
    receiver: string | null
    created_at: Date | null
  }

  export type SubmissionsMaxAggregateOutputType = {
    id: number | null
    teacher_name: string | null
    date_accept: Date | null
    time_accept: Date | null
    receiver: string | null
    created_at: Date | null
  }

  export type SubmissionsCountAggregateOutputType = {
    id: number
    teacher_name: number
    date_accept: number
    time_accept: number
    receiver: number
    created_at: number
    _all: number
  }


  export type SubmissionsAvgAggregateInputType = {
    id?: true
  }

  export type SubmissionsSumAggregateInputType = {
    id?: true
  }

  export type SubmissionsMinAggregateInputType = {
    id?: true
    teacher_name?: true
    date_accept?: true
    time_accept?: true
    receiver?: true
    created_at?: true
  }

  export type SubmissionsMaxAggregateInputType = {
    id?: true
    teacher_name?: true
    date_accept?: true
    time_accept?: true
    receiver?: true
    created_at?: true
  }

  export type SubmissionsCountAggregateInputType = {
    id?: true
    teacher_name?: true
    date_accept?: true
    time_accept?: true
    receiver?: true
    created_at?: true
    _all?: true
  }

  export type SubmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to aggregate.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissions
    **/
    _count?: true | SubmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionsMaxAggregateInputType
  }

  export type GetSubmissionsAggregateType<T extends SubmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissions[P]>
      : GetScalarType<T[P], AggregateSubmissions[P]>
  }




  export type submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithAggregationInput | submissionsOrderByWithAggregationInput[]
    by: SubmissionsScalarFieldEnum[] | SubmissionsScalarFieldEnum
    having?: submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionsCountAggregateInputType | true
    _avg?: SubmissionsAvgAggregateInputType
    _sum?: SubmissionsSumAggregateInputType
    _min?: SubmissionsMinAggregateInputType
    _max?: SubmissionsMaxAggregateInputType
  }

  export type SubmissionsGroupByOutputType = {
    id: number
    teacher_name: string
    date_accept: Date
    time_accept: Date
    receiver: string | null
    created_at: Date | null
    _count: SubmissionsCountAggregateOutputType | null
    _avg: SubmissionsAvgAggregateOutputType | null
    _sum: SubmissionsSumAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  type GetSubmissionsGroupByPayload<T extends submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
        }
      >
    >


  export type submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_name?: boolean
    date_accept?: boolean
    time_accept?: boolean
    receiver?: boolean
    created_at?: boolean
    documents?: boolean | submissions$documentsArgs<ExtArgs>
    _count?: boolean | SubmissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>



  export type submissionsSelectScalar = {
    id?: boolean
    teacher_name?: boolean
    date_accept?: boolean
    time_accept?: boolean
    receiver?: boolean
    created_at?: boolean
  }

  export type submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_name" | "date_accept" | "time_accept" | "receiver" | "created_at", ExtArgs["result"]["submissions"]>
  export type submissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | submissions$documentsArgs<ExtArgs>
    _count?: boolean | SubmissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submissions"
    objects: {
      documents: Prisma.$documentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacher_name: string
      date_accept: Date
      time_accept: Date
      receiver: string | null
      created_at: Date | null
    }, ExtArgs["result"]["submissions"]>
    composites: {}
  }

  type submissionsGetPayload<S extends boolean | null | undefined | submissionsDefaultArgs> = $Result.GetResult<Prisma.$submissionsPayload, S>

  type submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionsCountAggregateInputType | true
    }

  export interface submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submissions'], meta: { name: 'submissions' } }
    /**
     * Find zero or one Submissions that matches the filter.
     * @param {submissionsFindUniqueArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionsFindUniqueArgs>(args: SelectSubset<T, submissionsFindUniqueArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionsFindUniqueOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionsFindFirstArgs>(args?: SelectSubset<T, submissionsFindFirstArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submissions.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionsWithIdOnly = await prisma.submissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends submissionsFindManyArgs>(args?: SelectSubset<T, submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submissions.
     * @param {submissionsCreateArgs} args - Arguments to create a Submissions.
     * @example
     * // Create one Submissions
     * const Submissions = await prisma.submissions.create({
     *   data: {
     *     // ... data to create a Submissions
     *   }
     * })
     * 
     */
    create<T extends submissionsCreateArgs>(args: SelectSubset<T, submissionsCreateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {submissionsCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionsCreateManyArgs>(args?: SelectSubset<T, submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submissions.
     * @param {submissionsDeleteArgs} args - Arguments to delete one Submissions.
     * @example
     * // Delete one Submissions
     * const Submissions = await prisma.submissions.delete({
     *   where: {
     *     // ... filter to delete one Submissions
     *   }
     * })
     * 
     */
    delete<T extends submissionsDeleteArgs>(args: SelectSubset<T, submissionsDeleteArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submissions.
     * @param {submissionsUpdateArgs} args - Arguments to update one Submissions.
     * @example
     * // Update one Submissions
     * const submissions = await prisma.submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionsUpdateArgs>(args: SelectSubset<T, submissionsUpdateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {submissionsDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionsDeleteManyArgs>(args?: SelectSubset<T, submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionsUpdateManyArgs>(args: SelectSubset<T, submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submissions.
     * @param {submissionsUpsertArgs} args - Arguments to update or create a Submissions.
     * @example
     * // Update or create a Submissions
     * const submissions = await prisma.submissions.upsert({
     *   create: {
     *     // ... data to create a Submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submissions we want to update
     *   }
     * })
     */
    upsert<T extends submissionsUpsertArgs>(args: SelectSubset<T, submissionsUpsertArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submissions.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionsCountArgs>(
      args?: Subset<T, submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionsAggregateArgs>(args: Subset<T, SubmissionsAggregateArgs>): Prisma.PrismaPromise<GetSubmissionsAggregateType<T>>

    /**
     * Group by Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionsGroupByArgs['orderBy'] }
        : { orderBy?: submissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submissions model
   */
  readonly fields: submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends submissions$documentsArgs<ExtArgs> = {}>(args?: Subset<T, submissions$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the submissions model
   */
  interface submissionsFieldRefs {
    readonly id: FieldRef<"submissions", 'Int'>
    readonly teacher_name: FieldRef<"submissions", 'String'>
    readonly date_accept: FieldRef<"submissions", 'DateTime'>
    readonly time_accept: FieldRef<"submissions", 'DateTime'>
    readonly receiver: FieldRef<"submissions", 'String'>
    readonly created_at: FieldRef<"submissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * submissions findUnique
   */
  export type submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findUniqueOrThrow
   */
  export type submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findFirst
   */
  export type submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findFirstOrThrow
   */
  export type submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findMany
   */
  export type submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions create
   */
  export type submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a submissions.
     */
    data: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
  }

  /**
   * submissions createMany
   */
  export type submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submissions update
   */
  export type submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a submissions.
     */
    data: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
    /**
     * Choose, which submissions to update.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions updateMany
   */
  export type submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
  }

  /**
   * submissions upsert
   */
  export type submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the submissions to update in case it exists.
     */
    where: submissionsWhereUniqueInput
    /**
     * In case the submissions found by the `where` argument doesn't exist, create a new submissions with this data.
     */
    create: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
    /**
     * In case the submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
  }

  /**
   * submissions delete
   */
  export type submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter which submissions to delete.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions deleteMany
   */
  export type submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to delete.
     */
    limit?: number
  }

  /**
   * submissions.documents
   */
  export type submissions$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    cursor?: documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * submissions without action
   */
  export type submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
  }


  /**
   * Model test1
   */

  export type AggregateTest1 = {
    _count: Test1CountAggregateOutputType | null
    _avg: Test1AvgAggregateOutputType | null
    _sum: Test1SumAggregateOutputType | null
    _min: Test1MinAggregateOutputType | null
    _max: Test1MaxAggregateOutputType | null
  }

  export type Test1AvgAggregateOutputType = {
    id: number | null
  }

  export type Test1SumAggregateOutputType = {
    id: number | null
  }

  export type Test1MinAggregateOutputType = {
    id: number | null
    user_id: string | null
    displayname: string | null
    profile_image_url: string | null
    followed_at: Date | null
  }

  export type Test1MaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    displayname: string | null
    profile_image_url: string | null
    followed_at: Date | null
  }

  export type Test1CountAggregateOutputType = {
    id: number
    user_id: number
    displayname: number
    profile_image_url: number
    followed_at: number
    _all: number
  }


  export type Test1AvgAggregateInputType = {
    id?: true
  }

  export type Test1SumAggregateInputType = {
    id?: true
  }

  export type Test1MinAggregateInputType = {
    id?: true
    user_id?: true
    displayname?: true
    profile_image_url?: true
    followed_at?: true
  }

  export type Test1MaxAggregateInputType = {
    id?: true
    user_id?: true
    displayname?: true
    profile_image_url?: true
    followed_at?: true
  }

  export type Test1CountAggregateInputType = {
    id?: true
    user_id?: true
    displayname?: true
    profile_image_url?: true
    followed_at?: true
    _all?: true
  }

  export type Test1AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test1 to aggregate.
     */
    where?: test1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test1s to fetch.
     */
    orderBy?: test1OrderByWithRelationInput | test1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: test1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test1s
    **/
    _count?: true | Test1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test1AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test1SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test1MaxAggregateInputType
  }

  export type GetTest1AggregateType<T extends Test1AggregateArgs> = {
        [P in keyof T & keyof AggregateTest1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest1[P]>
      : GetScalarType<T[P], AggregateTest1[P]>
  }




  export type test1GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test1WhereInput
    orderBy?: test1OrderByWithAggregationInput | test1OrderByWithAggregationInput[]
    by: Test1ScalarFieldEnum[] | Test1ScalarFieldEnum
    having?: test1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test1CountAggregateInputType | true
    _avg?: Test1AvgAggregateInputType
    _sum?: Test1SumAggregateInputType
    _min?: Test1MinAggregateInputType
    _max?: Test1MaxAggregateInputType
  }

  export type Test1GroupByOutputType = {
    id: number
    user_id: string
    displayname: string
    profile_image_url: string | null
    followed_at: Date
    _count: Test1CountAggregateOutputType | null
    _avg: Test1AvgAggregateOutputType | null
    _sum: Test1SumAggregateOutputType | null
    _min: Test1MinAggregateOutputType | null
    _max: Test1MaxAggregateOutputType | null
  }

  type GetTest1GroupByPayload<T extends test1GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test1GroupByOutputType[P]>
            : GetScalarType<T[P], Test1GroupByOutputType[P]>
        }
      >
    >


  export type test1Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    displayname?: boolean
    profile_image_url?: boolean
    followed_at?: boolean
  }, ExtArgs["result"]["test1"]>



  export type test1SelectScalar = {
    id?: boolean
    user_id?: boolean
    displayname?: boolean
    profile_image_url?: boolean
    followed_at?: boolean
  }

  export type test1Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "displayname" | "profile_image_url" | "followed_at", ExtArgs["result"]["test1"]>

  export type $test1Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test1"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      displayname: string
      profile_image_url: string | null
      followed_at: Date
    }, ExtArgs["result"]["test1"]>
    composites: {}
  }

  type test1GetPayload<S extends boolean | null | undefined | test1DefaultArgs> = $Result.GetResult<Prisma.$test1Payload, S>

  type test1CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<test1FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test1CountAggregateInputType | true
    }

  export interface test1Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test1'], meta: { name: 'test1' } }
    /**
     * Find zero or one Test1 that matches the filter.
     * @param {test1FindUniqueArgs} args - Arguments to find a Test1
     * @example
     * // Get one Test1
     * const test1 = await prisma.test1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends test1FindUniqueArgs>(args: SelectSubset<T, test1FindUniqueArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test1 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {test1FindUniqueOrThrowArgs} args - Arguments to find a Test1
     * @example
     * // Get one Test1
     * const test1 = await prisma.test1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends test1FindUniqueOrThrowArgs>(args: SelectSubset<T, test1FindUniqueOrThrowArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test1FindFirstArgs} args - Arguments to find a Test1
     * @example
     * // Get one Test1
     * const test1 = await prisma.test1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends test1FindFirstArgs>(args?: SelectSubset<T, test1FindFirstArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test1 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test1FindFirstOrThrowArgs} args - Arguments to find a Test1
     * @example
     * // Get one Test1
     * const test1 = await prisma.test1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends test1FindFirstOrThrowArgs>(args?: SelectSubset<T, test1FindFirstOrThrowArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test1FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test1s
     * const test1s = await prisma.test1.findMany()
     * 
     * // Get first 10 Test1s
     * const test1s = await prisma.test1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test1WithIdOnly = await prisma.test1.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends test1FindManyArgs>(args?: SelectSubset<T, test1FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test1.
     * @param {test1CreateArgs} args - Arguments to create a Test1.
     * @example
     * // Create one Test1
     * const Test1 = await prisma.test1.create({
     *   data: {
     *     // ... data to create a Test1
     *   }
     * })
     * 
     */
    create<T extends test1CreateArgs>(args: SelectSubset<T, test1CreateArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test1s.
     * @param {test1CreateManyArgs} args - Arguments to create many Test1s.
     * @example
     * // Create many Test1s
     * const test1 = await prisma.test1.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends test1CreateManyArgs>(args?: SelectSubset<T, test1CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test1.
     * @param {test1DeleteArgs} args - Arguments to delete one Test1.
     * @example
     * // Delete one Test1
     * const Test1 = await prisma.test1.delete({
     *   where: {
     *     // ... filter to delete one Test1
     *   }
     * })
     * 
     */
    delete<T extends test1DeleteArgs>(args: SelectSubset<T, test1DeleteArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test1.
     * @param {test1UpdateArgs} args - Arguments to update one Test1.
     * @example
     * // Update one Test1
     * const test1 = await prisma.test1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends test1UpdateArgs>(args: SelectSubset<T, test1UpdateArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test1s.
     * @param {test1DeleteManyArgs} args - Arguments to filter Test1s to delete.
     * @example
     * // Delete a few Test1s
     * const { count } = await prisma.test1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends test1DeleteManyArgs>(args?: SelectSubset<T, test1DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test1s
     * const test1 = await prisma.test1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends test1UpdateManyArgs>(args: SelectSubset<T, test1UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test1.
     * @param {test1UpsertArgs} args - Arguments to update or create a Test1.
     * @example
     * // Update or create a Test1
     * const test1 = await prisma.test1.upsert({
     *   create: {
     *     // ... data to create a Test1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test1 we want to update
     *   }
     * })
     */
    upsert<T extends test1UpsertArgs>(args: SelectSubset<T, test1UpsertArgs<ExtArgs>>): Prisma__test1Client<$Result.GetResult<Prisma.$test1Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test1CountArgs} args - Arguments to filter Test1s to count.
     * @example
     * // Count the number of Test1s
     * const count = await prisma.test1.count({
     *   where: {
     *     // ... the filter for the Test1s we want to count
     *   }
     * })
    **/
    count<T extends test1CountArgs>(
      args?: Subset<T, test1CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test1AggregateArgs>(args: Subset<T, Test1AggregateArgs>): Prisma.PrismaPromise<GetTest1AggregateType<T>>

    /**
     * Group by Test1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test1GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends test1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test1GroupByArgs['orderBy'] }
        : { orderBy?: test1GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, test1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test1 model
   */
  readonly fields: test1FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test1Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the test1 model
   */
  interface test1FieldRefs {
    readonly id: FieldRef<"test1", 'Int'>
    readonly user_id: FieldRef<"test1", 'String'>
    readonly displayname: FieldRef<"test1", 'String'>
    readonly profile_image_url: FieldRef<"test1", 'String'>
    readonly followed_at: FieldRef<"test1", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * test1 findUnique
   */
  export type test1FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * Filter, which test1 to fetch.
     */
    where: test1WhereUniqueInput
  }

  /**
   * test1 findUniqueOrThrow
   */
  export type test1FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * Filter, which test1 to fetch.
     */
    where: test1WhereUniqueInput
  }

  /**
   * test1 findFirst
   */
  export type test1FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * Filter, which test1 to fetch.
     */
    where?: test1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test1s to fetch.
     */
    orderBy?: test1OrderByWithRelationInput | test1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test1s.
     */
    cursor?: test1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test1s.
     */
    distinct?: Test1ScalarFieldEnum | Test1ScalarFieldEnum[]
  }

  /**
   * test1 findFirstOrThrow
   */
  export type test1FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * Filter, which test1 to fetch.
     */
    where?: test1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test1s to fetch.
     */
    orderBy?: test1OrderByWithRelationInput | test1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test1s.
     */
    cursor?: test1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test1s.
     */
    distinct?: Test1ScalarFieldEnum | Test1ScalarFieldEnum[]
  }

  /**
   * test1 findMany
   */
  export type test1FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * Filter, which test1s to fetch.
     */
    where?: test1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test1s to fetch.
     */
    orderBy?: test1OrderByWithRelationInput | test1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test1s.
     */
    cursor?: test1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test1s.
     */
    skip?: number
    distinct?: Test1ScalarFieldEnum | Test1ScalarFieldEnum[]
  }

  /**
   * test1 create
   */
  export type test1CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * The data needed to create a test1.
     */
    data: XOR<test1CreateInput, test1UncheckedCreateInput>
  }

  /**
   * test1 createMany
   */
  export type test1CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test1s.
     */
    data: test1CreateManyInput | test1CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test1 update
   */
  export type test1UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * The data needed to update a test1.
     */
    data: XOR<test1UpdateInput, test1UncheckedUpdateInput>
    /**
     * Choose, which test1 to update.
     */
    where: test1WhereUniqueInput
  }

  /**
   * test1 updateMany
   */
  export type test1UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test1s.
     */
    data: XOR<test1UpdateManyMutationInput, test1UncheckedUpdateManyInput>
    /**
     * Filter which test1s to update
     */
    where?: test1WhereInput
    /**
     * Limit how many test1s to update.
     */
    limit?: number
  }

  /**
   * test1 upsert
   */
  export type test1UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * The filter to search for the test1 to update in case it exists.
     */
    where: test1WhereUniqueInput
    /**
     * In case the test1 found by the `where` argument doesn't exist, create a new test1 with this data.
     */
    create: XOR<test1CreateInput, test1UncheckedCreateInput>
    /**
     * In case the test1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test1UpdateInput, test1UncheckedUpdateInput>
  }

  /**
   * test1 delete
   */
  export type test1DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
    /**
     * Filter which test1 to delete.
     */
    where: test1WhereUniqueInput
  }

  /**
   * test1 deleteMany
   */
  export type test1DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test1s to delete
     */
    where?: test1WhereInput
    /**
     * Limit how many test1s to delete.
     */
    limit?: number
  }

  /**
   * test1 without action
   */
  export type test1DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test1
     */
    select?: test1Select<ExtArgs> | null
    /**
     * Omit specific fields from the test1
     */
    omit?: test1Omit<ExtArgs> | null
  }


  /**
   * Model test2
   */

  export type AggregateTest2 = {
    _count: Test2CountAggregateOutputType | null
    _avg: Test2AvgAggregateOutputType | null
    _sum: Test2SumAggregateOutputType | null
    _min: Test2MinAggregateOutputType | null
    _max: Test2MaxAggregateOutputType | null
  }

  export type Test2AvgAggregateOutputType = {
    id: number | null
  }

  export type Test2SumAggregateOutputType = {
    id: number | null
  }

  export type Test2MinAggregateOutputType = {
    id: number | null
    name: string | null
    position: string | null
  }

  export type Test2MaxAggregateOutputType = {
    id: number | null
    name: string | null
    position: string | null
  }

  export type Test2CountAggregateOutputType = {
    id: number
    name: number
    position: number
    _all: number
  }


  export type Test2AvgAggregateInputType = {
    id?: true
  }

  export type Test2SumAggregateInputType = {
    id?: true
  }

  export type Test2MinAggregateInputType = {
    id?: true
    name?: true
    position?: true
  }

  export type Test2MaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
  }

  export type Test2CountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    _all?: true
  }

  export type Test2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test2 to aggregate.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test2s
    **/
    _count?: true | Test2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test2MaxAggregateInputType
  }

  export type GetTest2AggregateType<T extends Test2AggregateArgs> = {
        [P in keyof T & keyof AggregateTest2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest2[P]>
      : GetScalarType<T[P], AggregateTest2[P]>
  }




  export type test2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test2WhereInput
    orderBy?: test2OrderByWithAggregationInput | test2OrderByWithAggregationInput[]
    by: Test2ScalarFieldEnum[] | Test2ScalarFieldEnum
    having?: test2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test2CountAggregateInputType | true
    _avg?: Test2AvgAggregateInputType
    _sum?: Test2SumAggregateInputType
    _min?: Test2MinAggregateInputType
    _max?: Test2MaxAggregateInputType
  }

  export type Test2GroupByOutputType = {
    id: number
    name: string
    position: string
    _count: Test2CountAggregateOutputType | null
    _avg: Test2AvgAggregateOutputType | null
    _sum: Test2SumAggregateOutputType | null
    _min: Test2MinAggregateOutputType | null
    _max: Test2MaxAggregateOutputType | null
  }

  type GetTest2GroupByPayload<T extends test2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test2GroupByOutputType[P]>
            : GetScalarType<T[P], Test2GroupByOutputType[P]>
        }
      >
    >


  export type test2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
  }, ExtArgs["result"]["test2"]>



  export type test2SelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
  }

  export type test2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position", ExtArgs["result"]["test2"]>

  export type $test2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      position: string
    }, ExtArgs["result"]["test2"]>
    composites: {}
  }

  type test2GetPayload<S extends boolean | null | undefined | test2DefaultArgs> = $Result.GetResult<Prisma.$test2Payload, S>

  type test2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<test2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test2CountAggregateInputType | true
    }

  export interface test2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test2'], meta: { name: 'test2' } }
    /**
     * Find zero or one Test2 that matches the filter.
     * @param {test2FindUniqueArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends test2FindUniqueArgs>(args: SelectSubset<T, test2FindUniqueArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {test2FindUniqueOrThrowArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends test2FindUniqueOrThrowArgs>(args: SelectSubset<T, test2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2FindFirstArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends test2FindFirstArgs>(args?: SelectSubset<T, test2FindFirstArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2FindFirstOrThrowArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends test2FindFirstOrThrowArgs>(args?: SelectSubset<T, test2FindFirstOrThrowArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test2s
     * const test2s = await prisma.test2.findMany()
     * 
     * // Get first 10 Test2s
     * const test2s = await prisma.test2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test2WithIdOnly = await prisma.test2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends test2FindManyArgs>(args?: SelectSubset<T, test2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test2.
     * @param {test2CreateArgs} args - Arguments to create a Test2.
     * @example
     * // Create one Test2
     * const Test2 = await prisma.test2.create({
     *   data: {
     *     // ... data to create a Test2
     *   }
     * })
     * 
     */
    create<T extends test2CreateArgs>(args: SelectSubset<T, test2CreateArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test2s.
     * @param {test2CreateManyArgs} args - Arguments to create many Test2s.
     * @example
     * // Create many Test2s
     * const test2 = await prisma.test2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends test2CreateManyArgs>(args?: SelectSubset<T, test2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test2.
     * @param {test2DeleteArgs} args - Arguments to delete one Test2.
     * @example
     * // Delete one Test2
     * const Test2 = await prisma.test2.delete({
     *   where: {
     *     // ... filter to delete one Test2
     *   }
     * })
     * 
     */
    delete<T extends test2DeleteArgs>(args: SelectSubset<T, test2DeleteArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test2.
     * @param {test2UpdateArgs} args - Arguments to update one Test2.
     * @example
     * // Update one Test2
     * const test2 = await prisma.test2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends test2UpdateArgs>(args: SelectSubset<T, test2UpdateArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test2s.
     * @param {test2DeleteManyArgs} args - Arguments to filter Test2s to delete.
     * @example
     * // Delete a few Test2s
     * const { count } = await prisma.test2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends test2DeleteManyArgs>(args?: SelectSubset<T, test2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test2s
     * const test2 = await prisma.test2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends test2UpdateManyArgs>(args: SelectSubset<T, test2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test2.
     * @param {test2UpsertArgs} args - Arguments to update or create a Test2.
     * @example
     * // Update or create a Test2
     * const test2 = await prisma.test2.upsert({
     *   create: {
     *     // ... data to create a Test2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test2 we want to update
     *   }
     * })
     */
    upsert<T extends test2UpsertArgs>(args: SelectSubset<T, test2UpsertArgs<ExtArgs>>): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2CountArgs} args - Arguments to filter Test2s to count.
     * @example
     * // Count the number of Test2s
     * const count = await prisma.test2.count({
     *   where: {
     *     // ... the filter for the Test2s we want to count
     *   }
     * })
    **/
    count<T extends test2CountArgs>(
      args?: Subset<T, test2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test2AggregateArgs>(args: Subset<T, Test2AggregateArgs>): Prisma.PrismaPromise<GetTest2AggregateType<T>>

    /**
     * Group by Test2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends test2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test2GroupByArgs['orderBy'] }
        : { orderBy?: test2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, test2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test2 model
   */
  readonly fields: test2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the test2 model
   */
  interface test2FieldRefs {
    readonly id: FieldRef<"test2", 'Int'>
    readonly name: FieldRef<"test2", 'String'>
    readonly position: FieldRef<"test2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * test2 findUnique
   */
  export type test2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 findUniqueOrThrow
   */
  export type test2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 findFirst
   */
  export type test2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test2s.
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test2s.
     */
    distinct?: Test2ScalarFieldEnum | Test2ScalarFieldEnum[]
  }

  /**
   * test2 findFirstOrThrow
   */
  export type test2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test2s.
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test2s.
     */
    distinct?: Test2ScalarFieldEnum | Test2ScalarFieldEnum[]
  }

  /**
   * test2 findMany
   */
  export type test2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * Filter, which test2s to fetch.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test2s.
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    distinct?: Test2ScalarFieldEnum | Test2ScalarFieldEnum[]
  }

  /**
   * test2 create
   */
  export type test2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * The data needed to create a test2.
     */
    data: XOR<test2CreateInput, test2UncheckedCreateInput>
  }

  /**
   * test2 createMany
   */
  export type test2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test2s.
     */
    data: test2CreateManyInput | test2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test2 update
   */
  export type test2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * The data needed to update a test2.
     */
    data: XOR<test2UpdateInput, test2UncheckedUpdateInput>
    /**
     * Choose, which test2 to update.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 updateMany
   */
  export type test2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test2s.
     */
    data: XOR<test2UpdateManyMutationInput, test2UncheckedUpdateManyInput>
    /**
     * Filter which test2s to update
     */
    where?: test2WhereInput
    /**
     * Limit how many test2s to update.
     */
    limit?: number
  }

  /**
   * test2 upsert
   */
  export type test2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * The filter to search for the test2 to update in case it exists.
     */
    where: test2WhereUniqueInput
    /**
     * In case the test2 found by the `where` argument doesn't exist, create a new test2 with this data.
     */
    create: XOR<test2CreateInput, test2UncheckedCreateInput>
    /**
     * In case the test2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test2UpdateInput, test2UncheckedUpdateInput>
  }

  /**
   * test2 delete
   */
  export type test2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
    /**
     * Filter which test2 to delete.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 deleteMany
   */
  export type test2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test2s to delete
     */
    where?: test2WhereInput
    /**
     * Limit how many test2s to delete.
     */
    limit?: number
  }

  /**
   * test2 without action
   */
  export type test2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Omit specific fields from the test2
     */
    omit?: test2Omit<ExtArgs> | null
  }


  /**
   * Model userLogin
   */

  export type AggregateUserLogin = {
    _count: UserLoginCountAggregateOutputType | null
    _avg: UserLoginAvgAggregateOutputType | null
    _sum: UserLoginSumAggregateOutputType | null
    _min: UserLoginMinAggregateOutputType | null
    _max: UserLoginMaxAggregateOutputType | null
  }

  export type UserLoginAvgAggregateOutputType = {
    id: number | null
    enabled: number | null
  }

  export type UserLoginSumAggregateOutputType = {
    id: number | null
    enabled: number | null
  }

  export type UserLoginMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    enabled: number | null
  }

  export type UserLoginMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    enabled: number | null
  }

  export type UserLoginCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    enabled: number
    _all: number
  }


  export type UserLoginAvgAggregateInputType = {
    id?: true
    enabled?: true
  }

  export type UserLoginSumAggregateInputType = {
    id?: true
    enabled?: true
  }

  export type UserLoginMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    enabled?: true
  }

  export type UserLoginMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    enabled?: true
  }

  export type UserLoginCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    enabled?: true
    _all?: true
  }

  export type UserLoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userLogin to aggregate.
     */
    where?: userLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userLogins to fetch.
     */
    orderBy?: userLoginOrderByWithRelationInput | userLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userLogins
    **/
    _count?: true | UserLoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLoginMaxAggregateInputType
  }

  export type GetUserLoginAggregateType<T extends UserLoginAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLogin[P]>
      : GetScalarType<T[P], AggregateUserLogin[P]>
  }




  export type userLoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userLoginWhereInput
    orderBy?: userLoginOrderByWithAggregationInput | userLoginOrderByWithAggregationInput[]
    by: UserLoginScalarFieldEnum[] | UserLoginScalarFieldEnum
    having?: userLoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLoginCountAggregateInputType | true
    _avg?: UserLoginAvgAggregateInputType
    _sum?: UserLoginSumAggregateInputType
    _min?: UserLoginMinAggregateInputType
    _max?: UserLoginMaxAggregateInputType
  }

  export type UserLoginGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
    enabled: number
    _count: UserLoginCountAggregateOutputType | null
    _avg: UserLoginAvgAggregateOutputType | null
    _sum: UserLoginSumAggregateOutputType | null
    _min: UserLoginMinAggregateOutputType | null
    _max: UserLoginMaxAggregateOutputType | null
  }

  type GetUserLoginGroupByPayload<T extends userLoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLoginGroupByOutputType[P]>
            : GetScalarType<T[P], UserLoginGroupByOutputType[P]>
        }
      >
    >


  export type userLoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["userLogin"]>



  export type userLoginSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    enabled?: boolean
  }

  export type userLoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "enabled", ExtArgs["result"]["userLogin"]>

  export type $userLoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userLogin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string
      lastName: string
      role: string
      enabled: number
    }, ExtArgs["result"]["userLogin"]>
    composites: {}
  }

  type userLoginGetPayload<S extends boolean | null | undefined | userLoginDefaultArgs> = $Result.GetResult<Prisma.$userLoginPayload, S>

  type userLoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userLoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLoginCountAggregateInputType | true
    }

  export interface userLoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userLogin'], meta: { name: 'userLogin' } }
    /**
     * Find zero or one UserLogin that matches the filter.
     * @param {userLoginFindUniqueArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userLoginFindUniqueArgs>(args: SelectSubset<T, userLoginFindUniqueArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLogin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userLoginFindUniqueOrThrowArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userLoginFindUniqueOrThrowArgs>(args: SelectSubset<T, userLoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLogin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userLoginFindFirstArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userLoginFindFirstArgs>(args?: SelectSubset<T, userLoginFindFirstArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLogin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userLoginFindFirstOrThrowArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userLoginFindFirstOrThrowArgs>(args?: SelectSubset<T, userLoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userLoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogins
     * const userLogins = await prisma.userLogin.findMany()
     * 
     * // Get first 10 UserLogins
     * const userLogins = await prisma.userLogin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLoginWithIdOnly = await prisma.userLogin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userLoginFindManyArgs>(args?: SelectSubset<T, userLoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLogin.
     * @param {userLoginCreateArgs} args - Arguments to create a UserLogin.
     * @example
     * // Create one UserLogin
     * const UserLogin = await prisma.userLogin.create({
     *   data: {
     *     // ... data to create a UserLogin
     *   }
     * })
     * 
     */
    create<T extends userLoginCreateArgs>(args: SelectSubset<T, userLoginCreateArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLogins.
     * @param {userLoginCreateManyArgs} args - Arguments to create many UserLogins.
     * @example
     * // Create many UserLogins
     * const userLogin = await prisma.userLogin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userLoginCreateManyArgs>(args?: SelectSubset<T, userLoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLogin.
     * @param {userLoginDeleteArgs} args - Arguments to delete one UserLogin.
     * @example
     * // Delete one UserLogin
     * const UserLogin = await prisma.userLogin.delete({
     *   where: {
     *     // ... filter to delete one UserLogin
     *   }
     * })
     * 
     */
    delete<T extends userLoginDeleteArgs>(args: SelectSubset<T, userLoginDeleteArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLogin.
     * @param {userLoginUpdateArgs} args - Arguments to update one UserLogin.
     * @example
     * // Update one UserLogin
     * const userLogin = await prisma.userLogin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userLoginUpdateArgs>(args: SelectSubset<T, userLoginUpdateArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLogins.
     * @param {userLoginDeleteManyArgs} args - Arguments to filter UserLogins to delete.
     * @example
     * // Delete a few UserLogins
     * const { count } = await prisma.userLogin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userLoginDeleteManyArgs>(args?: SelectSubset<T, userLoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userLoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogins
     * const userLogin = await prisma.userLogin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userLoginUpdateManyArgs>(args: SelectSubset<T, userLoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLogin.
     * @param {userLoginUpsertArgs} args - Arguments to update or create a UserLogin.
     * @example
     * // Update or create a UserLogin
     * const userLogin = await prisma.userLogin.upsert({
     *   create: {
     *     // ... data to create a UserLogin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLogin we want to update
     *   }
     * })
     */
    upsert<T extends userLoginUpsertArgs>(args: SelectSubset<T, userLoginUpsertArgs<ExtArgs>>): Prisma__userLoginClient<$Result.GetResult<Prisma.$userLoginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userLoginCountArgs} args - Arguments to filter UserLogins to count.
     * @example
     * // Count the number of UserLogins
     * const count = await prisma.userLogin.count({
     *   where: {
     *     // ... the filter for the UserLogins we want to count
     *   }
     * })
    **/
    count<T extends userLoginCountArgs>(
      args?: Subset<T, userLoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLoginAggregateArgs>(args: Subset<T, UserLoginAggregateArgs>): Prisma.PrismaPromise<GetUserLoginAggregateType<T>>

    /**
     * Group by UserLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userLoginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userLoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userLoginGroupByArgs['orderBy'] }
        : { orderBy?: userLoginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userLoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userLogin model
   */
  readonly fields: userLoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userLogin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userLoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userLogin model
   */
  interface userLoginFieldRefs {
    readonly id: FieldRef<"userLogin", 'Int'>
    readonly email: FieldRef<"userLogin", 'String'>
    readonly password: FieldRef<"userLogin", 'String'>
    readonly firstName: FieldRef<"userLogin", 'String'>
    readonly lastName: FieldRef<"userLogin", 'String'>
    readonly role: FieldRef<"userLogin", 'String'>
    readonly enabled: FieldRef<"userLogin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * userLogin findUnique
   */
  export type userLoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * Filter, which userLogin to fetch.
     */
    where: userLoginWhereUniqueInput
  }

  /**
   * userLogin findUniqueOrThrow
   */
  export type userLoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * Filter, which userLogin to fetch.
     */
    where: userLoginWhereUniqueInput
  }

  /**
   * userLogin findFirst
   */
  export type userLoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * Filter, which userLogin to fetch.
     */
    where?: userLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userLogins to fetch.
     */
    orderBy?: userLoginOrderByWithRelationInput | userLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userLogins.
     */
    cursor?: userLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userLogins.
     */
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }

  /**
   * userLogin findFirstOrThrow
   */
  export type userLoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * Filter, which userLogin to fetch.
     */
    where?: userLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userLogins to fetch.
     */
    orderBy?: userLoginOrderByWithRelationInput | userLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userLogins.
     */
    cursor?: userLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userLogins.
     */
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }

  /**
   * userLogin findMany
   */
  export type userLoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * Filter, which userLogins to fetch.
     */
    where?: userLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userLogins to fetch.
     */
    orderBy?: userLoginOrderByWithRelationInput | userLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userLogins.
     */
    cursor?: userLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userLogins.
     */
    skip?: number
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }

  /**
   * userLogin create
   */
  export type userLoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * The data needed to create a userLogin.
     */
    data: XOR<userLoginCreateInput, userLoginUncheckedCreateInput>
  }

  /**
   * userLogin createMany
   */
  export type userLoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userLogins.
     */
    data: userLoginCreateManyInput | userLoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userLogin update
   */
  export type userLoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * The data needed to update a userLogin.
     */
    data: XOR<userLoginUpdateInput, userLoginUncheckedUpdateInput>
    /**
     * Choose, which userLogin to update.
     */
    where: userLoginWhereUniqueInput
  }

  /**
   * userLogin updateMany
   */
  export type userLoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userLogins.
     */
    data: XOR<userLoginUpdateManyMutationInput, userLoginUncheckedUpdateManyInput>
    /**
     * Filter which userLogins to update
     */
    where?: userLoginWhereInput
    /**
     * Limit how many userLogins to update.
     */
    limit?: number
  }

  /**
   * userLogin upsert
   */
  export type userLoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * The filter to search for the userLogin to update in case it exists.
     */
    where: userLoginWhereUniqueInput
    /**
     * In case the userLogin found by the `where` argument doesn't exist, create a new userLogin with this data.
     */
    create: XOR<userLoginCreateInput, userLoginUncheckedCreateInput>
    /**
     * In case the userLogin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userLoginUpdateInput, userLoginUncheckedUpdateInput>
  }

  /**
   * userLogin delete
   */
  export type userLoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
    /**
     * Filter which userLogin to delete.
     */
    where: userLoginWhereUniqueInput
  }

  /**
   * userLogin deleteMany
   */
  export type userLoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userLogins to delete
     */
    where?: userLoginWhereInput
    /**
     * Limit how many userLogins to delete.
     */
    limit?: number
  }

  /**
   * userLogin without action
   */
  export type userLoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userLogin
     */
    select?: userLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userLogin
     */
    omit?: userLoginOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.User_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.User_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role: $Enums.User_role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: $Enums.User_role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'User_role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentScalarFieldEnum: {
    student_id: 'student_id',
    class_level: 'class_level',
    class_room: 'class_room',
    student_number: 'student_number',
    code_citizen: 'code_citizen',
    gender: 'gender',
    prefix_name: 'prefix_name',
    first_name: 'first_name',
    last_name: 'last_name',
    birth_date: 'birth_date',
    age_years: 'age_years',
    religion: 'religion',
    ethnicity: 'ethnicity',
    guardian_first_name: 'guardian_first_name',
    guardian_last_name: 'guardian_last_name',
    guardian_relation: 'guardian_relation',
    father_first_name: 'father_first_name',
    father_last_name: 'father_last_name',
    mother_first_name: 'mother_first_name',
    mother_last_name: 'mother_last_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    nationality: 'nationality',
    status: 'status',
    note: 'note'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const Student_2ScalarFieldEnum: {
    student_id: 'student_id',
    class_level: 'class_level',
    class_room: 'class_room',
    student_number: 'student_number',
    code_citizen: 'code_citizen',
    gender: 'gender',
    prefix_name: 'prefix_name',
    first_name: 'first_name',
    last_name: 'last_name',
    birth_date: 'birth_date',
    age_years: 'age_years',
    religion: 'religion',
    ethnicity: 'ethnicity',
    guardian_first_name: 'guardian_first_name',
    guardian_last_name: 'guardian_last_name',
    guardian_relation: 'guardian_relation',
    father_first_name: 'father_first_name',
    father_last_name: 'father_last_name',
    mother_first_name: 'mother_first_name',
    mother_last_name: 'mother_last_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    nationality: 'nationality',
    status: 'status',
    note: 'note'
  };

  export type Student_2ScalarFieldEnum = (typeof Student_2ScalarFieldEnum)[keyof typeof Student_2ScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    submission_id: 'submission_id',
    docname: 'docname',
    title: 'title',
    note: 'note',
    created_at: 'created_at'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const SubmissionsScalarFieldEnum: {
    id: 'id',
    teacher_name: 'teacher_name',
    date_accept: 'date_accept',
    time_accept: 'time_accept',
    receiver: 'receiver',
    created_at: 'created_at'
  };

  export type SubmissionsScalarFieldEnum = (typeof SubmissionsScalarFieldEnum)[keyof typeof SubmissionsScalarFieldEnum]


  export const Test1ScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    displayname: 'displayname',
    profile_image_url: 'profile_image_url',
    followed_at: 'followed_at'
  };

  export type Test1ScalarFieldEnum = (typeof Test1ScalarFieldEnum)[keyof typeof Test1ScalarFieldEnum]


  export const Test2ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position'
  };

  export type Test2ScalarFieldEnum = (typeof Test2ScalarFieldEnum)[keyof typeof Test2ScalarFieldEnum]


  export const UserLoginScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    enabled: 'enabled'
  };

  export type UserLoginScalarFieldEnum = (typeof UserLoginScalarFieldEnum)[keyof typeof UserLoginScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const StudentOrderByRelevanceFieldEnum: {
    class_level: 'class_level',
    class_room: 'class_room',
    student_number: 'student_number',
    code_citizen: 'code_citizen',
    gender: 'gender',
    prefix_name: 'prefix_name',
    first_name: 'first_name',
    last_name: 'last_name',
    religion: 'religion',
    ethnicity: 'ethnicity',
    guardian_first_name: 'guardian_first_name',
    guardian_last_name: 'guardian_last_name',
    guardian_relation: 'guardian_relation',
    father_first_name: 'father_first_name',
    father_last_name: 'father_last_name',
    mother_first_name: 'mother_first_name',
    mother_last_name: 'mother_last_name',
    nationality: 'nationality',
    status: 'status',
    note: 'note'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const Student_2OrderByRelevanceFieldEnum: {
    class_level: 'class_level',
    class_room: 'class_room',
    student_number: 'student_number',
    code_citizen: 'code_citizen',
    gender: 'gender',
    prefix_name: 'prefix_name',
    first_name: 'first_name',
    last_name: 'last_name',
    religion: 'religion',
    ethnicity: 'ethnicity',
    guardian_first_name: 'guardian_first_name',
    guardian_last_name: 'guardian_last_name',
    guardian_relation: 'guardian_relation',
    father_first_name: 'father_first_name',
    father_last_name: 'father_last_name',
    mother_first_name: 'mother_first_name',
    mother_last_name: 'mother_last_name',
    nationality: 'nationality',
    status: 'status',
    note: 'note'
  };

  export type Student_2OrderByRelevanceFieldEnum = (typeof Student_2OrderByRelevanceFieldEnum)[keyof typeof Student_2OrderByRelevanceFieldEnum]


  export const documentsOrderByRelevanceFieldEnum: {
    docname: 'docname',
    title: 'title',
    note: 'note'
  };

  export type documentsOrderByRelevanceFieldEnum = (typeof documentsOrderByRelevanceFieldEnum)[keyof typeof documentsOrderByRelevanceFieldEnum]


  export const submissionsOrderByRelevanceFieldEnum: {
    teacher_name: 'teacher_name',
    receiver: 'receiver'
  };

  export type submissionsOrderByRelevanceFieldEnum = (typeof submissionsOrderByRelevanceFieldEnum)[keyof typeof submissionsOrderByRelevanceFieldEnum]


  export const test1OrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    displayname: 'displayname',
    profile_image_url: 'profile_image_url'
  };

  export type test1OrderByRelevanceFieldEnum = (typeof test1OrderByRelevanceFieldEnum)[keyof typeof test1OrderByRelevanceFieldEnum]


  export const test2OrderByRelevanceFieldEnum: {
    name: 'name',
    position: 'position'
  };

  export type test2OrderByRelevanceFieldEnum = (typeof test2OrderByRelevanceFieldEnum)[keyof typeof test2OrderByRelevanceFieldEnum]


  export const userLoginOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role'
  };

  export type userLoginOrderByRelevanceFieldEnum = (typeof userLoginOrderByRelevanceFieldEnum)[keyof typeof userLoginOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'User_role'
   */
  export type EnumUser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    student_id?: IntFilter<"Student"> | number
    class_level?: StringFilter<"Student"> | string
    class_room?: StringFilter<"Student"> | string
    student_number?: StringFilter<"Student"> | string
    code_citizen?: StringNullableFilter<"Student"> | string | null
    gender?: StringFilter<"Student"> | string
    prefix_name?: StringNullableFilter<"Student"> | string | null
    first_name?: StringFilter<"Student"> | string
    last_name?: StringFilter<"Student"> | string
    birth_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    age_years?: IntNullableFilter<"Student"> | number | null
    religion?: StringNullableFilter<"Student"> | string | null
    ethnicity?: StringNullableFilter<"Student"> | string | null
    guardian_first_name?: StringNullableFilter<"Student"> | string | null
    guardian_last_name?: StringNullableFilter<"Student"> | string | null
    guardian_relation?: StringNullableFilter<"Student"> | string | null
    father_first_name?: StringNullableFilter<"Student"> | string | null
    father_last_name?: StringNullableFilter<"Student"> | string | null
    mother_first_name?: StringNullableFilter<"Student"> | string | null
    mother_last_name?: StringNullableFilter<"Student"> | string | null
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    nationality?: StringNullableFilter<"Student"> | string | null
    status?: StringFilter<"Student"> | string
    note?: StringNullableFilter<"Student"> | string | null
  }

  export type StudentOrderByWithRelationInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrderInput | SortOrder
    gender?: SortOrder
    prefix_name?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    age_years?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    guardian_first_name?: SortOrderInput | SortOrder
    guardian_last_name?: SortOrderInput | SortOrder
    guardian_relation?: SortOrderInput | SortOrder
    father_first_name?: SortOrderInput | SortOrder
    father_last_name?: SortOrderInput | SortOrder
    mother_first_name?: SortOrderInput | SortOrder
    mother_last_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    student_number?: string
    code_citizen?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    class_level?: StringFilter<"Student"> | string
    class_room?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    prefix_name?: StringNullableFilter<"Student"> | string | null
    first_name?: StringFilter<"Student"> | string
    last_name?: StringFilter<"Student"> | string
    birth_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    age_years?: IntNullableFilter<"Student"> | number | null
    religion?: StringNullableFilter<"Student"> | string | null
    ethnicity?: StringNullableFilter<"Student"> | string | null
    guardian_first_name?: StringNullableFilter<"Student"> | string | null
    guardian_last_name?: StringNullableFilter<"Student"> | string | null
    guardian_relation?: StringNullableFilter<"Student"> | string | null
    father_first_name?: StringNullableFilter<"Student"> | string | null
    father_last_name?: StringNullableFilter<"Student"> | string | null
    mother_first_name?: StringNullableFilter<"Student"> | string | null
    mother_last_name?: StringNullableFilter<"Student"> | string | null
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    nationality?: StringNullableFilter<"Student"> | string | null
    status?: StringFilter<"Student"> | string
    note?: StringNullableFilter<"Student"> | string | null
  }, "student_id" | "student_number" | "code_citizen">

  export type StudentOrderByWithAggregationInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrderInput | SortOrder
    gender?: SortOrder
    prefix_name?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    age_years?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    guardian_first_name?: SortOrderInput | SortOrder
    guardian_last_name?: SortOrderInput | SortOrder
    guardian_relation?: SortOrderInput | SortOrder
    father_first_name?: SortOrderInput | SortOrder
    father_last_name?: SortOrderInput | SortOrder
    mother_first_name?: SortOrderInput | SortOrder
    mother_last_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"Student"> | number
    class_level?: StringWithAggregatesFilter<"Student"> | string
    class_room?: StringWithAggregatesFilter<"Student"> | string
    student_number?: StringWithAggregatesFilter<"Student"> | string
    code_citizen?: StringNullableWithAggregatesFilter<"Student"> | string | null
    gender?: StringWithAggregatesFilter<"Student"> | string
    prefix_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    first_name?: StringWithAggregatesFilter<"Student"> | string
    last_name?: StringWithAggregatesFilter<"Student"> | string
    birth_date?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    age_years?: IntNullableWithAggregatesFilter<"Student"> | number | null
    religion?: StringNullableWithAggregatesFilter<"Student"> | string | null
    ethnicity?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardian_first_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardian_last_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardian_relation?: StringNullableWithAggregatesFilter<"Student"> | string | null
    father_first_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    father_last_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    mother_first_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    mother_last_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    nationality?: StringNullableWithAggregatesFilter<"Student"> | string | null
    status?: StringWithAggregatesFilter<"Student"> | string
    note?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type Student_2WhereInput = {
    AND?: Student_2WhereInput | Student_2WhereInput[]
    OR?: Student_2WhereInput[]
    NOT?: Student_2WhereInput | Student_2WhereInput[]
    student_id?: IntFilter<"Student_2"> | number
    class_level?: StringFilter<"Student_2"> | string
    class_room?: StringFilter<"Student_2"> | string
    student_number?: StringFilter<"Student_2"> | string
    code_citizen?: StringNullableFilter<"Student_2"> | string | null
    gender?: StringFilter<"Student_2"> | string
    prefix_name?: StringNullableFilter<"Student_2"> | string | null
    first_name?: StringFilter<"Student_2"> | string
    last_name?: StringFilter<"Student_2"> | string
    birth_date?: DateTimeNullableFilter<"Student_2"> | Date | string | null
    age_years?: IntNullableFilter<"Student_2"> | number | null
    religion?: StringNullableFilter<"Student_2"> | string | null
    ethnicity?: StringNullableFilter<"Student_2"> | string | null
    guardian_first_name?: StringNullableFilter<"Student_2"> | string | null
    guardian_last_name?: StringNullableFilter<"Student_2"> | string | null
    guardian_relation?: StringNullableFilter<"Student_2"> | string | null
    father_first_name?: StringNullableFilter<"Student_2"> | string | null
    father_last_name?: StringNullableFilter<"Student_2"> | string | null
    mother_first_name?: StringNullableFilter<"Student_2"> | string | null
    mother_last_name?: StringNullableFilter<"Student_2"> | string | null
    created_at?: DateTimeFilter<"Student_2"> | Date | string
    updated_at?: DateTimeFilter<"Student_2"> | Date | string
    nationality?: StringNullableFilter<"Student_2"> | string | null
    status?: StringFilter<"Student_2"> | string
    note?: StringNullableFilter<"Student_2"> | string | null
  }

  export type Student_2OrderByWithRelationInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrderInput | SortOrder
    gender?: SortOrder
    prefix_name?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    age_years?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    guardian_first_name?: SortOrderInput | SortOrder
    guardian_last_name?: SortOrderInput | SortOrder
    guardian_relation?: SortOrderInput | SortOrder
    father_first_name?: SortOrderInput | SortOrder
    father_last_name?: SortOrderInput | SortOrder
    mother_first_name?: SortOrderInput | SortOrder
    mother_last_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    _relevance?: Student_2OrderByRelevanceInput
  }

  export type Student_2WhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    student_number?: string
    code_citizen?: string
    AND?: Student_2WhereInput | Student_2WhereInput[]
    OR?: Student_2WhereInput[]
    NOT?: Student_2WhereInput | Student_2WhereInput[]
    class_level?: StringFilter<"Student_2"> | string
    class_room?: StringFilter<"Student_2"> | string
    gender?: StringFilter<"Student_2"> | string
    prefix_name?: StringNullableFilter<"Student_2"> | string | null
    first_name?: StringFilter<"Student_2"> | string
    last_name?: StringFilter<"Student_2"> | string
    birth_date?: DateTimeNullableFilter<"Student_2"> | Date | string | null
    age_years?: IntNullableFilter<"Student_2"> | number | null
    religion?: StringNullableFilter<"Student_2"> | string | null
    ethnicity?: StringNullableFilter<"Student_2"> | string | null
    guardian_first_name?: StringNullableFilter<"Student_2"> | string | null
    guardian_last_name?: StringNullableFilter<"Student_2"> | string | null
    guardian_relation?: StringNullableFilter<"Student_2"> | string | null
    father_first_name?: StringNullableFilter<"Student_2"> | string | null
    father_last_name?: StringNullableFilter<"Student_2"> | string | null
    mother_first_name?: StringNullableFilter<"Student_2"> | string | null
    mother_last_name?: StringNullableFilter<"Student_2"> | string | null
    created_at?: DateTimeFilter<"Student_2"> | Date | string
    updated_at?: DateTimeFilter<"Student_2"> | Date | string
    nationality?: StringNullableFilter<"Student_2"> | string | null
    status?: StringFilter<"Student_2"> | string
    note?: StringNullableFilter<"Student_2"> | string | null
  }, "student_id" | "student_number" | "code_citizen">

  export type Student_2OrderByWithAggregationInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrderInput | SortOrder
    gender?: SortOrder
    prefix_name?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    age_years?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    guardian_first_name?: SortOrderInput | SortOrder
    guardian_last_name?: SortOrderInput | SortOrder
    guardian_relation?: SortOrderInput | SortOrder
    father_first_name?: SortOrderInput | SortOrder
    father_last_name?: SortOrderInput | SortOrder
    mother_first_name?: SortOrderInput | SortOrder
    mother_last_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: Student_2CountOrderByAggregateInput
    _avg?: Student_2AvgOrderByAggregateInput
    _max?: Student_2MaxOrderByAggregateInput
    _min?: Student_2MinOrderByAggregateInput
    _sum?: Student_2SumOrderByAggregateInput
  }

  export type Student_2ScalarWhereWithAggregatesInput = {
    AND?: Student_2ScalarWhereWithAggregatesInput | Student_2ScalarWhereWithAggregatesInput[]
    OR?: Student_2ScalarWhereWithAggregatesInput[]
    NOT?: Student_2ScalarWhereWithAggregatesInput | Student_2ScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"Student_2"> | number
    class_level?: StringWithAggregatesFilter<"Student_2"> | string
    class_room?: StringWithAggregatesFilter<"Student_2"> | string
    student_number?: StringWithAggregatesFilter<"Student_2"> | string
    code_citizen?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    gender?: StringWithAggregatesFilter<"Student_2"> | string
    prefix_name?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    first_name?: StringWithAggregatesFilter<"Student_2"> | string
    last_name?: StringWithAggregatesFilter<"Student_2"> | string
    birth_date?: DateTimeNullableWithAggregatesFilter<"Student_2"> | Date | string | null
    age_years?: IntNullableWithAggregatesFilter<"Student_2"> | number | null
    religion?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    ethnicity?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    guardian_first_name?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    guardian_last_name?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    guardian_relation?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    father_first_name?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    father_last_name?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    mother_first_name?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    mother_last_name?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Student_2"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Student_2"> | Date | string
    nationality?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
    status?: StringWithAggregatesFilter<"Student_2"> | string
    note?: StringNullableWithAggregatesFilter<"Student_2"> | string | null
  }

  export type documentsWhereInput = {
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    id?: IntFilter<"documents"> | number
    submission_id?: IntFilter<"documents"> | number
    docname?: StringFilter<"documents"> | string
    title?: StringFilter<"documents"> | string
    note?: StringNullableFilter<"documents"> | string | null
    created_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    submissions?: XOR<SubmissionsScalarRelationFilter, submissionsWhereInput>
  }

  export type documentsOrderByWithRelationInput = {
    id?: SortOrder
    submission_id?: SortOrder
    docname?: SortOrder
    title?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByWithRelationInput
    _relevance?: documentsOrderByRelevanceInput
  }

  export type documentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    submission_id?: IntFilter<"documents"> | number
    docname?: StringFilter<"documents"> | string
    title?: StringFilter<"documents"> | string
    note?: StringNullableFilter<"documents"> | string | null
    created_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    submissions?: XOR<SubmissionsScalarRelationFilter, submissionsWhereInput>
  }, "id">

  export type documentsOrderByWithAggregationInput = {
    id?: SortOrder
    submission_id?: SortOrder
    docname?: SortOrder
    title?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: documentsCountOrderByAggregateInput
    _avg?: documentsAvgOrderByAggregateInput
    _max?: documentsMaxOrderByAggregateInput
    _min?: documentsMinOrderByAggregateInput
    _sum?: documentsSumOrderByAggregateInput
  }

  export type documentsScalarWhereWithAggregatesInput = {
    AND?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    OR?: documentsScalarWhereWithAggregatesInput[]
    NOT?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"documents"> | number
    submission_id?: IntWithAggregatesFilter<"documents"> | number
    docname?: StringWithAggregatesFilter<"documents"> | string
    title?: StringWithAggregatesFilter<"documents"> | string
    note?: StringNullableWithAggregatesFilter<"documents"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
  }

  export type submissionsWhereInput = {
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    id?: IntFilter<"submissions"> | number
    teacher_name?: StringFilter<"submissions"> | string
    date_accept?: DateTimeFilter<"submissions"> | Date | string
    time_accept?: DateTimeFilter<"submissions"> | Date | string
    receiver?: StringNullableFilter<"submissions"> | string | null
    created_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    documents?: DocumentsListRelationFilter
  }

  export type submissionsOrderByWithRelationInput = {
    id?: SortOrder
    teacher_name?: SortOrder
    date_accept?: SortOrder
    time_accept?: SortOrder
    receiver?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    documents?: documentsOrderByRelationAggregateInput
    _relevance?: submissionsOrderByRelevanceInput
  }

  export type submissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    teacher_name?: StringFilter<"submissions"> | string
    date_accept?: DateTimeFilter<"submissions"> | Date | string
    time_accept?: DateTimeFilter<"submissions"> | Date | string
    receiver?: StringNullableFilter<"submissions"> | string | null
    created_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    documents?: DocumentsListRelationFilter
  }, "id">

  export type submissionsOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_name?: SortOrder
    date_accept?: SortOrder
    time_accept?: SortOrder
    receiver?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: submissionsCountOrderByAggregateInput
    _avg?: submissionsAvgOrderByAggregateInput
    _max?: submissionsMaxOrderByAggregateInput
    _min?: submissionsMinOrderByAggregateInput
    _sum?: submissionsSumOrderByAggregateInput
  }

  export type submissionsScalarWhereWithAggregatesInput = {
    AND?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    OR?: submissionsScalarWhereWithAggregatesInput[]
    NOT?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"submissions"> | number
    teacher_name?: StringWithAggregatesFilter<"submissions"> | string
    date_accept?: DateTimeWithAggregatesFilter<"submissions"> | Date | string
    time_accept?: DateTimeWithAggregatesFilter<"submissions"> | Date | string
    receiver?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
  }

  export type test1WhereInput = {
    AND?: test1WhereInput | test1WhereInput[]
    OR?: test1WhereInput[]
    NOT?: test1WhereInput | test1WhereInput[]
    id?: IntFilter<"test1"> | number
    user_id?: StringFilter<"test1"> | string
    displayname?: StringFilter<"test1"> | string
    profile_image_url?: StringNullableFilter<"test1"> | string | null
    followed_at?: DateTimeFilter<"test1"> | Date | string
  }

  export type test1OrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    displayname?: SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    followed_at?: SortOrder
    _relevance?: test1OrderByRelevanceInput
  }

  export type test1WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    AND?: test1WhereInput | test1WhereInput[]
    OR?: test1WhereInput[]
    NOT?: test1WhereInput | test1WhereInput[]
    displayname?: StringFilter<"test1"> | string
    profile_image_url?: StringNullableFilter<"test1"> | string | null
    followed_at?: DateTimeFilter<"test1"> | Date | string
  }, "id" | "user_id">

  export type test1OrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    displayname?: SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    followed_at?: SortOrder
    _count?: test1CountOrderByAggregateInput
    _avg?: test1AvgOrderByAggregateInput
    _max?: test1MaxOrderByAggregateInput
    _min?: test1MinOrderByAggregateInput
    _sum?: test1SumOrderByAggregateInput
  }

  export type test1ScalarWhereWithAggregatesInput = {
    AND?: test1ScalarWhereWithAggregatesInput | test1ScalarWhereWithAggregatesInput[]
    OR?: test1ScalarWhereWithAggregatesInput[]
    NOT?: test1ScalarWhereWithAggregatesInput | test1ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"test1"> | number
    user_id?: StringWithAggregatesFilter<"test1"> | string
    displayname?: StringWithAggregatesFilter<"test1"> | string
    profile_image_url?: StringNullableWithAggregatesFilter<"test1"> | string | null
    followed_at?: DateTimeWithAggregatesFilter<"test1"> | Date | string
  }

  export type test2WhereInput = {
    AND?: test2WhereInput | test2WhereInput[]
    OR?: test2WhereInput[]
    NOT?: test2WhereInput | test2WhereInput[]
    id?: IntFilter<"test2"> | number
    name?: StringFilter<"test2"> | string
    position?: StringFilter<"test2"> | string
  }

  export type test2OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    _relevance?: test2OrderByRelevanceInput
  }

  export type test2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: test2WhereInput | test2WhereInput[]
    OR?: test2WhereInput[]
    NOT?: test2WhereInput | test2WhereInput[]
    name?: StringFilter<"test2"> | string
    position?: StringFilter<"test2"> | string
  }, "id">

  export type test2OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    _count?: test2CountOrderByAggregateInput
    _avg?: test2AvgOrderByAggregateInput
    _max?: test2MaxOrderByAggregateInput
    _min?: test2MinOrderByAggregateInput
    _sum?: test2SumOrderByAggregateInput
  }

  export type test2ScalarWhereWithAggregatesInput = {
    AND?: test2ScalarWhereWithAggregatesInput | test2ScalarWhereWithAggregatesInput[]
    OR?: test2ScalarWhereWithAggregatesInput[]
    NOT?: test2ScalarWhereWithAggregatesInput | test2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"test2"> | number
    name?: StringWithAggregatesFilter<"test2"> | string
    position?: StringWithAggregatesFilter<"test2"> | string
  }

  export type userLoginWhereInput = {
    AND?: userLoginWhereInput | userLoginWhereInput[]
    OR?: userLoginWhereInput[]
    NOT?: userLoginWhereInput | userLoginWhereInput[]
    id?: IntFilter<"userLogin"> | number
    email?: StringFilter<"userLogin"> | string
    password?: StringFilter<"userLogin"> | string
    firstName?: StringFilter<"userLogin"> | string
    lastName?: StringFilter<"userLogin"> | string
    role?: StringFilter<"userLogin"> | string
    enabled?: IntFilter<"userLogin"> | number
  }

  export type userLoginOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
    _relevance?: userLoginOrderByRelevanceInput
  }

  export type userLoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userLoginWhereInput | userLoginWhereInput[]
    OR?: userLoginWhereInput[]
    NOT?: userLoginWhereInput | userLoginWhereInput[]
    password?: StringFilter<"userLogin"> | string
    firstName?: StringFilter<"userLogin"> | string
    lastName?: StringFilter<"userLogin"> | string
    role?: StringFilter<"userLogin"> | string
    enabled?: IntFilter<"userLogin"> | number
  }, "id" | "email">

  export type userLoginOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
    _count?: userLoginCountOrderByAggregateInput
    _avg?: userLoginAvgOrderByAggregateInput
    _max?: userLoginMaxOrderByAggregateInput
    _min?: userLoginMinOrderByAggregateInput
    _sum?: userLoginSumOrderByAggregateInput
  }

  export type userLoginScalarWhereWithAggregatesInput = {
    AND?: userLoginScalarWhereWithAggregatesInput | userLoginScalarWhereWithAggregatesInput[]
    OR?: userLoginScalarWhereWithAggregatesInput[]
    NOT?: userLoginScalarWhereWithAggregatesInput | userLoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userLogin"> | number
    email?: StringWithAggregatesFilter<"userLogin"> | string
    password?: StringWithAggregatesFilter<"userLogin"> | string
    firstName?: StringWithAggregatesFilter<"userLogin"> | string
    lastName?: StringWithAggregatesFilter<"userLogin"> | string
    role?: StringWithAggregatesFilter<"userLogin"> | string
    enabled?: IntWithAggregatesFilter<"userLogin"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUser_roleFilter<"User"> | $Enums.User_role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUser_roleFilter<"User"> | $Enums.User_role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUser_roleWithAggregatesFilter<"User"> | $Enums.User_role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentCreateInput = {
    class_level: string
    class_room: string
    student_number: string
    code_citizen?: string | null
    gender: string
    prefix_name?: string | null
    first_name: string
    last_name: string
    birth_date?: Date | string | null
    age_years?: number | null
    religion?: string | null
    ethnicity?: string | null
    guardian_first_name?: string | null
    guardian_last_name?: string | null
    guardian_relation?: string | null
    father_first_name?: string | null
    father_last_name?: string | null
    mother_first_name?: string | null
    mother_last_name?: string | null
    created_at?: Date | string
    updated_at: Date | string
    nationality?: string | null
    status?: string
    note?: string | null
  }

  export type StudentUncheckedCreateInput = {
    student_id?: number
    class_level: string
    class_room: string
    student_number: string
    code_citizen?: string | null
    gender: string
    prefix_name?: string | null
    first_name: string
    last_name: string
    birth_date?: Date | string | null
    age_years?: number | null
    religion?: string | null
    ethnicity?: string | null
    guardian_first_name?: string | null
    guardian_last_name?: string | null
    guardian_relation?: string | null
    father_first_name?: string | null
    father_last_name?: string | null
    mother_first_name?: string | null
    mother_last_name?: string | null
    created_at?: Date | string
    updated_at: Date | string
    nationality?: string | null
    status?: string
    note?: string | null
  }

  export type StudentUpdateInput = {
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateManyInput = {
    student_id?: number
    class_level: string
    class_room: string
    student_number: string
    code_citizen?: string | null
    gender: string
    prefix_name?: string | null
    first_name: string
    last_name: string
    birth_date?: Date | string | null
    age_years?: number | null
    religion?: string | null
    ethnicity?: string | null
    guardian_first_name?: string | null
    guardian_last_name?: string | null
    guardian_relation?: string | null
    father_first_name?: string | null
    father_last_name?: string | null
    mother_first_name?: string | null
    mother_last_name?: string | null
    created_at?: Date | string
    updated_at: Date | string
    nationality?: string | null
    status?: string
    note?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Student_2CreateInput = {
    class_level: string
    class_room: string
    student_number: string
    code_citizen?: string | null
    gender: string
    prefix_name?: string | null
    first_name: string
    last_name: string
    birth_date?: Date | string | null
    age_years?: number | null
    religion?: string | null
    ethnicity?: string | null
    guardian_first_name?: string | null
    guardian_last_name?: string | null
    guardian_relation?: string | null
    father_first_name?: string | null
    father_last_name?: string | null
    mother_first_name?: string | null
    mother_last_name?: string | null
    created_at?: Date | string
    updated_at: Date | string
    nationality?: string | null
    status?: string
    note?: string | null
  }

  export type Student_2UncheckedCreateInput = {
    student_id?: number
    class_level: string
    class_room: string
    student_number: string
    code_citizen?: string | null
    gender: string
    prefix_name?: string | null
    first_name: string
    last_name: string
    birth_date?: Date | string | null
    age_years?: number | null
    religion?: string | null
    ethnicity?: string | null
    guardian_first_name?: string | null
    guardian_last_name?: string | null
    guardian_relation?: string | null
    father_first_name?: string | null
    father_last_name?: string | null
    mother_first_name?: string | null
    mother_last_name?: string | null
    created_at?: Date | string
    updated_at: Date | string
    nationality?: string | null
    status?: string
    note?: string | null
  }

  export type Student_2UpdateInput = {
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Student_2UncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Student_2CreateManyInput = {
    student_id?: number
    class_level: string
    class_room: string
    student_number: string
    code_citizen?: string | null
    gender: string
    prefix_name?: string | null
    first_name: string
    last_name: string
    birth_date?: Date | string | null
    age_years?: number | null
    religion?: string | null
    ethnicity?: string | null
    guardian_first_name?: string | null
    guardian_last_name?: string | null
    guardian_relation?: string | null
    father_first_name?: string | null
    father_last_name?: string | null
    mother_first_name?: string | null
    mother_last_name?: string | null
    created_at?: Date | string
    updated_at: Date | string
    nationality?: string | null
    status?: string
    note?: string | null
  }

  export type Student_2UpdateManyMutationInput = {
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Student_2UncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    class_level?: StringFieldUpdateOperationsInput | string
    class_room?: StringFieldUpdateOperationsInput | string
    student_number?: StringFieldUpdateOperationsInput | string
    code_citizen?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    prefix_name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_years?: NullableIntFieldUpdateOperationsInput | number | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_relation?: NullableStringFieldUpdateOperationsInput | string | null
    father_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    father_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    mother_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documentsCreateInput = {
    docname: string
    title: string
    note?: string | null
    created_at?: Date | string | null
    submissions: submissionsCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateInput = {
    id?: number
    submission_id: number
    docname: string
    title: string
    note?: string | null
    created_at?: Date | string | null
  }

  export type documentsUpdateInput = {
    docname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    submission_id?: IntFieldUpdateOperationsInput | number
    docname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsCreateManyInput = {
    id?: number
    submission_id: number
    docname: string
    title: string
    note?: string | null
    created_at?: Date | string | null
  }

  export type documentsUpdateManyMutationInput = {
    docname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    submission_id?: IntFieldUpdateOperationsInput | number
    docname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsCreateInput = {
    teacher_name: string
    date_accept: Date | string
    time_accept: Date | string
    receiver?: string | null
    created_at?: Date | string | null
    documents?: documentsCreateNestedManyWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateInput = {
    id?: number
    teacher_name: string
    date_accept: Date | string
    time_accept: Date | string
    receiver?: string | null
    created_at?: Date | string | null
    documents?: documentsUncheckedCreateNestedManyWithoutSubmissionsInput
  }

  export type submissionsUpdateInput = {
    teacher_name?: StringFieldUpdateOperationsInput | string
    date_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    time_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUpdateManyWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_name?: StringFieldUpdateOperationsInput | string
    date_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    time_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUncheckedUpdateManyWithoutSubmissionsNestedInput
  }

  export type submissionsCreateManyInput = {
    id?: number
    teacher_name: string
    date_accept: Date | string
    time_accept: Date | string
    receiver?: string | null
    created_at?: Date | string | null
  }

  export type submissionsUpdateManyMutationInput = {
    teacher_name?: StringFieldUpdateOperationsInput | string
    date_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    time_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_name?: StringFieldUpdateOperationsInput | string
    date_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    time_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type test1CreateInput = {
    user_id: string
    displayname: string
    profile_image_url?: string | null
    followed_at?: Date | string
  }

  export type test1UncheckedCreateInput = {
    id?: number
    user_id: string
    displayname: string
    profile_image_url?: string | null
    followed_at?: Date | string
  }

  export type test1UpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    followed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type test1UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    followed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type test1CreateManyInput = {
    id?: number
    user_id: string
    displayname: string
    profile_image_url?: string | null
    followed_at?: Date | string
  }

  export type test1UpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    followed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type test1UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    followed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type test2CreateInput = {
    name: string
    position: string
  }

  export type test2UncheckedCreateInput = {
    id?: number
    name: string
    position: string
  }

  export type test2UpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
  }

  export type test2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
  }

  export type test2CreateManyInput = {
    id?: number
    name: string
    position: string
  }

  export type test2UpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
  }

  export type test2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
  }

  export type userLoginCreateInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    enabled?: number
  }

  export type userLoginUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    enabled?: number
  }

  export type userLoginUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type userLoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type userLoginCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    enabled?: number
  }

  export type userLoginUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type userLoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role?: $Enums.User_role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: $Enums.User_role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: $Enums.User_role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrder
    gender?: SortOrder
    prefix_name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    age_years?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    guardian_first_name?: SortOrder
    guardian_last_name?: SortOrder
    guardian_relation?: SortOrder
    father_first_name?: SortOrder
    father_last_name?: SortOrder
    mother_first_name?: SortOrder
    mother_last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrder
    status?: SortOrder
    note?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    student_id?: SortOrder
    age_years?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrder
    gender?: SortOrder
    prefix_name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    age_years?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    guardian_first_name?: SortOrder
    guardian_last_name?: SortOrder
    guardian_relation?: SortOrder
    father_first_name?: SortOrder
    father_last_name?: SortOrder
    mother_first_name?: SortOrder
    mother_last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrder
    status?: SortOrder
    note?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrder
    gender?: SortOrder
    prefix_name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    age_years?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    guardian_first_name?: SortOrder
    guardian_last_name?: SortOrder
    guardian_relation?: SortOrder
    father_first_name?: SortOrder
    father_last_name?: SortOrder
    mother_first_name?: SortOrder
    mother_last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrder
    status?: SortOrder
    note?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    student_id?: SortOrder
    age_years?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Student_2OrderByRelevanceInput = {
    fields: Student_2OrderByRelevanceFieldEnum | Student_2OrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Student_2CountOrderByAggregateInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrder
    gender?: SortOrder
    prefix_name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    age_years?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    guardian_first_name?: SortOrder
    guardian_last_name?: SortOrder
    guardian_relation?: SortOrder
    father_first_name?: SortOrder
    father_last_name?: SortOrder
    mother_first_name?: SortOrder
    mother_last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrder
    status?: SortOrder
    note?: SortOrder
  }

  export type Student_2AvgOrderByAggregateInput = {
    student_id?: SortOrder
    age_years?: SortOrder
  }

  export type Student_2MaxOrderByAggregateInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrder
    gender?: SortOrder
    prefix_name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    age_years?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    guardian_first_name?: SortOrder
    guardian_last_name?: SortOrder
    guardian_relation?: SortOrder
    father_first_name?: SortOrder
    father_last_name?: SortOrder
    mother_first_name?: SortOrder
    mother_last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrder
    status?: SortOrder
    note?: SortOrder
  }

  export type Student_2MinOrderByAggregateInput = {
    student_id?: SortOrder
    class_level?: SortOrder
    class_room?: SortOrder
    student_number?: SortOrder
    code_citizen?: SortOrder
    gender?: SortOrder
    prefix_name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    age_years?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    guardian_first_name?: SortOrder
    guardian_last_name?: SortOrder
    guardian_relation?: SortOrder
    father_first_name?: SortOrder
    father_last_name?: SortOrder
    mother_first_name?: SortOrder
    mother_last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nationality?: SortOrder
    status?: SortOrder
    note?: SortOrder
  }

  export type Student_2SumOrderByAggregateInput = {
    student_id?: SortOrder
    age_years?: SortOrder
  }

  export type SubmissionsScalarRelationFilter = {
    is?: submissionsWhereInput
    isNot?: submissionsWhereInput
  }

  export type documentsOrderByRelevanceInput = {
    fields: documentsOrderByRelevanceFieldEnum | documentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type documentsCountOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
    docname?: SortOrder
    title?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
  }

  export type documentsAvgOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
  }

  export type documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
    docname?: SortOrder
    title?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
  }

  export type documentsMinOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
    docname?: SortOrder
    title?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
  }

  export type documentsSumOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
  }

  export type DocumentsListRelationFilter = {
    every?: documentsWhereInput
    some?: documentsWhereInput
    none?: documentsWhereInput
  }

  export type documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type submissionsOrderByRelevanceInput = {
    fields: submissionsOrderByRelevanceFieldEnum | submissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type submissionsCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_name?: SortOrder
    date_accept?: SortOrder
    time_accept?: SortOrder
    receiver?: SortOrder
    created_at?: SortOrder
  }

  export type submissionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type submissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_name?: SortOrder
    date_accept?: SortOrder
    time_accept?: SortOrder
    receiver?: SortOrder
    created_at?: SortOrder
  }

  export type submissionsMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_name?: SortOrder
    date_accept?: SortOrder
    time_accept?: SortOrder
    receiver?: SortOrder
    created_at?: SortOrder
  }

  export type submissionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type test1OrderByRelevanceInput = {
    fields: test1OrderByRelevanceFieldEnum | test1OrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type test1CountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    displayname?: SortOrder
    profile_image_url?: SortOrder
    followed_at?: SortOrder
  }

  export type test1AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type test1MaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    displayname?: SortOrder
    profile_image_url?: SortOrder
    followed_at?: SortOrder
  }

  export type test1MinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    displayname?: SortOrder
    profile_image_url?: SortOrder
    followed_at?: SortOrder
  }

  export type test1SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type test2OrderByRelevanceInput = {
    fields: test2OrderByRelevanceFieldEnum | test2OrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type test2CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
  }

  export type test2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type test2MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
  }

  export type test2MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
  }

  export type test2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userLoginOrderByRelevanceInput = {
    fields: userLoginOrderByRelevanceFieldEnum | userLoginOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userLoginCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
  }

  export type userLoginAvgOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
  }

  export type userLoginMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
  }

  export type userLoginMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
  }

  export type userLoginSumOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
  }

  export type EnumUser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[]
    notIn?: $Enums.User_role[]
    not?: NestedEnumUser_roleFilter<$PrismaModel> | $Enums.User_role
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[]
    notIn?: $Enums.User_role[]
    not?: NestedEnumUser_roleWithAggregatesFilter<$PrismaModel> | $Enums.User_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_roleFilter<$PrismaModel>
    _max?: NestedEnumUser_roleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type submissionsCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<submissionsCreateWithoutDocumentsInput, submissionsUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: submissionsCreateOrConnectWithoutDocumentsInput
    connect?: submissionsWhereUniqueInput
  }

  export type submissionsUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<submissionsCreateWithoutDocumentsInput, submissionsUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: submissionsCreateOrConnectWithoutDocumentsInput
    upsert?: submissionsUpsertWithoutDocumentsInput
    connect?: submissionsWhereUniqueInput
    update?: XOR<XOR<submissionsUpdateToOneWithWhereWithoutDocumentsInput, submissionsUpdateWithoutDocumentsInput>, submissionsUncheckedUpdateWithoutDocumentsInput>
  }

  export type documentsCreateNestedManyWithoutSubmissionsInput = {
    create?: XOR<documentsCreateWithoutSubmissionsInput, documentsUncheckedCreateWithoutSubmissionsInput> | documentsCreateWithoutSubmissionsInput[] | documentsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutSubmissionsInput | documentsCreateOrConnectWithoutSubmissionsInput[]
    createMany?: documentsCreateManySubmissionsInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type documentsUncheckedCreateNestedManyWithoutSubmissionsInput = {
    create?: XOR<documentsCreateWithoutSubmissionsInput, documentsUncheckedCreateWithoutSubmissionsInput> | documentsCreateWithoutSubmissionsInput[] | documentsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutSubmissionsInput | documentsCreateOrConnectWithoutSubmissionsInput[]
    createMany?: documentsCreateManySubmissionsInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type documentsUpdateManyWithoutSubmissionsNestedInput = {
    create?: XOR<documentsCreateWithoutSubmissionsInput, documentsUncheckedCreateWithoutSubmissionsInput> | documentsCreateWithoutSubmissionsInput[] | documentsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutSubmissionsInput | documentsCreateOrConnectWithoutSubmissionsInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutSubmissionsInput | documentsUpsertWithWhereUniqueWithoutSubmissionsInput[]
    createMany?: documentsCreateManySubmissionsInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutSubmissionsInput | documentsUpdateWithWhereUniqueWithoutSubmissionsInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutSubmissionsInput | documentsUpdateManyWithWhereWithoutSubmissionsInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type documentsUncheckedUpdateManyWithoutSubmissionsNestedInput = {
    create?: XOR<documentsCreateWithoutSubmissionsInput, documentsUncheckedCreateWithoutSubmissionsInput> | documentsCreateWithoutSubmissionsInput[] | documentsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutSubmissionsInput | documentsCreateOrConnectWithoutSubmissionsInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutSubmissionsInput | documentsUpsertWithWhereUniqueWithoutSubmissionsInput[]
    createMany?: documentsCreateManySubmissionsInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutSubmissionsInput | documentsUpdateWithWhereUniqueWithoutSubmissionsInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutSubmissionsInput | documentsUpdateManyWithWhereWithoutSubmissionsInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type EnumUser_roleFieldUpdateOperationsInput = {
    set?: $Enums.User_role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[]
    notIn?: $Enums.User_role[]
    not?: NestedEnumUser_roleFilter<$PrismaModel> | $Enums.User_role
  }

  export type NestedEnumUser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[]
    notIn?: $Enums.User_role[]
    not?: NestedEnumUser_roleWithAggregatesFilter<$PrismaModel> | $Enums.User_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_roleFilter<$PrismaModel>
    _max?: NestedEnumUser_roleFilter<$PrismaModel>
  }

  export type submissionsCreateWithoutDocumentsInput = {
    teacher_name: string
    date_accept: Date | string
    time_accept: Date | string
    receiver?: string | null
    created_at?: Date | string | null
  }

  export type submissionsUncheckedCreateWithoutDocumentsInput = {
    id?: number
    teacher_name: string
    date_accept: Date | string
    time_accept: Date | string
    receiver?: string | null
    created_at?: Date | string | null
  }

  export type submissionsCreateOrConnectWithoutDocumentsInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutDocumentsInput, submissionsUncheckedCreateWithoutDocumentsInput>
  }

  export type submissionsUpsertWithoutDocumentsInput = {
    update: XOR<submissionsUpdateWithoutDocumentsInput, submissionsUncheckedUpdateWithoutDocumentsInput>
    create: XOR<submissionsCreateWithoutDocumentsInput, submissionsUncheckedCreateWithoutDocumentsInput>
    where?: submissionsWhereInput
  }

  export type submissionsUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: submissionsWhereInput
    data: XOR<submissionsUpdateWithoutDocumentsInput, submissionsUncheckedUpdateWithoutDocumentsInput>
  }

  export type submissionsUpdateWithoutDocumentsInput = {
    teacher_name?: StringFieldUpdateOperationsInput | string
    date_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    time_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_name?: StringFieldUpdateOperationsInput | string
    date_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    time_accept?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsCreateWithoutSubmissionsInput = {
    docname: string
    title: string
    note?: string | null
    created_at?: Date | string | null
  }

  export type documentsUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    docname: string
    title: string
    note?: string | null
    created_at?: Date | string | null
  }

  export type documentsCreateOrConnectWithoutSubmissionsInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutSubmissionsInput, documentsUncheckedCreateWithoutSubmissionsInput>
  }

  export type documentsCreateManySubmissionsInputEnvelope = {
    data: documentsCreateManySubmissionsInput | documentsCreateManySubmissionsInput[]
    skipDuplicates?: boolean
  }

  export type documentsUpsertWithWhereUniqueWithoutSubmissionsInput = {
    where: documentsWhereUniqueInput
    update: XOR<documentsUpdateWithoutSubmissionsInput, documentsUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<documentsCreateWithoutSubmissionsInput, documentsUncheckedCreateWithoutSubmissionsInput>
  }

  export type documentsUpdateWithWhereUniqueWithoutSubmissionsInput = {
    where: documentsWhereUniqueInput
    data: XOR<documentsUpdateWithoutSubmissionsInput, documentsUncheckedUpdateWithoutSubmissionsInput>
  }

  export type documentsUpdateManyWithWhereWithoutSubmissionsInput = {
    where: documentsScalarWhereInput
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyWithoutSubmissionsInput>
  }

  export type documentsScalarWhereInput = {
    AND?: documentsScalarWhereInput | documentsScalarWhereInput[]
    OR?: documentsScalarWhereInput[]
    NOT?: documentsScalarWhereInput | documentsScalarWhereInput[]
    id?: IntFilter<"documents"> | number
    submission_id?: IntFilter<"documents"> | number
    docname?: StringFilter<"documents"> | string
    title?: StringFilter<"documents"> | string
    note?: StringNullableFilter<"documents"> | string | null
    created_at?: DateTimeNullableFilter<"documents"> | Date | string | null
  }

  export type documentsCreateManySubmissionsInput = {
    id?: number
    docname: string
    title: string
    note?: string | null
    created_at?: Date | string | null
  }

  export type documentsUpdateWithoutSubmissionsInput = {
    docname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    docname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUncheckedUpdateManyWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    docname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}