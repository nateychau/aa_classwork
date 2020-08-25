class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    if self.empty?
      nil.hash
    else
    # a = [1,2,3] 2908234
    # b = [1,2,3] 2908234
    # 1.hash ^ 2.hash ^ 3.hash
    #(1.hash^2.hash)^3.hash) ^ 4.hash
      self.inject do |acc, el|
        acc.hash ^ el.hash
      end
    end
  end
end

class String
  def hash
    self.bytes.hash
  end
end
require 'byebug'
class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    arr = self.to_a
    # debugger
    hash = 0
    arr.each do |subarr|
      hash += (subarr[0].hash ^ subarr[1].hash)
    end
    hash
  end
end

#[[a,1]]