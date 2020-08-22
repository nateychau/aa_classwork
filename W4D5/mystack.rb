require_relative 'myqueue'

class MyStack

    def initialize
        @store = []
    end

    def peek
        @store.last
    end

    def size
        @store.length
    end

    def push
        @store.push
    end

    def pop
        @store.pop
    end

end

class StackQueue
    def initialize
        @stack_1 = MyStack.new
        @stack_2 = MyStack.new
    end

    def size #<--- window
        @stack_1.length + @stack_2.length
    end

    def empty?
        @store.empty?
    end

    def enqueue(val)
        @stack_1.push
        @stack_2.push(@stack_1.pop)
    end


    def dequeue
        @stack_2.pop
    end


end




#1,2,3 = 
# [1,2,3,|4,5,6,|7,8,9,0]