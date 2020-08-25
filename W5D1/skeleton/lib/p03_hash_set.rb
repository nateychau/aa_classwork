class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if !self[key].include?(key)
      @count += 1
      self[key] << key
      resize! if count == num_buckets
    end
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    if self[key].include?(key)
      @count -= 1
      self[key].delete(key)
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    i = num.hash % num_buckets
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
