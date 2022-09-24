export namespace Deprecated {
  export const Method =
    (message?: string): MethodDecorator =>
    (target, prop, descriptor: TypedPropertyDescriptor<any>) => {
      const original = descriptor.value;
      descriptor.value = function (this: any, ...args: any[]) {
        process.emitWarning(
          `Method ${target.constructor.name}#${String(
            prop
          )} is deprecated and will be removed in a future release.${
            message ? message : ""
          }`,
          "DeprecationWarning"
        );
        return original.call(this, ...args);
      };

      return descriptor;
    };
}
