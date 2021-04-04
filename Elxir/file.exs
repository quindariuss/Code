defmodule Output do 

def success do 
	IO.puts("I worked")
end

def read do
	IO.puts(File.read("test.md"))
	
	Output.success
end

def make do
	File.write("new file.txt", "blach dvsa fdljfa")
	Output.success
end

end

Output.read
