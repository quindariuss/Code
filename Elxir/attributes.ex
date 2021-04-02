defmodule Circle do 
	@moduledoc "Implements basic circle functions"
	@pi 3.14
	
	@doc "Computers the areaof a circle"
	def area(r) do 
		r*r*@pi 
	end
		
	def circumfrence(r) do 
		2*r*@pi 
	end
end