import Combine

[1, 2, 3].publisher.sink(receiveCompletion: { completion in print("publisher completed: \(completion)") }, receiveValue: { value in

print("received a value: \(value)") })
