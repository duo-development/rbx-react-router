import Link from "./Link";
import Redirect from "./Redirect";
import Route, { RouteRendererProps } from "./Route";
import Router from "./Router";

import withRoute from "./withRoute";
import withRouter, { RouterRendererProps } from "./withRouter";

import useHistory from "./useHistory";
import useLocation from "./useLocation";
import useParams from "./useParams";
import useRouteMatch from "./useRouteMatch";

import { Context } from "@rbxts/react-ts";
import { History } from "./History";
import { Path } from "./Path";

declare const RouteContext: Context<RouteRendererProps>;
declare const RouterContext: Context<RouterRendererProps>;

export {
  History,
  Link,
  Path,
  Redirect,
  Route,
  RouteContext,
  Router,
  RouterContext,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  withRoute,
  withRouter,
};
