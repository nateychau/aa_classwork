
#runtime of O(n^2)
def my_min_1(arr)
    smallest = arr[0]
    (0...arr.length).each do |i|
        (i+1...arr.length).each do |j|
            if arr[i] < arr[j] && arr[i] < smallest
                smallest = arr[i]
            end
        end
    end
    smallest
end

#runtime of O(n)
def my_min(arr)
    smallest = arr[0]
    arr.each {|el| smallest = el if el < smallest}
    smallest
end


# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5


#runtime of O(n^3) 
def largest_contiguous_subsum_1(arr)
    largest = []
    (0...arr.length).each do |i|
        (i...arr.length).each do |j|
            largest << arr[i..j]
        end
    end
    sums = largest.map do |sub_array|
        sub_array.sum
    end
    sums.max
end


# possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7


def largest_contiguous_subsum(arr)

    largest_sum = 0 # 3
    current_sum = 0 # 1
    arr.each do |el| # 1 ,2,-4, 4,-3,4
        if current_sum + el > largest_sum # 
            current_sum += el  
            largest_sum = current_sum # 
        elsif current_sum + el < 0
            current_sum = 0
        else
            current_sum += el
        end
    end
    largest_sum

end

list = [1,2,-4,4,-3,4] # => 5
p largest_contiguous_subsum(list)
list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])
list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8
list = [1,2,-4,4,-3,4]
p largest_contiguous_subsum(list)