class Array

    def my_uniq
        new_arr = []
        self.each do |x|
            new_arr << x if !new_arr.include?(x)
        end 
        return new_arr
    end

    def two_sum
        new_arr = []
        self.each_with_index do |x, idx_1|
            self.each_with_index do |y, idx_2|
                if idx_2 > idx_1 && !new_arr.include?([idx_1, idx_2]) && x + y == 0
                    new_arr << [idx_1, idx_2]
                end
            end
        end
        new_arr
    end
    
    def my_transpose 
        new_grid = Array.new(self.length){Array.new(self[0].length, 0)}
        self.each_with_index do |row, idx_1|
            row.each_with_index do |ele, idx_2|
                new_grid[idx_1][idx_2] = self[idx_2][idx_1]
            end
        end
        new_grid
    end

    def stock_picker
        max_profit = 0
        days = []
        (0...self.length - 1).each do |day1|
            (day1...self.length).each do |day2|
                if self[day2] - self[day1] > max_profit
                    days = [day1,day2]
                    max_profit = self[day2] - self[day1]
                end
            end
        end
        return days
    end
end



class Towers

    attr_accessor :stacks

    def initialize
        @stacks = Array.new(3){Array.new}
        @stacks[0][0] = "Lar"
        @stacks[0][1] = "Me"
        @stacks[0][2] = "S"
    end
    
    
    def move(stack_idx1,stack_idx2)
        raise "Error" unless stacks[stack_idx2].empty? || stacks[stack_idx1].empty? || stacks[stack_idx1][-1].length < stacks[stack_idx2][-1].length 
        item = stacks[stack_idx1].pop
        stacks[stack_idx2] << item
    end

    def win?
        return @stacks[1] == ["Lar", "Me", "S"] || @stacks[2] == ["Lar", "Me", "S"]
    end
end