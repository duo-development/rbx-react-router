local React = require(script.Parent.React)
local RouterContext = require(script.Parent.RouterContext)

local function useLocation()
	local context = React.useContext(RouterContext)
	return context.location
end

return useLocation
