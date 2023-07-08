local React = require(script.Parent.React)

local RouterContext = require(script.Parent.RouterContext)

local function withRouter(callback)
	return React.createElement(RouterContext.Consumer, {
		render = callback,
	})
end

return withRouter
