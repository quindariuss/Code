defmodule MarkedTest do
  use ExUnit.Case
  doctest Marked

  test "greets the world" do
    assert Marked.hello() == :world
  end
end
