import { NavigationStackProps } from "../src/routes/app.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationStackProps { }
  }
}