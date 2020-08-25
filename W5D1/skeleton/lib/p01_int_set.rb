class MaxIntSet

  attr_reader :max, :store
  def initialize(max)
    @store = Array.new(max, false)
    @max = max
  end

  def insert(num)
    raise 'Out of bounds' if num > max || num < 0 
    @store[num] = true 
  end

  def remove(num)
    raise 'Out of bounds' if num > max || num < 0 
    @store[num] = false
  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    i = num % 20
    @store[i]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !self[num].include?(num)
      @count += 1
      self[num] << num
      resize! if count == num_buckets
    end
  end

  def remove(num)
    if self[num].include?(num)
      @count -= 1
      self[num].delete(num)
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    i = num % num_buckets
    @store[i]
  end

  def num_buckets
    @store.length
  end

  def resize!
    if count == num_buckets
      new_arr = Array.new(2*num_buckets) { Array.new }
      @store.each do |subarray|
        subarray.each do |num|
          i = num % (2*num_buckets)
          new_arr[i] << num
        end
      end
      @store = new_arr
    end
  end
end
