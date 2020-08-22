

def bad_two_sum?(arr, target_sum)
    (0...arr.length-1).each do |i|
        (i+1...arr.length).each do |j|
            return true if arr[i] + arr[j] == target_sum
        end
    end
    false
end
#nlogn
def okay_two_sum?(arr,target_sum) # 
    sorted = arr.sort #nlogn
    left = sorted.first #1 
    right = sorted.last #1 
    return true if left + right == target_sum
    while (left + right) != target_sum #
        if left + right > target_sum #
            sorted.pop #1
        else
            sorted.shift #1
        end
        left = sorted.first #1
        right = sorted.last #1
        return false if sorted.length < 2 # n
        return true if left + right == target_sum #
    end

end
# O(n) 
def two_sum?(arr, target_sum)
    hash = Hash.new(0)
    arr.each do |el| #n
        hash[el] += 1
    end
    # pair_1 = nil
    hash.each do |k,v| #n
        # 5 = 10 - 5
        difference = target_sum - k 
        if hash.has_key?(difference) #1
            if k == difference #1
                return true if hash[k] > 1
            else
                return true
            end
        end
    end
    false
end



arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false