import 'styled-components';
import { ThemeInterface } from './theme.interface';

declare module 'styled-components' {

  export interface DefaultTheme extends ThemeInterface {}
}