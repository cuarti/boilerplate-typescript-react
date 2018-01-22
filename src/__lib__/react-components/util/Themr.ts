
import {themr, IThemrOptions} from 'react-css-themr';


export function Themr(identifier: string | number | symbol, defaultTheme?: {}, options?: IThemrOptions): any {

	return (target: Function) => {
		return themr(identifier, defaultTheme, options)(target as any);
	};
}
