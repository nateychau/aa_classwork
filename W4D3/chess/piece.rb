require 'singleton'

class Piece
    attr_reader :color, :type

    def initialize(type, color)
        @type = type
        @color = color
    end

    def self.moves(pos)
        # for each subclass, return array of all
        # legal moves from that position
    end
    
    # def inspect
    #     [@type, @color]
    # end

    def self.valid_pos?(pos)
        return false if pos[0] < 0 || pos[0] >= 8 || pos[1] < 0 || pos[1] >= 8
        true
    end

end


class NullPiece < Piece
 # figure out color for NullPiece  
 include Singleton

    def initialize
        super(:null, :grey)
    end
end

module Slideable
#expect directions array 
#this is written for model 2 (expects position from board)
#may also need method that gives us a list of spaces we need to successfully slide through
# why no self for this module/class method?
    def moves(pos)
        output = []
        new_pos = Array.new(2)
        self.directions.each do |direction|
            new_pos[0] = pos[0]+direction[0]
            new_pos[1] = pos[1]+direction[1]
            until !Piece.valid_pos?(new_pos)
                output << new_pos.dup
                new_pos[0] += direction[0]
                new_pos[1] += direction[1]
            end
        end
        output 
    end

    # assumes end_pos is in moves
    # won't work if end_pos is invalid
    # slide could call moves to verify end_pos is even possible...would cut down on program-crashing errors

    def slide(start_pos, end_pos)
        output = []
        new_pos = start_pos.dup
        
        new_x = start_pos[0]
        new_y = start_pos[1]
        end_x = end_pos[0]
        end_y = end_pos[1]
        x = end_x > new_x ? 1 : -1 
        y = end_y > new_y ? 1 : -1 
        x = 0 if new_x == end_x
        y = 0 if new_y == end_y

        until new_x == end_x && new_y == end_y
            new_pos[0] = new_x += x
            new_pos[1] = new_y += y
            output << new_pos.dup
        end
        output[0...-1]
    end
end

module Steppable 
    #expects a hops method
    def moves(start_pos)
        output = []
        new_pos = Array.new(2)
        self.hops.each do |hop|
            new_pos[0] = start_pos[0]+hop[0]
            new_pos[1] = start_pos[1]+hop[1]
            output << new_pos.dup if Piece.valid_pos?(new_pos)
        end
        output 
    end

    # we don't need a slide, but we might want to have something like it for equivalence
    def slide(start_pos, end_pos)
        []
    end

end


class Knight < Piece
    extend Steppable

    HOPS = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]]

    def initialize(color)
        super(:knight, color)
    end

    def self.hops
        HOPS
    end
end

class Rook < Piece
    extend Slideable 
    
    DIRECTIONS = [[1,0], [-1,0], [0,1], [0,-1]]        
    
    def initialize(color)
        super(:rook, color)
    end


    def self.directions
        DIRECTIONS
    end
    # how can we get self.directions into the module??????
end

class Bishop < Piece
    extend Slideable

    DIRECTIONS = [[1, 1], [1, -1], [-1, 1], [-1, -1]]

    def initialize(color) 
        super(:bishop, color)
    end

    def self.directions
        DIRECTIONS 
    end
end

class Queen < Piece
    extend Slideable

    DIRECTIONS = [[1, 1], [1, -1], [-1, 1], [-1, -1], [1,0], [-1,0], [0,1], [0,-1]]        
  
    def initialize(color)
        super(:queen, color)
    end
    def self.directions
        DIRECTIONS 
    end
end

class King < Piece

    extend Steppable
    HOPS = [[1, 0],[0, 1],[-1, 0],[0, -1],[1, 1],[1, -1],[-1, 1],[-1, -1]]

    def initialize(color)
        super(:king, color)
    end

    def self.hops
        HOPS
    end

end

# model1 : just #moves
# model2 : ::moves(pos) class method overrided by every kind of piece
    # Board identifies piece type
    # Board calls ::moves / is what player wanted even on that list? if so, is it reachable?
    # Board calls ::slide => returns list of spaces that get slid through
        # Rook.slide([0,0], [0, 4]) -> [0, 1], [0, 2], [0, 3]
    # Board checks to see if any of those are occupied


# model3 : #moves(board) -> 

