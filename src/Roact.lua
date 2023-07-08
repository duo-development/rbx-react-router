local container = script.Parent.Parent
local Roact = container:FindFirstChild("RoactCompat")

if not Roact then
	error("Roact Router failed to find Roact. Did you make sure Roact is in the same folder?")
end

return require(Roact)
