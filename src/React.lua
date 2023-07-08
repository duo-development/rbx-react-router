local container = script.Parent.Parent
local React = container:FindFirstChild("React")

if not React then
	error("Roact Router failed to find Roact. Did you make sure Roact is in the same folder?")
end

return require(React)
