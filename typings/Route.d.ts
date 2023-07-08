import React from "@rbxts/react-ts";

import { History, HistoryEntry } from "./History";
import { PathMatchResults } from "./Path";

export interface RouteRendererProps {
  match: PathMatchResults | undefined;
  location: HistoryEntry;
  history: History;
}

export interface RouteProps {
  path: string;
  exact?: boolean;
  alwaysRender?: boolean;

  render?: (rendererProps: RouteRendererProps) => React.Element | undefined;
  component?: React.Component<RouteRendererProps>;
}

declare class Route extends React.Component {
  constructor(props: RouteProps);
  public render(): React.Element | undefined;
}

export default Route;
