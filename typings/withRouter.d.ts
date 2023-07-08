import React from "@rbxts/react-ts";

import { History, HistoryEntry } from "./History";

export interface RouterRendererProps {
  location: HistoryEntry;
  history: History;
}

declare function withRouter(
  callback: (value: RouterRendererProps) => React.Element | undefined
): React.Element;

export default withRouter;
