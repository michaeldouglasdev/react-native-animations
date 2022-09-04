import { NavigationRouteProps, NavigationStackProps } from "../App";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationStackProps {}
    interface RouteProp extends NavigationRouteProps<keyof NavigationStackProps> {}
  }
}