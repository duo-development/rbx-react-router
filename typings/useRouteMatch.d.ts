import { PathMatchOptions, PathMatchResults } from "./Path";

export interface RouteMatchOptions extends PathMatchOptions {
  path: string;
}

declare function useRouteMatch(options: RouteMatchOptions): PathMatchResults;

export default useRouteMatch;
