require "byebug"
class PolyTreeNode

    attr_reader :parent, :value, :children
    
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(parent_node)
        @parent.children.delete(self) unless @parent.nil? 
        # debugger
        @parent = parent_node
        return nil if parent_node.nil?
        if !parent_node.children.include?(self)
            parent_node.children << self
        end
        parent_node.children
    end

    def inspect
        "#{self.value}"
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        child_node.parent = nil
        raise "not a child of parent" if !self.children.include?(child_node)
    end

    def dfs(target_value)
        return self if self.value == target_value
        self.children.each do |child|
            descendant_val = child.dfs(target_value)
            return descendant_val if descendant_val != nil
        end
        nil
    end

    def bfs(target_value)
        queue = [self]
        until queue.length == 0
            current_node = queue.shift
            return current_node if current_node.value == target_value
            current_node.children.each{|child| queue << child}
        end
        nil
    end

end