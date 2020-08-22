
#n^2 + 2n^2 || 3n^2
#n^2
def windowed_max_range(arr,w)
    largest_diff = 0
    (0...arr.length).each do |i| #n^2
        window = arr[i...i+w] #n
        diff = window.max - window.min # 2n^2
        largest_diff = diff if diff > largest_diff
    end
    largest_diff
end





p windowed_max_range([1,2,3,5], 3) # 3
p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8