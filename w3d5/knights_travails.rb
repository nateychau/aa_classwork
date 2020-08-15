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

    # def inspect
    #     "#{self.value}"
    # end

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

class KnightPathFinder

    attr_reader :root_node
    
    def initialize(position)
        @root_node = PolyTreeNode.new(position) 
        @considered_positions = [position]
    end

    def self.valid_moves(position)
        # debugger
        x = position.first
        y = position.last
        all_moves = [[x+2, y+1], [x+2, y-1], [x+1, y+2], [x+1, y-2], [x-2, y+1], [x-1, y+2], [x-1, y-2], [x-2, y-1]]
        all_moves.select do |move|
            x = move.first
            y = move.last
            x >= 0 && x < 8 && y >= 0 && y < 8
        end
    end

    def new_move_positions(pos)
        # debugger
        new_moves = []
        KnightPathFinder.valid_moves(pos).each do |move|
            if !@considered_positions.include?(move)
                @considered_positions << move
                new_moves << move
            end
        end
        new_moves
    end

    def build_move_tree
        # debugger
        queue = [@root_node]
        until queue.length == 0
            current_node = queue.shift
            self.new_move_positions(current_node.value).each do |new_move|
                move_node = PolyTreeNode.new(new_move)
                current_node.add_child(move_node)
                queue << move_node
            end
        end
    end

end