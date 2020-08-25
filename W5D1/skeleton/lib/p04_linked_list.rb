class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @prev.next = @next
    @next.prev = @prev
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new
    @tail = Node.new 
    @head.next = @tail 
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    if !empty?
      @head.next
    else
      nil
    end
  end

  def last
    if !empty?
      @tail.prev
    else
      nil
    end
  end

  def empty?
    @head == @tail.prev && @head.next == @tail
  end

  def get(key)
    return nil if empty?
    self.each do |node|
      return node.val if node.key == key
    end
    nil
  end

  def include?(key)
    self.each do |node|
      return true if node.key == key
    end
    false
  end

  def append(key, val)
    old_prev = @tail.prev 
    node = Node.new(key,val)
    old_prev.next = node
    node.prev = old_prev 
    node.next = @tail
    @tail.prev = node
  end

  def update(key, val)
    return nil if empty?
    self.each do |node|
      node.val = val if node.key == key
    end
  end

  def remove(key)
    self.each do |node|
      if node.key == key
        node.prev.next = node.next
        node.next.prev = node.prev
      end
    end
    nil
  end

  def each
    current_node = first
    until current_node == @tail
      if block_given?
        yield(current_node)
      end
      current_node = current_node.next
    end
    self
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
