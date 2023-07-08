local React = require(script.Parent.React)
local RouteContext = require(script.Parent.RouteContext)

local function useParams()
	local context = React.useContext(RouteContext)
	assert(context, "useParams must be used inside of a Route")
	return context.match
end

return useParams
