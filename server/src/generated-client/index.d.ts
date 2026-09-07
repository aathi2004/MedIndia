
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model MedicalVisit
 * 
 */
export type MedicalVisit = $Result.DefaultSelection<Prisma.$MedicalVisitPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model PrescriptionItem
 * 
 */
export type PrescriptionItem = $Result.DefaultSelection<Prisma.$PrescriptionItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  RECEPTIONIST: 'RECEPTIONIST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const BloodGroup: {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const AppointmentType: {
  CHECKUP: 'CHECKUP',
  FOLLOW_UP: 'FOLLOW_UP',
  CONSULTATION: 'CONSULTATION',
  EMERGENCY: 'EMERGENCY',
  OTHER: 'OTHER'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalVisit`: Exposes CRUD operations for the **MedicalVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalVisits
    * const medicalVisits = await prisma.medicalVisit.findMany()
    * ```
    */
  get medicalVisit(): Prisma.MedicalVisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescriptionItem`: Exposes CRUD operations for the **PrescriptionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrescriptionItems
    * const prescriptionItems = await prisma.prescriptionItem.findMany()
    * ```
    */
  get prescriptionItem(): Prisma.PrescriptionItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Patient: 'Patient',
    Appointment: 'Appointment',
    MedicalVisit: 'MedicalVisit',
    Prescription: 'Prescription',
    PrescriptionItem: 'PrescriptionItem'
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
      modelProps: "user" | "patient" | "appointment" | "medicalVisit" | "prescription" | "prescriptionItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      MedicalVisit: {
        payload: Prisma.$MedicalVisitPayload<ExtArgs>
        fields: Prisma.MedicalVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>
          }
          findFirst: {
            args: Prisma.MedicalVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>
          }
          findMany: {
            args: Prisma.MedicalVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>[]
          }
          create: {
            args: Prisma.MedicalVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>
          }
          createMany: {
            args: Prisma.MedicalVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>[]
          }
          delete: {
            args: Prisma.MedicalVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>
          }
          update: {
            args: Prisma.MedicalVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>
          }
          deleteMany: {
            args: Prisma.MedicalVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>[]
          }
          upsert: {
            args: Prisma.MedicalVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalVisitPayload>
          }
          aggregate: {
            args: Prisma.MedicalVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalVisit>
          }
          groupBy: {
            args: Prisma.MedicalVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalVisitCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalVisitCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      PrescriptionItem: {
        payload: Prisma.$PrescriptionItemPayload<ExtArgs>
        fields: Prisma.PrescriptionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          findMany: {
            args: Prisma.PrescriptionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>[]
          }
          create: {
            args: Prisma.PrescriptionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          createMany: {
            args: Prisma.PrescriptionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          update: {
            args: Prisma.PrescriptionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescriptionItem>
          }
          groupBy: {
            args: Prisma.PrescriptionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionItemCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionItemCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    patient?: PatientOmit
    appointment?: AppointmentOmit
    medicalVisit?: MedicalVisitOmit
    prescription?: PrescriptionOmit
    prescriptionItem?: PrescriptionItemOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
    visits: number
    prescriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    visits?: boolean | UserCountOutputTypeCountVisitsArgs
    prescriptions?: boolean | UserCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalVisitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    visits: number
    prescriptions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    visits?: boolean | PatientCountOutputTypeCountVisitsArgs
    prescriptions?: boolean | PatientCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalVisitWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type PrescriptionCountOutputType
   */

  export type PrescriptionCountOutputType = {
    items: number
  }

  export type PrescriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PrescriptionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionCountOutputType
     */
    select?: PrescriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionItemWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
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
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
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
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
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
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    prescriptions?: boolean | User$prescriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    prescriptions?: boolean | User$prescriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      visits: Prisma.$MedicalVisitPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visits<T extends User$visitsArgs<ExtArgs> = {}>(args?: Subset<T, User$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends User$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.visits
   */
  export type User$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    where?: MedicalVisitWhereInput
    orderBy?: MedicalVisitOrderByWithRelationInput | MedicalVisitOrderByWithRelationInput[]
    cursor?: MedicalVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalVisitScalarFieldEnum | MedicalVisitScalarFieldEnum[]
  }

  /**
   * User.prescriptions
   */
  export type User$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    patientId: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    phone: string | null
    email: string | null
    address: string | null
    bloodGroup: $Enums.BloodGroup | null
    allergies: string | null
    existingConditions: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    patientId: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    phone: string | null
    email: string | null
    address: string | null
    bloodGroup: $Enums.BloodGroup | null
    allergies: string | null
    existingConditions: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    patientId: number
    firstName: number
    lastName: number
    dateOfBirth: number
    gender: number
    phone: number
    email: number
    address: number
    bloodGroup: number
    allergies: number
    existingConditions: number
    emergencyContactName: number
    emergencyContactPhone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    patientId?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    bloodGroup?: true
    allergies?: true
    existingConditions?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    patientId?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    bloodGroup?: true
    allergies?: true
    existingConditions?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    patientId?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    bloodGroup?: true
    allergies?: true
    existingConditions?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date
    gender: $Enums.Gender
    phone: string
    email: string | null
    address: string | null
    bloodGroup: $Enums.BloodGroup | null
    allergies: string | null
    existingConditions: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    existingConditions?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    visits?: boolean | Patient$visitsArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    existingConditions?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    existingConditions?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    existingConditions?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "firstName" | "lastName" | "dateOfBirth" | "gender" | "phone" | "email" | "address" | "bloodGroup" | "allergies" | "existingConditions" | "emergencyContactName" | "emergencyContactPhone" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    visits?: boolean | Patient$visitsArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      visits: Prisma.$MedicalVisitPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: string
      firstName: string
      lastName: string
      dateOfBirth: Date
      gender: $Enums.Gender
      phone: string
      email: string | null
      address: string | null
      bloodGroup: $Enums.BloodGroup | null
      allergies: string | null
      existingConditions: string | null
      emergencyContactName: string | null
      emergencyContactPhone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visits<T extends Patient$visitsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Patient$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly patientId: FieldRef<"Patient", 'String'>
    readonly firstName: FieldRef<"Patient", 'String'>
    readonly lastName: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'Gender'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly bloodGroup: FieldRef<"Patient", 'BloodGroup'>
    readonly allergies: FieldRef<"Patient", 'String'>
    readonly existingConditions: FieldRef<"Patient", 'String'>
    readonly emergencyContactName: FieldRef<"Patient", 'String'>
    readonly emergencyContactPhone: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.visits
   */
  export type Patient$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    where?: MedicalVisitWhereInput
    orderBy?: MedicalVisitOrderByWithRelationInput | MedicalVisitOrderByWithRelationInput[]
    cursor?: MedicalVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalVisitScalarFieldEnum | MedicalVisitScalarFieldEnum[]
  }

  /**
   * Patient.prescriptions
   */
  export type Patient$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    appointmentDate: Date | null
    time: string | null
    type: $Enums.AppointmentType | null
    reason: string | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    appointmentDate: Date | null
    time: string | null
    type: $Enums.AppointmentType | null
    reason: string | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    appointmentDate: number
    time: number
    type: number
    reason: number
    status: number
    createdAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentDate?: true
    time?: true
    type?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentDate?: true
    time?: true
    type?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentDate?: true
    time?: true
    type?: true
    reason?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number
    appointmentDate: Date
    time: string | null
    type: $Enums.AppointmentType
    reason: string | null
    status: $Enums.AppointmentStatus
    createdAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentDate?: boolean
    time?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentDate?: boolean
    time?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentDate?: boolean
    time?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentDate?: boolean
    time?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "appointmentDate" | "time" | "type" | "reason" | "status" | "createdAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number
      appointmentDate: Date
      time: string | null
      type: $Enums.AppointmentType
      reason: string | null
      status: $Enums.AppointmentStatus
      createdAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly patientId: FieldRef<"Appointment", 'Int'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly appointmentDate: FieldRef<"Appointment", 'DateTime'>
    readonly time: FieldRef<"Appointment", 'String'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model MedicalVisit
   */

  export type AggregateMedicalVisit = {
    _count: MedicalVisitCountAggregateOutputType | null
    _avg: MedicalVisitAvgAggregateOutputType | null
    _sum: MedicalVisitSumAggregateOutputType | null
    _min: MedicalVisitMinAggregateOutputType | null
    _max: MedicalVisitMaxAggregateOutputType | null
  }

  export type MedicalVisitAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    heartRate: number | null
    temperature: Decimal | null
    weight: Decimal | null
  }

  export type MedicalVisitSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    heartRate: number | null
    temperature: Decimal | null
    weight: Decimal | null
  }

  export type MedicalVisitMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    visitDate: Date | null
    chiefComplaint: string | null
    symptoms: string | null
    bloodPressure: string | null
    heartRate: number | null
    temperature: Decimal | null
    weight: Decimal | null
    diagnosis: string | null
    treatmentPlan: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type MedicalVisitMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    visitDate: Date | null
    chiefComplaint: string | null
    symptoms: string | null
    bloodPressure: string | null
    heartRate: number | null
    temperature: Decimal | null
    weight: Decimal | null
    diagnosis: string | null
    treatmentPlan: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type MedicalVisitCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    visitDate: number
    chiefComplaint: number
    symptoms: number
    bloodPressure: number
    heartRate: number
    temperature: number
    weight: number
    diagnosis: number
    treatmentPlan: number
    notes: number
    createdAt: number
    _all: number
  }


  export type MedicalVisitAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    heartRate?: true
    temperature?: true
    weight?: true
  }

  export type MedicalVisitSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    heartRate?: true
    temperature?: true
    weight?: true
  }

  export type MedicalVisitMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitDate?: true
    chiefComplaint?: true
    symptoms?: true
    bloodPressure?: true
    heartRate?: true
    temperature?: true
    weight?: true
    diagnosis?: true
    treatmentPlan?: true
    notes?: true
    createdAt?: true
  }

  export type MedicalVisitMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitDate?: true
    chiefComplaint?: true
    symptoms?: true
    bloodPressure?: true
    heartRate?: true
    temperature?: true
    weight?: true
    diagnosis?: true
    treatmentPlan?: true
    notes?: true
    createdAt?: true
  }

  export type MedicalVisitCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitDate?: true
    chiefComplaint?: true
    symptoms?: true
    bloodPressure?: true
    heartRate?: true
    temperature?: true
    weight?: true
    diagnosis?: true
    treatmentPlan?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type MedicalVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalVisit to aggregate.
     */
    where?: MedicalVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalVisits to fetch.
     */
    orderBy?: MedicalVisitOrderByWithRelationInput | MedicalVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalVisits
    **/
    _count?: true | MedicalVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalVisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalVisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalVisitMaxAggregateInputType
  }

  export type GetMedicalVisitAggregateType<T extends MedicalVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalVisit[P]>
      : GetScalarType<T[P], AggregateMedicalVisit[P]>
  }




  export type MedicalVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalVisitWhereInput
    orderBy?: MedicalVisitOrderByWithAggregationInput | MedicalVisitOrderByWithAggregationInput[]
    by: MedicalVisitScalarFieldEnum[] | MedicalVisitScalarFieldEnum
    having?: MedicalVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalVisitCountAggregateInputType | true
    _avg?: MedicalVisitAvgAggregateInputType
    _sum?: MedicalVisitSumAggregateInputType
    _min?: MedicalVisitMinAggregateInputType
    _max?: MedicalVisitMaxAggregateInputType
  }

  export type MedicalVisitGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number
    visitDate: Date
    chiefComplaint: string
    symptoms: string | null
    bloodPressure: string | null
    heartRate: number | null
    temperature: Decimal | null
    weight: Decimal | null
    diagnosis: string | null
    treatmentPlan: string | null
    notes: string | null
    createdAt: Date
    _count: MedicalVisitCountAggregateOutputType | null
    _avg: MedicalVisitAvgAggregateOutputType | null
    _sum: MedicalVisitSumAggregateOutputType | null
    _min: MedicalVisitMinAggregateOutputType | null
    _max: MedicalVisitMaxAggregateOutputType | null
  }

  type GetMedicalVisitGroupByPayload<T extends MedicalVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalVisitGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalVisitGroupByOutputType[P]>
        }
      >
    >


  export type MedicalVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitDate?: boolean
    chiefComplaint?: boolean
    symptoms?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    weight?: boolean
    diagnosis?: boolean
    treatmentPlan?: boolean
    notes?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | MedicalVisit$prescriptionArgs<ExtArgs>
  }, ExtArgs["result"]["medicalVisit"]>

  export type MedicalVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitDate?: boolean
    chiefComplaint?: boolean
    symptoms?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    weight?: boolean
    diagnosis?: boolean
    treatmentPlan?: boolean
    notes?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalVisit"]>

  export type MedicalVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitDate?: boolean
    chiefComplaint?: boolean
    symptoms?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    weight?: boolean
    diagnosis?: boolean
    treatmentPlan?: boolean
    notes?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalVisit"]>

  export type MedicalVisitSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitDate?: boolean
    chiefComplaint?: boolean
    symptoms?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    weight?: boolean
    diagnosis?: boolean
    treatmentPlan?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type MedicalVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "visitDate" | "chiefComplaint" | "symptoms" | "bloodPressure" | "heartRate" | "temperature" | "weight" | "diagnosis" | "treatmentPlan" | "notes" | "createdAt", ExtArgs["result"]["medicalVisit"]>
  export type MedicalVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | MedicalVisit$prescriptionArgs<ExtArgs>
  }
  export type MedicalVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MedicalVisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedicalVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalVisit"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$UserPayload<ExtArgs>
      prescription: Prisma.$PrescriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number
      visitDate: Date
      chiefComplaint: string
      symptoms: string | null
      bloodPressure: string | null
      heartRate: number | null
      temperature: Prisma.Decimal | null
      weight: Prisma.Decimal | null
      diagnosis: string | null
      treatmentPlan: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["medicalVisit"]>
    composites: {}
  }

  type MedicalVisitGetPayload<S extends boolean | null | undefined | MedicalVisitDefaultArgs> = $Result.GetResult<Prisma.$MedicalVisitPayload, S>

  type MedicalVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalVisitCountAggregateInputType | true
    }

  export interface MedicalVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalVisit'], meta: { name: 'MedicalVisit' } }
    /**
     * Find zero or one MedicalVisit that matches the filter.
     * @param {MedicalVisitFindUniqueArgs} args - Arguments to find a MedicalVisit
     * @example
     * // Get one MedicalVisit
     * const medicalVisit = await prisma.medicalVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalVisitFindUniqueArgs>(args: SelectSubset<T, MedicalVisitFindUniqueArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalVisitFindUniqueOrThrowArgs} args - Arguments to find a MedicalVisit
     * @example
     * // Get one MedicalVisit
     * const medicalVisit = await prisma.medicalVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalVisitFindFirstArgs} args - Arguments to find a MedicalVisit
     * @example
     * // Get one MedicalVisit
     * const medicalVisit = await prisma.medicalVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalVisitFindFirstArgs>(args?: SelectSubset<T, MedicalVisitFindFirstArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalVisitFindFirstOrThrowArgs} args - Arguments to find a MedicalVisit
     * @example
     * // Get one MedicalVisit
     * const medicalVisit = await prisma.medicalVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalVisits
     * const medicalVisits = await prisma.medicalVisit.findMany()
     * 
     * // Get first 10 MedicalVisits
     * const medicalVisits = await prisma.medicalVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalVisitWithIdOnly = await prisma.medicalVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalVisitFindManyArgs>(args?: SelectSubset<T, MedicalVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalVisit.
     * @param {MedicalVisitCreateArgs} args - Arguments to create a MedicalVisit.
     * @example
     * // Create one MedicalVisit
     * const MedicalVisit = await prisma.medicalVisit.create({
     *   data: {
     *     // ... data to create a MedicalVisit
     *   }
     * })
     * 
     */
    create<T extends MedicalVisitCreateArgs>(args: SelectSubset<T, MedicalVisitCreateArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalVisits.
     * @param {MedicalVisitCreateManyArgs} args - Arguments to create many MedicalVisits.
     * @example
     * // Create many MedicalVisits
     * const medicalVisit = await prisma.medicalVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalVisitCreateManyArgs>(args?: SelectSubset<T, MedicalVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalVisits and returns the data saved in the database.
     * @param {MedicalVisitCreateManyAndReturnArgs} args - Arguments to create many MedicalVisits.
     * @example
     * // Create many MedicalVisits
     * const medicalVisit = await prisma.medicalVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalVisits and only return the `id`
     * const medicalVisitWithIdOnly = await prisma.medicalVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalVisit.
     * @param {MedicalVisitDeleteArgs} args - Arguments to delete one MedicalVisit.
     * @example
     * // Delete one MedicalVisit
     * const MedicalVisit = await prisma.medicalVisit.delete({
     *   where: {
     *     // ... filter to delete one MedicalVisit
     *   }
     * })
     * 
     */
    delete<T extends MedicalVisitDeleteArgs>(args: SelectSubset<T, MedicalVisitDeleteArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalVisit.
     * @param {MedicalVisitUpdateArgs} args - Arguments to update one MedicalVisit.
     * @example
     * // Update one MedicalVisit
     * const medicalVisit = await prisma.medicalVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalVisitUpdateArgs>(args: SelectSubset<T, MedicalVisitUpdateArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalVisits.
     * @param {MedicalVisitDeleteManyArgs} args - Arguments to filter MedicalVisits to delete.
     * @example
     * // Delete a few MedicalVisits
     * const { count } = await prisma.medicalVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalVisitDeleteManyArgs>(args?: SelectSubset<T, MedicalVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalVisits
     * const medicalVisit = await prisma.medicalVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalVisitUpdateManyArgs>(args: SelectSubset<T, MedicalVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalVisits and returns the data updated in the database.
     * @param {MedicalVisitUpdateManyAndReturnArgs} args - Arguments to update many MedicalVisits.
     * @example
     * // Update many MedicalVisits
     * const medicalVisit = await prisma.medicalVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalVisits and only return the `id`
     * const medicalVisitWithIdOnly = await prisma.medicalVisit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalVisit.
     * @param {MedicalVisitUpsertArgs} args - Arguments to update or create a MedicalVisit.
     * @example
     * // Update or create a MedicalVisit
     * const medicalVisit = await prisma.medicalVisit.upsert({
     *   create: {
     *     // ... data to create a MedicalVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalVisit we want to update
     *   }
     * })
     */
    upsert<T extends MedicalVisitUpsertArgs>(args: SelectSubset<T, MedicalVisitUpsertArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalVisitCountArgs} args - Arguments to filter MedicalVisits to count.
     * @example
     * // Count the number of MedicalVisits
     * const count = await prisma.medicalVisit.count({
     *   where: {
     *     // ... the filter for the MedicalVisits we want to count
     *   }
     * })
    **/
    count<T extends MedicalVisitCountArgs>(
      args?: Subset<T, MedicalVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalVisitAggregateArgs>(args: Subset<T, MedicalVisitAggregateArgs>): Prisma.PrismaPromise<GetMedicalVisitAggregateType<T>>

    /**
     * Group by MedicalVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalVisitGroupByArgs} args - Group by arguments.
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
      T extends MedicalVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalVisitGroupByArgs['orderBy'] }
        : { orderBy?: MedicalVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalVisit model
   */
  readonly fields: MedicalVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescription<T extends MedicalVisit$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, MedicalVisit$prescriptionArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalVisit model
   */
  interface MedicalVisitFieldRefs {
    readonly id: FieldRef<"MedicalVisit", 'Int'>
    readonly patientId: FieldRef<"MedicalVisit", 'Int'>
    readonly doctorId: FieldRef<"MedicalVisit", 'Int'>
    readonly visitDate: FieldRef<"MedicalVisit", 'DateTime'>
    readonly chiefComplaint: FieldRef<"MedicalVisit", 'String'>
    readonly symptoms: FieldRef<"MedicalVisit", 'String'>
    readonly bloodPressure: FieldRef<"MedicalVisit", 'String'>
    readonly heartRate: FieldRef<"MedicalVisit", 'Int'>
    readonly temperature: FieldRef<"MedicalVisit", 'Decimal'>
    readonly weight: FieldRef<"MedicalVisit", 'Decimal'>
    readonly diagnosis: FieldRef<"MedicalVisit", 'String'>
    readonly treatmentPlan: FieldRef<"MedicalVisit", 'String'>
    readonly notes: FieldRef<"MedicalVisit", 'String'>
    readonly createdAt: FieldRef<"MedicalVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalVisit findUnique
   */
  export type MedicalVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * Filter, which MedicalVisit to fetch.
     */
    where: MedicalVisitWhereUniqueInput
  }

  /**
   * MedicalVisit findUniqueOrThrow
   */
  export type MedicalVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * Filter, which MedicalVisit to fetch.
     */
    where: MedicalVisitWhereUniqueInput
  }

  /**
   * MedicalVisit findFirst
   */
  export type MedicalVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * Filter, which MedicalVisit to fetch.
     */
    where?: MedicalVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalVisits to fetch.
     */
    orderBy?: MedicalVisitOrderByWithRelationInput | MedicalVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalVisits.
     */
    cursor?: MedicalVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalVisits.
     */
    distinct?: MedicalVisitScalarFieldEnum | MedicalVisitScalarFieldEnum[]
  }

  /**
   * MedicalVisit findFirstOrThrow
   */
  export type MedicalVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * Filter, which MedicalVisit to fetch.
     */
    where?: MedicalVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalVisits to fetch.
     */
    orderBy?: MedicalVisitOrderByWithRelationInput | MedicalVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalVisits.
     */
    cursor?: MedicalVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalVisits.
     */
    distinct?: MedicalVisitScalarFieldEnum | MedicalVisitScalarFieldEnum[]
  }

  /**
   * MedicalVisit findMany
   */
  export type MedicalVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * Filter, which MedicalVisits to fetch.
     */
    where?: MedicalVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalVisits to fetch.
     */
    orderBy?: MedicalVisitOrderByWithRelationInput | MedicalVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalVisits.
     */
    cursor?: MedicalVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalVisits.
     */
    skip?: number
    distinct?: MedicalVisitScalarFieldEnum | MedicalVisitScalarFieldEnum[]
  }

  /**
   * MedicalVisit create
   */
  export type MedicalVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalVisit.
     */
    data: XOR<MedicalVisitCreateInput, MedicalVisitUncheckedCreateInput>
  }

  /**
   * MedicalVisit createMany
   */
  export type MedicalVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalVisits.
     */
    data: MedicalVisitCreateManyInput | MedicalVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalVisit createManyAndReturn
   */
  export type MedicalVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalVisits.
     */
    data: MedicalVisitCreateManyInput | MedicalVisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalVisit update
   */
  export type MedicalVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalVisit.
     */
    data: XOR<MedicalVisitUpdateInput, MedicalVisitUncheckedUpdateInput>
    /**
     * Choose, which MedicalVisit to update.
     */
    where: MedicalVisitWhereUniqueInput
  }

  /**
   * MedicalVisit updateMany
   */
  export type MedicalVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalVisits.
     */
    data: XOR<MedicalVisitUpdateManyMutationInput, MedicalVisitUncheckedUpdateManyInput>
    /**
     * Filter which MedicalVisits to update
     */
    where?: MedicalVisitWhereInput
    /**
     * Limit how many MedicalVisits to update.
     */
    limit?: number
  }

  /**
   * MedicalVisit updateManyAndReturn
   */
  export type MedicalVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * The data used to update MedicalVisits.
     */
    data: XOR<MedicalVisitUpdateManyMutationInput, MedicalVisitUncheckedUpdateManyInput>
    /**
     * Filter which MedicalVisits to update
     */
    where?: MedicalVisitWhereInput
    /**
     * Limit how many MedicalVisits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalVisit upsert
   */
  export type MedicalVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalVisit to update in case it exists.
     */
    where: MedicalVisitWhereUniqueInput
    /**
     * In case the MedicalVisit found by the `where` argument doesn't exist, create a new MedicalVisit with this data.
     */
    create: XOR<MedicalVisitCreateInput, MedicalVisitUncheckedCreateInput>
    /**
     * In case the MedicalVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalVisitUpdateInput, MedicalVisitUncheckedUpdateInput>
  }

  /**
   * MedicalVisit delete
   */
  export type MedicalVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
    /**
     * Filter which MedicalVisit to delete.
     */
    where: MedicalVisitWhereUniqueInput
  }

  /**
   * MedicalVisit deleteMany
   */
  export type MedicalVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalVisits to delete
     */
    where?: MedicalVisitWhereInput
    /**
     * Limit how many MedicalVisits to delete.
     */
    limit?: number
  }

  /**
   * MedicalVisit.prescription
   */
  export type MedicalVisit$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
  }

  /**
   * MedicalVisit without action
   */
  export type MedicalVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalVisit
     */
    select?: MedicalVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalVisit
     */
    omit?: MedicalVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalVisitInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    visitId: number | null
  }

  export type PrescriptionSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    visitId: number | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    visitId: number | null
    prescribedDate: Date | null
    notes: string | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    visitId: number | null
    prescribedDate: Date | null
    notes: string | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    visitId: number
    prescribedDate: number
    notes: number
    _all: number
  }


  export type PrescriptionAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitId?: true
  }

  export type PrescriptionSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitId?: true
  }

  export type PrescriptionMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitId?: true
    prescribedDate?: true
    notes?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitId?: true
    prescribedDate?: true
    notes?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    visitId?: true
    prescribedDate?: true
    notes?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _avg?: PrescriptionAvgAggregateInputType
    _sum?: PrescriptionSumAggregateInputType
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number
    visitId: number
    prescribedDate: Date
    notes: string | null
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitId?: boolean
    prescribedDate?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    visit?: boolean | MedicalVisitDefaultArgs<ExtArgs>
    items?: boolean | Prescription$itemsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitId?: boolean
    prescribedDate?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    visit?: boolean | MedicalVisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitId?: boolean
    prescribedDate?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    visit?: boolean | MedicalVisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    visitId?: boolean
    prescribedDate?: boolean
    notes?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "visitId" | "prescribedDate" | "notes", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    visit?: boolean | MedicalVisitDefaultArgs<ExtArgs>
    items?: boolean | Prescription$itemsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    visit?: boolean | MedicalVisitDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    visit?: boolean | MedicalVisitDefaultArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$UserPayload<ExtArgs>
      visit: Prisma.$MedicalVisitPayload<ExtArgs>
      items: Prisma.$PrescriptionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number
      visitId: number
      prescribedDate: Date
      notes: string | null
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visit<T extends MedicalVisitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalVisitDefaultArgs<ExtArgs>>): Prisma__MedicalVisitClient<$Result.GetResult<Prisma.$MedicalVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Prescription$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'Int'>
    readonly patientId: FieldRef<"Prescription", 'Int'>
    readonly doctorId: FieldRef<"Prescription", 'Int'>
    readonly visitId: FieldRef<"Prescription", 'Int'>
    readonly prescribedDate: FieldRef<"Prescription", 'DateTime'>
    readonly notes: FieldRef<"Prescription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.items
   */
  export type Prescription$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    where?: PrescriptionItemWhereInput
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    cursor?: PrescriptionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model PrescriptionItem
   */

  export type AggregatePrescriptionItem = {
    _count: PrescriptionItemCountAggregateOutputType | null
    _avg: PrescriptionItemAvgAggregateOutputType | null
    _sum: PrescriptionItemSumAggregateOutputType | null
    _min: PrescriptionItemMinAggregateOutputType | null
    _max: PrescriptionItemMaxAggregateOutputType | null
  }

  export type PrescriptionItemAvgAggregateOutputType = {
    id: number | null
    prescriptionId: number | null
  }

  export type PrescriptionItemSumAggregateOutputType = {
    id: number | null
    prescriptionId: number | null
  }

  export type PrescriptionItemMinAggregateOutputType = {
    id: number | null
    prescriptionId: number | null
    medicineName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
  }

  export type PrescriptionItemMaxAggregateOutputType = {
    id: number | null
    prescriptionId: number | null
    medicineName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
  }

  export type PrescriptionItemCountAggregateOutputType = {
    id: number
    prescriptionId: number
    medicineName: number
    dosage: number
    frequency: number
    duration: number
    instructions: number
    _all: number
  }


  export type PrescriptionItemAvgAggregateInputType = {
    id?: true
    prescriptionId?: true
  }

  export type PrescriptionItemSumAggregateInputType = {
    id?: true
    prescriptionId?: true
  }

  export type PrescriptionItemMinAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicineName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
  }

  export type PrescriptionItemMaxAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicineName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
  }

  export type PrescriptionItemCountAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicineName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    _all?: true
  }

  export type PrescriptionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionItem to aggregate.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrescriptionItems
    **/
    _count?: true | PrescriptionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionItemMaxAggregateInputType
  }

  export type GetPrescriptionItemAggregateType<T extends PrescriptionItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescriptionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescriptionItem[P]>
      : GetScalarType<T[P], AggregatePrescriptionItem[P]>
  }




  export type PrescriptionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionItemWhereInput
    orderBy?: PrescriptionItemOrderByWithAggregationInput | PrescriptionItemOrderByWithAggregationInput[]
    by: PrescriptionItemScalarFieldEnum[] | PrescriptionItemScalarFieldEnum
    having?: PrescriptionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionItemCountAggregateInputType | true
    _avg?: PrescriptionItemAvgAggregateInputType
    _sum?: PrescriptionItemSumAggregateInputType
    _min?: PrescriptionItemMinAggregateInputType
    _max?: PrescriptionItemMaxAggregateInputType
  }

  export type PrescriptionItemGroupByOutputType = {
    id: number
    prescriptionId: number
    medicineName: string
    dosage: string
    frequency: string
    duration: string
    instructions: string | null
    _count: PrescriptionItemCountAggregateOutputType | null
    _avg: PrescriptionItemAvgAggregateOutputType | null
    _sum: PrescriptionItemSumAggregateOutputType | null
    _min: PrescriptionItemMinAggregateOutputType | null
    _max: PrescriptionItemMaxAggregateOutputType | null
  }

  type GetPrescriptionItemGroupByPayload<T extends PrescriptionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionItemGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionItemGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionItem"]>

  export type PrescriptionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionItem"]>

  export type PrescriptionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionItem"]>

  export type PrescriptionItemSelectScalar = {
    id?: boolean
    prescriptionId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
  }

  export type PrescriptionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prescriptionId" | "medicineName" | "dosage" | "frequency" | "duration" | "instructions", ExtArgs["result"]["prescriptionItem"]>
  export type PrescriptionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }
  export type PrescriptionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }
  export type PrescriptionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }

  export type $PrescriptionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrescriptionItem"
    objects: {
      prescription: Prisma.$PrescriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prescriptionId: number
      medicineName: string
      dosage: string
      frequency: string
      duration: string
      instructions: string | null
    }, ExtArgs["result"]["prescriptionItem"]>
    composites: {}
  }

  type PrescriptionItemGetPayload<S extends boolean | null | undefined | PrescriptionItemDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionItemPayload, S>

  type PrescriptionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionItemCountAggregateInputType | true
    }

  export interface PrescriptionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrescriptionItem'], meta: { name: 'PrescriptionItem' } }
    /**
     * Find zero or one PrescriptionItem that matches the filter.
     * @param {PrescriptionItemFindUniqueArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionItemFindUniqueArgs>(args: SelectSubset<T, PrescriptionItemFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrescriptionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionItemFindUniqueOrThrowArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemFindFirstArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionItemFindFirstArgs>(args?: SelectSubset<T, PrescriptionItemFindFirstArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemFindFirstOrThrowArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrescriptionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrescriptionItems
     * const prescriptionItems = await prisma.prescriptionItem.findMany()
     * 
     * // Get first 10 PrescriptionItems
     * const prescriptionItems = await prisma.prescriptionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionItemWithIdOnly = await prisma.prescriptionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionItemFindManyArgs>(args?: SelectSubset<T, PrescriptionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrescriptionItem.
     * @param {PrescriptionItemCreateArgs} args - Arguments to create a PrescriptionItem.
     * @example
     * // Create one PrescriptionItem
     * const PrescriptionItem = await prisma.prescriptionItem.create({
     *   data: {
     *     // ... data to create a PrescriptionItem
     *   }
     * })
     * 
     */
    create<T extends PrescriptionItemCreateArgs>(args: SelectSubset<T, PrescriptionItemCreateArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrescriptionItems.
     * @param {PrescriptionItemCreateManyArgs} args - Arguments to create many PrescriptionItems.
     * @example
     * // Create many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionItemCreateManyArgs>(args?: SelectSubset<T, PrescriptionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrescriptionItems and returns the data saved in the database.
     * @param {PrescriptionItemCreateManyAndReturnArgs} args - Arguments to create many PrescriptionItems.
     * @example
     * // Create many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrescriptionItems and only return the `id`
     * const prescriptionItemWithIdOnly = await prisma.prescriptionItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrescriptionItem.
     * @param {PrescriptionItemDeleteArgs} args - Arguments to delete one PrescriptionItem.
     * @example
     * // Delete one PrescriptionItem
     * const PrescriptionItem = await prisma.prescriptionItem.delete({
     *   where: {
     *     // ... filter to delete one PrescriptionItem
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionItemDeleteArgs>(args: SelectSubset<T, PrescriptionItemDeleteArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrescriptionItem.
     * @param {PrescriptionItemUpdateArgs} args - Arguments to update one PrescriptionItem.
     * @example
     * // Update one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionItemUpdateArgs>(args: SelectSubset<T, PrescriptionItemUpdateArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrescriptionItems.
     * @param {PrescriptionItemDeleteManyArgs} args - Arguments to filter PrescriptionItems to delete.
     * @example
     * // Delete a few PrescriptionItems
     * const { count } = await prisma.prescriptionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionItemDeleteManyArgs>(args?: SelectSubset<T, PrescriptionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionItemUpdateManyArgs>(args: SelectSubset<T, PrescriptionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionItems and returns the data updated in the database.
     * @param {PrescriptionItemUpdateManyAndReturnArgs} args - Arguments to update many PrescriptionItems.
     * @example
     * // Update many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrescriptionItems and only return the `id`
     * const prescriptionItemWithIdOnly = await prisma.prescriptionItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrescriptionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrescriptionItem.
     * @param {PrescriptionItemUpsertArgs} args - Arguments to update or create a PrescriptionItem.
     * @example
     * // Update or create a PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.upsert({
     *   create: {
     *     // ... data to create a PrescriptionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrescriptionItem we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionItemUpsertArgs>(args: SelectSubset<T, PrescriptionItemUpsertArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrescriptionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemCountArgs} args - Arguments to filter PrescriptionItems to count.
     * @example
     * // Count the number of PrescriptionItems
     * const count = await prisma.prescriptionItem.count({
     *   where: {
     *     // ... the filter for the PrescriptionItems we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionItemCountArgs>(
      args?: Subset<T, PrescriptionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrescriptionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionItemAggregateArgs>(args: Subset<T, PrescriptionItemAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionItemAggregateType<T>>

    /**
     * Group by PrescriptionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionItemGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrescriptionItem model
   */
  readonly fields: PrescriptionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrescriptionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescription<T extends PrescriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionDefaultArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrescriptionItem model
   */
  interface PrescriptionItemFieldRefs {
    readonly id: FieldRef<"PrescriptionItem", 'Int'>
    readonly prescriptionId: FieldRef<"PrescriptionItem", 'Int'>
    readonly medicineName: FieldRef<"PrescriptionItem", 'String'>
    readonly dosage: FieldRef<"PrescriptionItem", 'String'>
    readonly frequency: FieldRef<"PrescriptionItem", 'String'>
    readonly duration: FieldRef<"PrescriptionItem", 'String'>
    readonly instructions: FieldRef<"PrescriptionItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrescriptionItem findUnique
   */
  export type PrescriptionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem findUniqueOrThrow
   */
  export type PrescriptionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem findFirst
   */
  export type PrescriptionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionItems.
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionItems.
     */
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * PrescriptionItem findFirstOrThrow
   */
  export type PrescriptionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionItems.
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionItems.
     */
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * PrescriptionItem findMany
   */
  export type PrescriptionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItems to fetch.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrescriptionItems.
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * PrescriptionItem create
   */
  export type PrescriptionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PrescriptionItem.
     */
    data: XOR<PrescriptionItemCreateInput, PrescriptionItemUncheckedCreateInput>
  }

  /**
   * PrescriptionItem createMany
   */
  export type PrescriptionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrescriptionItems.
     */
    data: PrescriptionItemCreateManyInput | PrescriptionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrescriptionItem createManyAndReturn
   */
  export type PrescriptionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * The data used to create many PrescriptionItems.
     */
    data: PrescriptionItemCreateManyInput | PrescriptionItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionItem update
   */
  export type PrescriptionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PrescriptionItem.
     */
    data: XOR<PrescriptionItemUpdateInput, PrescriptionItemUncheckedUpdateInput>
    /**
     * Choose, which PrescriptionItem to update.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem updateMany
   */
  export type PrescriptionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrescriptionItems.
     */
    data: XOR<PrescriptionItemUpdateManyMutationInput, PrescriptionItemUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionItems to update
     */
    where?: PrescriptionItemWhereInput
    /**
     * Limit how many PrescriptionItems to update.
     */
    limit?: number
  }

  /**
   * PrescriptionItem updateManyAndReturn
   */
  export type PrescriptionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * The data used to update PrescriptionItems.
     */
    data: XOR<PrescriptionItemUpdateManyMutationInput, PrescriptionItemUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionItems to update
     */
    where?: PrescriptionItemWhereInput
    /**
     * Limit how many PrescriptionItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionItem upsert
   */
  export type PrescriptionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PrescriptionItem to update in case it exists.
     */
    where: PrescriptionItemWhereUniqueInput
    /**
     * In case the PrescriptionItem found by the `where` argument doesn't exist, create a new PrescriptionItem with this data.
     */
    create: XOR<PrescriptionItemCreateInput, PrescriptionItemUncheckedCreateInput>
    /**
     * In case the PrescriptionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionItemUpdateInput, PrescriptionItemUncheckedUpdateInput>
  }

  /**
   * PrescriptionItem delete
   */
  export type PrescriptionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter which PrescriptionItem to delete.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem deleteMany
   */
  export type PrescriptionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionItems to delete
     */
    where?: PrescriptionItemWhereInput
    /**
     * Limit how many PrescriptionItems to delete.
     */
    limit?: number
  }

  /**
   * PrescriptionItem without action
   */
  export type PrescriptionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    address: 'address',
    bloodGroup: 'bloodGroup',
    allergies: 'allergies',
    existingConditions: 'existingConditions',
    emergencyContactName: 'emergencyContactName',
    emergencyContactPhone: 'emergencyContactPhone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    appointmentDate: 'appointmentDate',
    time: 'time',
    type: 'type',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const MedicalVisitScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    visitDate: 'visitDate',
    chiefComplaint: 'chiefComplaint',
    symptoms: 'symptoms',
    bloodPressure: 'bloodPressure',
    heartRate: 'heartRate',
    temperature: 'temperature',
    weight: 'weight',
    diagnosis: 'diagnosis',
    treatmentPlan: 'treatmentPlan',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type MedicalVisitScalarFieldEnum = (typeof MedicalVisitScalarFieldEnum)[keyof typeof MedicalVisitScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    visitId: 'visitId',
    prescribedDate: 'prescribedDate',
    notes: 'notes'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const PrescriptionItemScalarFieldEnum: {
    id: 'id',
    prescriptionId: 'prescriptionId',
    medicineName: 'medicineName',
    dosage: 'dosage',
    frequency: 'frequency',
    duration: 'duration',
    instructions: 'instructions'
  };

  export type PrescriptionItemScalarFieldEnum = (typeof PrescriptionItemScalarFieldEnum)[keyof typeof PrescriptionItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    appointments?: AppointmentListRelationFilter
    visits?: MedicalVisitListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    visits?: MedicalVisitOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    appointments?: AppointmentListRelationFilter
    visits?: MedicalVisitListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    patientId?: StringFilter<"Patient"> | string
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    phone?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: EnumBloodGroupNullableFilter<"Patient"> | $Enums.BloodGroup | null
    allergies?: StringNullableFilter<"Patient"> | string | null
    existingConditions?: StringNullableFilter<"Patient"> | string | null
    emergencyContactName?: StringNullableFilter<"Patient"> | string | null
    emergencyContactPhone?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    appointments?: AppointmentListRelationFilter
    visits?: MedicalVisitListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    existingConditions?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    visits?: MedicalVisitOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patientId?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    phone?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: EnumBloodGroupNullableFilter<"Patient"> | $Enums.BloodGroup | null
    allergies?: StringNullableFilter<"Patient"> | string | null
    existingConditions?: StringNullableFilter<"Patient"> | string | null
    emergencyContactName?: StringNullableFilter<"Patient"> | string | null
    emergencyContactPhone?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    appointments?: AppointmentListRelationFilter
    visits?: MedicalVisitListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }, "id" | "patientId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    existingConditions?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    patientId?: StringWithAggregatesFilter<"Patient"> | string
    firstName?: StringWithAggregatesFilter<"Patient"> | string
    lastName?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"Patient"> | $Enums.Gender
    phone?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    bloodGroup?: EnumBloodGroupNullableWithAggregatesFilter<"Patient"> | $Enums.BloodGroup | null
    allergies?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    existingConditions?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    emergencyContactName?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    emergencyContactPhone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    time?: StringNullableFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentDate?: SortOrder
    time?: SortOrderInput | SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    time?: StringNullableFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentDate?: SortOrder
    time?: SortOrderInput | SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    patientId?: IntWithAggregatesFilter<"Appointment"> | number
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    appointmentDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    time?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type MedicalVisitWhereInput = {
    AND?: MedicalVisitWhereInput | MedicalVisitWhereInput[]
    OR?: MedicalVisitWhereInput[]
    NOT?: MedicalVisitWhereInput | MedicalVisitWhereInput[]
    id?: IntFilter<"MedicalVisit"> | number
    patientId?: IntFilter<"MedicalVisit"> | number
    doctorId?: IntFilter<"MedicalVisit"> | number
    visitDate?: DateTimeFilter<"MedicalVisit"> | Date | string
    chiefComplaint?: StringFilter<"MedicalVisit"> | string
    symptoms?: StringNullableFilter<"MedicalVisit"> | string | null
    bloodPressure?: StringNullableFilter<"MedicalVisit"> | string | null
    heartRate?: IntNullableFilter<"MedicalVisit"> | number | null
    temperature?: DecimalNullableFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    diagnosis?: StringNullableFilter<"MedicalVisit"> | string | null
    treatmentPlan?: StringNullableFilter<"MedicalVisit"> | string | null
    notes?: StringNullableFilter<"MedicalVisit"> | string | null
    createdAt?: DateTimeFilter<"MedicalVisit"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
  }

  export type MedicalVisitOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitDate?: SortOrder
    chiefComplaint?: SortOrder
    symptoms?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    diagnosis?: SortOrderInput | SortOrder
    treatmentPlan?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
    prescription?: PrescriptionOrderByWithRelationInput
  }

  export type MedicalVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalVisitWhereInput | MedicalVisitWhereInput[]
    OR?: MedicalVisitWhereInput[]
    NOT?: MedicalVisitWhereInput | MedicalVisitWhereInput[]
    patientId?: IntFilter<"MedicalVisit"> | number
    doctorId?: IntFilter<"MedicalVisit"> | number
    visitDate?: DateTimeFilter<"MedicalVisit"> | Date | string
    chiefComplaint?: StringFilter<"MedicalVisit"> | string
    symptoms?: StringNullableFilter<"MedicalVisit"> | string | null
    bloodPressure?: StringNullableFilter<"MedicalVisit"> | string | null
    heartRate?: IntNullableFilter<"MedicalVisit"> | number | null
    temperature?: DecimalNullableFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    diagnosis?: StringNullableFilter<"MedicalVisit"> | string | null
    treatmentPlan?: StringNullableFilter<"MedicalVisit"> | string | null
    notes?: StringNullableFilter<"MedicalVisit"> | string | null
    createdAt?: DateTimeFilter<"MedicalVisit"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
  }, "id">

  export type MedicalVisitOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitDate?: SortOrder
    chiefComplaint?: SortOrder
    symptoms?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    diagnosis?: SortOrderInput | SortOrder
    treatmentPlan?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MedicalVisitCountOrderByAggregateInput
    _avg?: MedicalVisitAvgOrderByAggregateInput
    _max?: MedicalVisitMaxOrderByAggregateInput
    _min?: MedicalVisitMinOrderByAggregateInput
    _sum?: MedicalVisitSumOrderByAggregateInput
  }

  export type MedicalVisitScalarWhereWithAggregatesInput = {
    AND?: MedicalVisitScalarWhereWithAggregatesInput | MedicalVisitScalarWhereWithAggregatesInput[]
    OR?: MedicalVisitScalarWhereWithAggregatesInput[]
    NOT?: MedicalVisitScalarWhereWithAggregatesInput | MedicalVisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalVisit"> | number
    patientId?: IntWithAggregatesFilter<"MedicalVisit"> | number
    doctorId?: IntWithAggregatesFilter<"MedicalVisit"> | number
    visitDate?: DateTimeWithAggregatesFilter<"MedicalVisit"> | Date | string
    chiefComplaint?: StringWithAggregatesFilter<"MedicalVisit"> | string
    symptoms?: StringNullableWithAggregatesFilter<"MedicalVisit"> | string | null
    bloodPressure?: StringNullableWithAggregatesFilter<"MedicalVisit"> | string | null
    heartRate?: IntNullableWithAggregatesFilter<"MedicalVisit"> | number | null
    temperature?: DecimalNullableWithAggregatesFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableWithAggregatesFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    diagnosis?: StringNullableWithAggregatesFilter<"MedicalVisit"> | string | null
    treatmentPlan?: StringNullableWithAggregatesFilter<"MedicalVisit"> | string | null
    notes?: StringNullableWithAggregatesFilter<"MedicalVisit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicalVisit"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: IntFilter<"Prescription"> | number
    patientId?: IntFilter<"Prescription"> | number
    doctorId?: IntFilter<"Prescription"> | number
    visitId?: IntFilter<"Prescription"> | number
    prescribedDate?: DateTimeFilter<"Prescription"> | Date | string
    notes?: StringNullableFilter<"Prescription"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    visit?: XOR<MedicalVisitScalarRelationFilter, MedicalVisitWhereInput>
    items?: PrescriptionItemListRelationFilter
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitId?: SortOrder
    prescribedDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
    visit?: MedicalVisitOrderByWithRelationInput
    items?: PrescriptionItemOrderByRelationAggregateInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    visitId?: number
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    patientId?: IntFilter<"Prescription"> | number
    doctorId?: IntFilter<"Prescription"> | number
    prescribedDate?: DateTimeFilter<"Prescription"> | Date | string
    notes?: StringNullableFilter<"Prescription"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    visit?: XOR<MedicalVisitScalarRelationFilter, MedicalVisitWhereInput>
    items?: PrescriptionItemListRelationFilter
  }, "id" | "visitId">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitId?: SortOrder
    prescribedDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _avg?: PrescriptionAvgOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
    _sum?: PrescriptionSumOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prescription"> | number
    patientId?: IntWithAggregatesFilter<"Prescription"> | number
    doctorId?: IntWithAggregatesFilter<"Prescription"> | number
    visitId?: IntWithAggregatesFilter<"Prescription"> | number
    prescribedDate?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
  }

  export type PrescriptionItemWhereInput = {
    AND?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    OR?: PrescriptionItemWhereInput[]
    NOT?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    id?: IntFilter<"PrescriptionItem"> | number
    prescriptionId?: IntFilter<"PrescriptionItem"> | number
    medicineName?: StringFilter<"PrescriptionItem"> | string
    dosage?: StringFilter<"PrescriptionItem"> | string
    frequency?: StringFilter<"PrescriptionItem"> | string
    duration?: StringFilter<"PrescriptionItem"> | string
    instructions?: StringNullableFilter<"PrescriptionItem"> | string | null
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
  }

  export type PrescriptionItemOrderByWithRelationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrderInput | SortOrder
    prescription?: PrescriptionOrderByWithRelationInput
  }

  export type PrescriptionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    OR?: PrescriptionItemWhereInput[]
    NOT?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    prescriptionId?: IntFilter<"PrescriptionItem"> | number
    medicineName?: StringFilter<"PrescriptionItem"> | string
    dosage?: StringFilter<"PrescriptionItem"> | string
    frequency?: StringFilter<"PrescriptionItem"> | string
    duration?: StringFilter<"PrescriptionItem"> | string
    instructions?: StringNullableFilter<"PrescriptionItem"> | string | null
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
  }, "id">

  export type PrescriptionItemOrderByWithAggregationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrderInput | SortOrder
    _count?: PrescriptionItemCountOrderByAggregateInput
    _avg?: PrescriptionItemAvgOrderByAggregateInput
    _max?: PrescriptionItemMaxOrderByAggregateInput
    _min?: PrescriptionItemMinOrderByAggregateInput
    _sum?: PrescriptionItemSumOrderByAggregateInput
  }

  export type PrescriptionItemScalarWhereWithAggregatesInput = {
    AND?: PrescriptionItemScalarWhereWithAggregatesInput | PrescriptionItemScalarWhereWithAggregatesInput[]
    OR?: PrescriptionItemScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionItemScalarWhereWithAggregatesInput | PrescriptionItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrescriptionItem"> | number
    prescriptionId?: IntWithAggregatesFilter<"PrescriptionItem"> | number
    medicineName?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    dosage?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    frequency?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    duration?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    instructions?: StringNullableWithAggregatesFilter<"PrescriptionItem"> | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    visits?: MedicalVisitCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    visits?: MedicalVisitUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    visits?: MedicalVisitUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    visits?: MedicalVisitUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    visits?: MedicalVisitCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    visits?: MedicalVisitUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    visits?: MedicalVisitUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    visits?: MedicalVisitUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId: number
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: number
    patientId: number
    doctorId: number
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalVisitCreateInput = {
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutVisitsInput
    doctor: UserCreateNestedOneWithoutVisitsInput
    prescription?: PrescriptionCreateNestedOneWithoutVisitInput
  }

  export type MedicalVisitUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId: number
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutVisitInput
  }

  export type MedicalVisitUpdateInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutVisitsNestedInput
    doctor?: UserUpdateOneRequiredWithoutVisitsNestedInput
    prescription?: PrescriptionUpdateOneWithoutVisitNestedInput
  }

  export type MedicalVisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescription?: PrescriptionUncheckedUpdateOneWithoutVisitNestedInput
  }

  export type MedicalVisitCreateManyInput = {
    id?: number
    patientId: number
    doctorId: number
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type MedicalVisitUpdateManyMutationInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalVisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    prescribedDate?: Date | string
    notes?: string | null
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: UserCreateNestedOneWithoutPrescriptionsInput
    visit: MedicalVisitCreateNestedOneWithoutPrescriptionInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId: number
    visitId: number
    prescribedDate?: Date | string
    notes?: string | null
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUpdateInput = {
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsNestedInput
    visit?: MedicalVisitUpdateOneRequiredWithoutPrescriptionNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionCreateManyInput = {
    id?: number
    patientId: number
    doctorId: number
    visitId: number
    prescribedDate?: Date | string
    notes?: string | null
  }

  export type PrescriptionUpdateManyMutationInput = {
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionItemCreateInput = {
    medicineName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    prescription: PrescriptionCreateNestedOneWithoutItemsInput
  }

  export type PrescriptionItemUncheckedCreateInput = {
    id?: number
    prescriptionId: number
    medicineName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
  }

  export type PrescriptionItemUpdateInput = {
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: PrescriptionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PrescriptionItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prescriptionId?: IntFieldUpdateOperationsInput | number
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionItemCreateManyInput = {
    id?: number
    prescriptionId: number
    medicineName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
  }

  export type PrescriptionItemUpdateManyMutationInput = {
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prescriptionId?: IntFieldUpdateOperationsInput | number
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type MedicalVisitListRelationFilter = {
    every?: MedicalVisitWhereInput
    some?: MedicalVisitWhereInput
    none?: MedicalVisitWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    bloodGroup?: SortOrder
    allergies?: SortOrder
    existingConditions?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    bloodGroup?: SortOrder
    allergies?: SortOrder
    existingConditions?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    bloodGroup?: SortOrder
    allergies?: SortOrder
    existingConditions?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentDate?: SortOrder
    time?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentDate?: SortOrder
    time?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentDate?: SortOrder
    time?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PrescriptionNullableScalarRelationFilter = {
    is?: PrescriptionWhereInput | null
    isNot?: PrescriptionWhereInput | null
  }

  export type MedicalVisitCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitDate?: SortOrder
    chiefComplaint?: SortOrder
    symptoms?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    diagnosis?: SortOrder
    treatmentPlan?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalVisitAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
  }

  export type MedicalVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitDate?: SortOrder
    chiefComplaint?: SortOrder
    symptoms?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    diagnosis?: SortOrder
    treatmentPlan?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalVisitMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitDate?: SortOrder
    chiefComplaint?: SortOrder
    symptoms?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    diagnosis?: SortOrder
    treatmentPlan?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalVisitSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type MedicalVisitScalarRelationFilter = {
    is?: MedicalVisitWhereInput
    isNot?: MedicalVisitWhereInput
  }

  export type PrescriptionItemListRelationFilter = {
    every?: PrescriptionItemWhereInput
    some?: PrescriptionItemWhereInput
    none?: PrescriptionItemWhereInput
  }

  export type PrescriptionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitId?: SortOrder
    prescribedDate?: SortOrder
    notes?: SortOrder
  }

  export type PrescriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitId?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitId?: SortOrder
    prescribedDate?: SortOrder
    notes?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitId?: SortOrder
    prescribedDate?: SortOrder
    notes?: SortOrder
  }

  export type PrescriptionSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    visitId?: SortOrder
  }

  export type PrescriptionScalarRelationFilter = {
    is?: PrescriptionWhereInput
    isNot?: PrescriptionWhereInput
  }

  export type PrescriptionItemCountOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
  }

  export type PrescriptionItemAvgOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
  }

  export type PrescriptionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
  }

  export type PrescriptionItemMinOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
  }

  export type PrescriptionItemSumOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalVisitCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalVisitCreateWithoutDoctorInput, MedicalVisitUncheckedCreateWithoutDoctorInput> | MedicalVisitCreateWithoutDoctorInput[] | MedicalVisitUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutDoctorInput | MedicalVisitCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalVisitCreateManyDoctorInputEnvelope
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalVisitUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalVisitCreateWithoutDoctorInput, MedicalVisitUncheckedCreateWithoutDoctorInput> | MedicalVisitCreateWithoutDoctorInput[] | MedicalVisitUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutDoctorInput | MedicalVisitCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalVisitCreateManyDoctorInputEnvelope
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalVisitUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalVisitCreateWithoutDoctorInput, MedicalVisitUncheckedCreateWithoutDoctorInput> | MedicalVisitCreateWithoutDoctorInput[] | MedicalVisitUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutDoctorInput | MedicalVisitCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalVisitUpsertWithWhereUniqueWithoutDoctorInput | MedicalVisitUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalVisitCreateManyDoctorInputEnvelope
    set?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    disconnect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    delete?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    update?: MedicalVisitUpdateWithWhereUniqueWithoutDoctorInput | MedicalVisitUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalVisitUpdateManyWithWhereWithoutDoctorInput | MedicalVisitUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalVisitScalarWhereInput | MedicalVisitScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalVisitUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalVisitCreateWithoutDoctorInput, MedicalVisitUncheckedCreateWithoutDoctorInput> | MedicalVisitCreateWithoutDoctorInput[] | MedicalVisitUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutDoctorInput | MedicalVisitCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalVisitUpsertWithWhereUniqueWithoutDoctorInput | MedicalVisitUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalVisitCreateManyDoctorInputEnvelope
    set?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    disconnect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    delete?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    update?: MedicalVisitUpdateWithWhereUniqueWithoutDoctorInput | MedicalVisitUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalVisitUpdateManyWithWhereWithoutDoctorInput | MedicalVisitUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalVisitScalarWhereInput | MedicalVisitScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalVisitCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalVisitCreateWithoutPatientInput, MedicalVisitUncheckedCreateWithoutPatientInput> | MedicalVisitCreateWithoutPatientInput[] | MedicalVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutPatientInput | MedicalVisitCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalVisitCreateManyPatientInputEnvelope
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalVisitUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalVisitCreateWithoutPatientInput, MedicalVisitUncheckedCreateWithoutPatientInput> | MedicalVisitCreateWithoutPatientInput[] | MedicalVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutPatientInput | MedicalVisitCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalVisitCreateManyPatientInputEnvelope
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup | null
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalVisitUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalVisitCreateWithoutPatientInput, MedicalVisitUncheckedCreateWithoutPatientInput> | MedicalVisitCreateWithoutPatientInput[] | MedicalVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutPatientInput | MedicalVisitCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalVisitUpsertWithWhereUniqueWithoutPatientInput | MedicalVisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalVisitCreateManyPatientInputEnvelope
    set?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    disconnect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    delete?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    update?: MedicalVisitUpdateWithWhereUniqueWithoutPatientInput | MedicalVisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalVisitUpdateManyWithWhereWithoutPatientInput | MedicalVisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalVisitScalarWhereInput | MedicalVisitScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalVisitUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalVisitCreateWithoutPatientInput, MedicalVisitUncheckedCreateWithoutPatientInput> | MedicalVisitCreateWithoutPatientInput[] | MedicalVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutPatientInput | MedicalVisitCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalVisitUpsertWithWhereUniqueWithoutPatientInput | MedicalVisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalVisitCreateManyPatientInputEnvelope
    set?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    disconnect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    delete?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    connect?: MedicalVisitWhereUniqueInput | MedicalVisitWhereUniqueInput[]
    update?: MedicalVisitUpdateWithWhereUniqueWithoutPatientInput | MedicalVisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalVisitUpdateManyWithWhereWithoutPatientInput | MedicalVisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalVisitScalarWhereInput | MedicalVisitScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientCreateNestedOneWithoutVisitsInput = {
    create?: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVisitsInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type PrescriptionCreateNestedOneWithoutVisitInput = {
    create?: XOR<PrescriptionCreateWithoutVisitInput, PrescriptionUncheckedCreateWithoutVisitInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutVisitInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type PrescriptionUncheckedCreateNestedOneWithoutVisitInput = {
    create?: XOR<PrescriptionCreateWithoutVisitInput, PrescriptionUncheckedCreateWithoutVisitInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutVisitInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PatientUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitsInput
    upsert?: PatientUpsertWithoutVisitsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutVisitsInput, PatientUpdateWithoutVisitsInput>, PatientUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    upsert?: UserUpsertWithoutVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitsInput, UserUpdateWithoutVisitsInput>, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type PrescriptionUpdateOneWithoutVisitNestedInput = {
    create?: XOR<PrescriptionCreateWithoutVisitInput, PrescriptionUncheckedCreateWithoutVisitInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutVisitInput
    upsert?: PrescriptionUpsertWithoutVisitInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutVisitInput, PrescriptionUpdateWithoutVisitInput>, PrescriptionUncheckedUpdateWithoutVisitInput>
  }

  export type PrescriptionUncheckedUpdateOneWithoutVisitNestedInput = {
    create?: XOR<PrescriptionCreateWithoutVisitInput, PrescriptionUncheckedCreateWithoutVisitInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutVisitInput
    upsert?: PrescriptionUpsertWithoutVisitInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutVisitInput, PrescriptionUpdateWithoutVisitInput>, PrescriptionUncheckedUpdateWithoutVisitInput>
  }

  export type PatientCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<UserCreateWithoutPrescriptionsInput, UserUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicalVisitCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<MedicalVisitCreateWithoutPrescriptionInput, MedicalVisitUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutPrescriptionInput
    connect?: MedicalVisitWhereUniqueInput
  }

  export type PrescriptionItemCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
  }

  export type PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    upsert?: PatientUpsertWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPrescriptionsInput, PatientUpdateWithoutPrescriptionsInput>, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type UserUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<UserCreateWithoutPrescriptionsInput, UserUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsInput
    upsert?: UserUpsertWithoutPrescriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrescriptionsInput, UserUpdateWithoutPrescriptionsInput>, UserUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicalVisitUpdateOneRequiredWithoutPrescriptionNestedInput = {
    create?: XOR<MedicalVisitCreateWithoutPrescriptionInput, MedicalVisitUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: MedicalVisitCreateOrConnectWithoutPrescriptionInput
    upsert?: MedicalVisitUpsertWithoutPrescriptionInput
    connect?: MedicalVisitWhereUniqueInput
    update?: XOR<XOR<MedicalVisitUpdateToOneWithWhereWithoutPrescriptionInput, MedicalVisitUpdateWithoutPrescriptionInput>, MedicalVisitUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PrescriptionItemUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    set?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    disconnect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    delete?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    update?: PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
  }

  export type PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    set?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    disconnect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    delete?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    update?: PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
  }

  export type PrescriptionCreateNestedOneWithoutItemsInput = {
    create?: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutItemsInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type PrescriptionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutItemsInput
    upsert?: PrescriptionUpsertWithoutItemsInput
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutItemsInput, PrescriptionUpdateWithoutItemsInput>, PrescriptionUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type MedicalVisitCreateWithoutDoctorInput = {
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutVisitsInput
    prescription?: PrescriptionCreateNestedOneWithoutVisitInput
  }

  export type MedicalVisitUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutVisitInput
  }

  export type MedicalVisitCreateOrConnectWithoutDoctorInput = {
    where: MedicalVisitWhereUniqueInput
    create: XOR<MedicalVisitCreateWithoutDoctorInput, MedicalVisitUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalVisitCreateManyDoctorInputEnvelope = {
    data: MedicalVisitCreateManyDoctorInput | MedicalVisitCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    prescribedDate?: Date | string
    notes?: string | null
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    visit: MedicalVisitCreateNestedOneWithoutPrescriptionInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    visitId: number
    prescribedDate?: Date | string
    notes?: string | null
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    time?: StringNullableFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type MedicalVisitUpsertWithWhereUniqueWithoutDoctorInput = {
    where: MedicalVisitWhereUniqueInput
    update: XOR<MedicalVisitUpdateWithoutDoctorInput, MedicalVisitUncheckedUpdateWithoutDoctorInput>
    create: XOR<MedicalVisitCreateWithoutDoctorInput, MedicalVisitUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalVisitUpdateWithWhereUniqueWithoutDoctorInput = {
    where: MedicalVisitWhereUniqueInput
    data: XOR<MedicalVisitUpdateWithoutDoctorInput, MedicalVisitUncheckedUpdateWithoutDoctorInput>
  }

  export type MedicalVisitUpdateManyWithWhereWithoutDoctorInput = {
    where: MedicalVisitScalarWhereInput
    data: XOR<MedicalVisitUpdateManyMutationInput, MedicalVisitUncheckedUpdateManyWithoutDoctorInput>
  }

  export type MedicalVisitScalarWhereInput = {
    AND?: MedicalVisitScalarWhereInput | MedicalVisitScalarWhereInput[]
    OR?: MedicalVisitScalarWhereInput[]
    NOT?: MedicalVisitScalarWhereInput | MedicalVisitScalarWhereInput[]
    id?: IntFilter<"MedicalVisit"> | number
    patientId?: IntFilter<"MedicalVisit"> | number
    doctorId?: IntFilter<"MedicalVisit"> | number
    visitDate?: DateTimeFilter<"MedicalVisit"> | Date | string
    chiefComplaint?: StringFilter<"MedicalVisit"> | string
    symptoms?: StringNullableFilter<"MedicalVisit"> | string | null
    bloodPressure?: StringNullableFilter<"MedicalVisit"> | string | null
    heartRate?: IntNullableFilter<"MedicalVisit"> | number | null
    temperature?: DecimalNullableFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"MedicalVisit"> | Decimal | DecimalJsLike | number | string | null
    diagnosis?: StringNullableFilter<"MedicalVisit"> | string | null
    treatmentPlan?: StringNullableFilter<"MedicalVisit"> | string | null
    notes?: StringNullableFilter<"MedicalVisit"> | string | null
    createdAt?: DateTimeFilter<"MedicalVisit"> | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: IntFilter<"Prescription"> | number
    patientId?: IntFilter<"Prescription"> | number
    doctorId?: IntFilter<"Prescription"> | number
    visitId?: IntFilter<"Prescription"> | number
    prescribedDate?: DateTimeFilter<"Prescription"> | Date | string
    notes?: StringNullableFilter<"Prescription"> | string | null
  }

  export type AppointmentCreateWithoutPatientInput = {
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicalVisitCreateWithoutPatientInput = {
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutVisitsInput
    prescription?: PrescriptionCreateNestedOneWithoutVisitInput
  }

  export type MedicalVisitUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutVisitInput
  }

  export type MedicalVisitCreateOrConnectWithoutPatientInput = {
    where: MedicalVisitWhereUniqueInput
    create: XOR<MedicalVisitCreateWithoutPatientInput, MedicalVisitUncheckedCreateWithoutPatientInput>
  }

  export type MedicalVisitCreateManyPatientInputEnvelope = {
    data: MedicalVisitCreateManyPatientInput | MedicalVisitCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutPatientInput = {
    prescribedDate?: Date | string
    notes?: string | null
    doctor: UserCreateNestedOneWithoutPrescriptionsInput
    visit: MedicalVisitCreateNestedOneWithoutPrescriptionInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    visitId: number
    prescribedDate?: Date | string
    notes?: string | null
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalVisitUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalVisitWhereUniqueInput
    update: XOR<MedicalVisitUpdateWithoutPatientInput, MedicalVisitUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalVisitCreateWithoutPatientInput, MedicalVisitUncheckedCreateWithoutPatientInput>
  }

  export type MedicalVisitUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalVisitWhereUniqueInput
    data: XOR<MedicalVisitUpdateWithoutPatientInput, MedicalVisitUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalVisitUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalVisitScalarWhereInput
    data: XOR<MedicalVisitUpdateManyMutationInput, MedicalVisitUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientCreateWithoutAppointmentsInput = {
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: MedicalVisitCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: MedicalVisitUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    visits?: MedicalVisitCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    visits?: MedicalVisitUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: MedicalVisitUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: MedicalVisitUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: MedicalVisitUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: MedicalVisitUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutVisitsInput = {
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutVisitsInput = {
    id?: number
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutVisitsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
  }

  export type UserCreateWithoutVisitsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutVisitsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
  }

  export type PrescriptionCreateWithoutVisitInput = {
    prescribedDate?: Date | string
    notes?: string | null
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: UserCreateNestedOneWithoutPrescriptionsInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutVisitInput = {
    id?: number
    patientId: number
    doctorId: number
    prescribedDate?: Date | string
    notes?: string | null
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutVisitInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutVisitInput, PrescriptionUncheckedCreateWithoutVisitInput>
  }

  export type PatientUpsertWithoutVisitsInput = {
    update: XOR<PatientUpdateWithoutVisitsInput, PatientUncheckedUpdateWithoutVisitsInput>
    create: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutVisitsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutVisitsInput, PatientUncheckedUpdateWithoutVisitsInput>
  }

  export type PatientUpdateWithoutVisitsInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutVisitsInput = {
    update: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateWithoutVisitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PrescriptionUpsertWithoutVisitInput = {
    update: XOR<PrescriptionUpdateWithoutVisitInput, PrescriptionUncheckedUpdateWithoutVisitInput>
    create: XOR<PrescriptionCreateWithoutVisitInput, PrescriptionUncheckedCreateWithoutVisitInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutVisitInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutVisitInput, PrescriptionUncheckedUpdateWithoutVisitInput>
  }

  export type PrescriptionUpdateWithoutVisitInput = {
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutVisitInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PatientCreateWithoutPrescriptionsInput = {
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    visits?: MedicalVisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPrescriptionsInput = {
    id?: number
    patientId: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phone: string
    email?: string | null
    address?: string | null
    bloodGroup?: $Enums.BloodGroup | null
    allergies?: string | null
    existingConditions?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    visits?: MedicalVisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPrescriptionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
  }

  export type UserCreateWithoutPrescriptionsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    visits?: MedicalVisitCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutPrescriptionsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    visits?: MedicalVisitUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutPrescriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrescriptionsInput, UserUncheckedCreateWithoutPrescriptionsInput>
  }

  export type MedicalVisitCreateWithoutPrescriptionInput = {
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutVisitsInput
    doctor: UserCreateNestedOneWithoutVisitsInput
  }

  export type MedicalVisitUncheckedCreateWithoutPrescriptionInput = {
    id?: number
    patientId: number
    doctorId: number
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type MedicalVisitCreateOrConnectWithoutPrescriptionInput = {
    where: MedicalVisitWhereUniqueInput
    create: XOR<MedicalVisitCreateWithoutPrescriptionInput, MedicalVisitUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionItemCreateWithoutPrescriptionInput = {
    medicineName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
  }

  export type PrescriptionItemUncheckedCreateWithoutPrescriptionInput = {
    id?: number
    medicineName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
  }

  export type PrescriptionItemCreateOrConnectWithoutPrescriptionInput = {
    where: PrescriptionItemWhereUniqueInput
    create: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionItemCreateManyPrescriptionInputEnvelope = {
    data: PrescriptionItemCreateManyPrescriptionInput | PrescriptionItemCreateManyPrescriptionInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutPrescriptionsInput = {
    update: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientUpdateWithoutPrescriptionsInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    visits?: MedicalVisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPrescriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    existingConditions?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    visits?: MedicalVisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutPrescriptionsInput = {
    update: XOR<UserUpdateWithoutPrescriptionsInput, UserUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<UserCreateWithoutPrescriptionsInput, UserUncheckedCreateWithoutPrescriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrescriptionsInput, UserUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type UserUpdateWithoutPrescriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    visits?: MedicalVisitUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutPrescriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    visits?: MedicalVisitUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type MedicalVisitUpsertWithoutPrescriptionInput = {
    update: XOR<MedicalVisitUpdateWithoutPrescriptionInput, MedicalVisitUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<MedicalVisitCreateWithoutPrescriptionInput, MedicalVisitUncheckedCreateWithoutPrescriptionInput>
    where?: MedicalVisitWhereInput
  }

  export type MedicalVisitUpdateToOneWithWhereWithoutPrescriptionInput = {
    where?: MedicalVisitWhereInput
    data: XOR<MedicalVisitUpdateWithoutPrescriptionInput, MedicalVisitUncheckedUpdateWithoutPrescriptionInput>
  }

  export type MedicalVisitUpdateWithoutPrescriptionInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutVisitsNestedInput
    doctor?: UserUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type MedicalVisitUncheckedUpdateWithoutPrescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionItemWhereUniqueInput
    update: XOR<PrescriptionItemUpdateWithoutPrescriptionInput, PrescriptionItemUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionItemWhereUniqueInput
    data: XOR<PrescriptionItemUpdateWithoutPrescriptionInput, PrescriptionItemUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput = {
    where: PrescriptionItemScalarWhereInput
    data: XOR<PrescriptionItemUpdateManyMutationInput, PrescriptionItemUncheckedUpdateManyWithoutPrescriptionInput>
  }

  export type PrescriptionItemScalarWhereInput = {
    AND?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
    OR?: PrescriptionItemScalarWhereInput[]
    NOT?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
    id?: IntFilter<"PrescriptionItem"> | number
    prescriptionId?: IntFilter<"PrescriptionItem"> | number
    medicineName?: StringFilter<"PrescriptionItem"> | string
    dosage?: StringFilter<"PrescriptionItem"> | string
    frequency?: StringFilter<"PrescriptionItem"> | string
    duration?: StringFilter<"PrescriptionItem"> | string
    instructions?: StringNullableFilter<"PrescriptionItem"> | string | null
  }

  export type PrescriptionCreateWithoutItemsInput = {
    prescribedDate?: Date | string
    notes?: string | null
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: UserCreateNestedOneWithoutPrescriptionsInput
    visit: MedicalVisitCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutItemsInput = {
    id?: number
    patientId: number
    doctorId: number
    visitId: number
    prescribedDate?: Date | string
    notes?: string | null
  }

  export type PrescriptionCreateOrConnectWithoutItemsInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
  }

  export type PrescriptionUpsertWithoutItemsInput = {
    update: XOR<PrescriptionUpdateWithoutItemsInput, PrescriptionUncheckedUpdateWithoutItemsInput>
    create: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutItemsInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutItemsInput, PrescriptionUncheckedUpdateWithoutItemsInput>
  }

  export type PrescriptionUpdateWithoutItemsInput = {
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsNestedInput
    visit?: MedicalVisitUpdateOneRequiredWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    patientId: number
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
  }

  export type MedicalVisitCreateManyDoctorInput = {
    id?: number
    patientId: number
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type PrescriptionCreateManyDoctorInput = {
    id?: number
    patientId: number
    visitId: number
    prescribedDate?: Date | string
    notes?: string | null
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalVisitUpdateWithoutDoctorInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutVisitsNestedInput
    prescription?: PrescriptionUpdateOneWithoutVisitNestedInput
  }

  export type MedicalVisitUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescription?: PrescriptionUncheckedUpdateOneWithoutVisitNestedInput
  }

  export type MedicalVisitUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    visit?: MedicalVisitUpdateOneRequiredWithoutPrescriptionNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyPatientInput = {
    id?: number
    doctorId: number
    appointmentDate: Date | string
    time?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
  }

  export type MedicalVisitCreateManyPatientInput = {
    id?: number
    doctorId: number
    visitDate: Date | string
    chiefComplaint: string
    symptoms?: string | null
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    diagnosis?: string | null
    treatmentPlan?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type PrescriptionCreateManyPatientInput = {
    id?: number
    doctorId: number
    visitId: number
    prescribedDate?: Date | string
    notes?: string | null
  }

  export type AppointmentUpdateWithoutPatientInput = {
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalVisitUpdateWithoutPatientInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutVisitsNestedInput
    prescription?: PrescriptionUpdateOneWithoutVisitNestedInput
  }

  export type MedicalVisitUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescription?: PrescriptionUncheckedUpdateOneWithoutVisitNestedInput
  }

  export type MedicalVisitUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chiefComplaint?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsNestedInput
    visit?: MedicalVisitUpdateOneRequiredWithoutPrescriptionNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    prescribedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionItemCreateManyPrescriptionInput = {
    id?: number
    medicineName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
  }

  export type PrescriptionItemUpdateWithoutPrescriptionInput = {
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionItemUncheckedUpdateWithoutPrescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionItemUncheckedUpdateManyWithoutPrescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
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