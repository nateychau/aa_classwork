class Piece

    def initialize 
        @type = :generic
    end

    def self.moves(pos)
        # for each subclass, return array of all
        # legal moves from that position
    end
    
    def inspect
        @type
    end
end


class NullPiece < Piece
    
    def initialize
        @type = :null
    end

end

[-1, 0]
[1, 0]

pos += direction (as long as you can...)

# rook.move
     # Slideable.slide (rook-specific data)

# Rook extends Slideable
# slide
# Rook.slide
# Rook includes Slideable
# rook.slide for some instance

module Slideable

    def slide(pos, direction) [x, y]

    end

end

module Stepable 


end


class Knight < Piece

    def initialize 
        @type = :knight        
    end

    def self.moves(pos)
    
    end

end

class Rook < Piece
    
    def initialize 
        @type = :rook        
    end


    def self.moves(pos)

    end


end

class Bishop < Piece

    def initialize 
        @type = :bishop        
    end

    def self.moves(pos)
    
    end

end

class Queen < Piece

    def initialize 
        @type = :queen        
    end

    def self.moves(pos)
    
    end

end

class King < Piece

    def initialize 
        @type = :king        
    end

    def self.moves(pos)
    
    end

end

class Pawn < Piece

    def initialize 
        @type = :pawn        
    end

    def self.moves(pos)
    
    end

end

# module Slidable

# end

# model1 : just #moves
# model2 : ::moves(pos) class method overrided by every kind of piece
# model3 : #moves(board) -> 


# suppose Pawn is a subclass of Piece
# pawn = Pawn.new
# pawn.moves = list of legal moves based on intrinsic rules of pawns
    # has it two spots yet
# board will still verify if if's open
# pawn.moves([x,y]) = lists of legal moves from that position ignoring 
# facts on the board...up to board to sort out
# *.moves([x,y] -> ClassMethod(pos))

# class Pawn < Piece
#     # override Piece.moves([pos])
# end
    