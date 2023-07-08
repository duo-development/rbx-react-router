import React, { JsxInstance } from "@rbxts/react-ts";

interface LinkProps extends JsxInstance<ImageButton> {
  path: string;
  state?: any;
}

declare class Link extends React.Component<LinkProps> {
  constructor(props: LinkProps);
  public render(): React.Element;
}

export = Link;
