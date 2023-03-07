import { NavigationRouteProps, NavigationStackProps } from "../src/routes/app.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationStackProps { }
    interface RouteProp extends NavigationRouteProps<keyof NavigationStackProps> { }
  }
}