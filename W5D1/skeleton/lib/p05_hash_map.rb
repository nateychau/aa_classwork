require_relative 'p04_linked_list'

class HashMap
  include Enumerable
  attr_accessor :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    get(key) != nil
  end

  def set(key, val)
    i = key.hash % num_buckets 
    if @store[i].empty? 
      @count += 1
      @store[i].append(key,val)
    elsif @store[i].include?(key)
      @store[i].update(key,val)
    else
      @count += 1
      @store[i].append(key,val)
    end
    resize! if count == num_buckets
  end

  def get(key)
    i = key.hash % num_buckets
    @store[i].get(key)
  end

  def delete(key)
    if include?(key)
      @count -= 1
      i = key.hash % num_buckets
      @store[i].remove(key)
    else
      return nil
    end
  end

  def each
    @store.each do |linked_list|
      unless linked_list.empty?
        linked_list.each do |node|
          yield(node.key, node.val)
        end
      end
    end
    self
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
 if count == num_buckets
  new_arr = Array.new(2*num_buckets) { LinkedList.new }
  self.each do |key, val|
    i = key.hash % (2*num_buckets)
    new_arr[i].append(key, val)
  end
  @store = new_arr
 end
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
  end
end

