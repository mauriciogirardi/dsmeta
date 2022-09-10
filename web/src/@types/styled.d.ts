import "styled-components";

import { darkTheme } from "../styles/theme/darkTheme";

type DarkTheme = typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends DarkTheme {}
}
