require_relative 'mystack'

class MyQueue
   

    def initialize
        @store = []
    end

    def peek
        @store.first
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def enqueue(val)
        @store.push(val)
    end

    def dequeue
        @store.shift
    end


end

