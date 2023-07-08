local React = require(script.Parent.React)
local RouterContext = require(script.Parent.RouterContext)

local function useHistory()
	local context = React.useContext(RouterContext)
	return context.history
end

return useHistory
