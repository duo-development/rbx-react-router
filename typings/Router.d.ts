import React from "@rbxts/react-ts";

import { History } from "./History";

interface RouterProps {
  history?: History;

  initialEntries?: Array<string>;
  initialIndex?: number;
}

declare class Router extends React.Component<RouterProps> {
  constructor(props: RouterProps);
  public render(): React.Element;
}

export = Router;
