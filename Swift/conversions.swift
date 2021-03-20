print("Enter a class of conversion: ")
var input = "start"
let end = "Program is finished"
let conversions: [String] = ["Mass","Length", "Temperature", "Energy","Time"]
input = readLine()!
if (input == "Yes")
	{
	for type in conversions
		{
		print("\(type)")
		}
	}
while(input != "finished")
{
input = readLine()!

if (input == "show work"){
print(show_Work(input: input))
}
}
func show_Work(input: String) -> String 
{
return input
}
