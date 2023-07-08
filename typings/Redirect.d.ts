import React from "@rbxts/react-ts";

interface RedirectProps {
  path: string;
}

declare class Redirect extends React.Component<RedirectProps> {
  constructor(props: RedirectProps);
  public render(): undefined;
}

export = Redirect;
