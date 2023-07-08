import React from "@rbxts/react-ts";

import { RouteRendererProps } from "./Route";

declare function withRoute(
  callback: (value: RouteRendererProps) => React.Element | undefined
): React.Element;

export = withRoute;
