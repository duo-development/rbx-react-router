local React = require(script.Parent.React)

local RouteContext = require(script.Parent.RouteContext)

local function withRoute(callback)
	return React.createElement(RouteContext.Consumer, {
		render = callback,
	})
end

return withRoute
