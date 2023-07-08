local React = require(script.Parent.React)
local Path = require(script.Parent.Path)
local RouterContext = require(script.Parent.RouterContext)

local function useRouteMatch(options)
	if type(options) == "table" then
		options = { path = options }
	end

	local path = React.useMemo(function()
		return Path.new(options.path)
	end, { options.path })

	local context = React.useContext(RouterContext)
	return path:match(context.location, options)
end

return useRouteMatch
