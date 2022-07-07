// import {
//   FieldFunctionOptions,
//   ReadFieldOptions,
//   Reference,
//   StoreObject,
// } from '@apollo/client/cache';

// type DeepReference<X> = X extends Record<string, any>
//   ? X extends { id: string }
//     ? Reference
//     : {
//         [K in keyof X]: DeepReference<X[K]>;
//       }
//   : X extends Array<{ id: string }>
//   ? Array<Reference>
//   : X;

// export interface ReadFieldFunction {
//   <T, K extends keyof T = keyof T>(
//     context: FieldFunctionOptions,
//     options: ReadFieldOptions
//   ): DeepReference<T[K]>;

//   <T, K extends keyof T = keyof T>(
//     context: FieldFunctionOptions,
//     fieldName: K,
//     from?: Reference | StoreObject | undefined
//   ): DeepReference<T[K]>;
// }

// export const readField: ReadFieldFunction = (...args) => {
//   const [context, ...restArgs] = args;
//     return context.readField(...restArgs);
// };
