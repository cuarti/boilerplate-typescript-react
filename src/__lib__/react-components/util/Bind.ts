
/* tslint:disable:typedef no-invalid-this */

/**
 * Factory decorator used to bind the this to the decorated function.
 *
 * @return    a new descriptor representing the binded function.
 * @see        https://github.com/NoHomey/bind-decorator
 * @see        https://github.com/andreypopp/autobind-decorator
 */
export function Bind(): MethodDecorator {

	return function(target: Function, propertyKey: string, descriptor: TypedPropertyDescriptor<any>):
		TypedPropertyDescriptor<any> {

		// seems that the decorator is calling once for the class also, so this if is necessary to avoid bad bindings
		if(!descriptor || (typeof descriptor.value !== 'function')) {
			// throw new TypeError(`Only functions can be decorated with @bind. <${propertyKey}> is not a function!`);
			return;
		}

		return {
			configurable: true,
			get(this) {

				let bound = descriptor.value.bind(this);
				Object.defineProperty(this, propertyKey, {
					value: bound,
					configurable: true,
					writable: true
				});

				return bound;
			}
		};

	};

}
