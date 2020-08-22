#time complexity: O(n!)
def first_anagram?(str_1, str_2)
    chars = str_2.chars.permutation.to_a
    chars.include?(str_1.chars)
end


#time complexity... O(n^2), possibly longer because of .empty
def second_anagram?(str_1, str_2)
    return false if str_1.length != str_2.length 
    word_1 = str_1.chars
    word_2 = str_2.chars
    word_1.each_with_index do |char, idx| #
        idx_2 = word_2.find_index(char) 
        if !idx_2.nil? #
            word_2.delete_at(idx_2) #m
        end
    end
    word_2.empty? #m
end

# O(nlogn)  + mlogm
def third_anagram?(str_1,str_2)
    word_1 = str_1.chars.sort #nlogn
    word_2 = str_2.chars.sort #mlogm
    word_1 == word_2 
end

#O(n)
def fourth_anagram?(str_1,str_2)
    hash = Hash.new(0)
    str_1.each_char do |char|
        hash[char] += 1
    end
    str_2.each_char do |char| #n + m
        hash[char] -= 1
    end
    hash.values.all? { |val| val == 0} 

end





p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true