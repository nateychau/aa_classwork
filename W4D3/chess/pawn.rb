require_relative './piece.rb'


# (FAVORED) (1) board checks, is this a pawn, and then queries the instance have you alrady moved twice?
    # pawns can only move diagonally if it's part of a kill (knowing that is board-relevant)

# (2) have a basic instance method from Piece, return true if there is nothing instance-specific
# that would prevent this piece from moving
# Board : calls this method on every instance
# not a pawn: just uses generic Piece which always returns true
# for Pawn: overided & it actually checks something

class Pawn < Piece

    def initialize(color)
        @already_moved = false
        super(:pawn, color)
    end

    # normal_moves(start_pos)
    # attacking_moves(start_pos)
    # we need a slide method

    # board checks : is this pawn trying ot attak or just move
        # trying to attack -> calls attacking_moves -> ... -> calls make_has_moved 
        # just moving -> calls normal_moves -> ... -> calls make_has_moved

    def normal_moves(start_pos)
        output = []
        row = self.color == :black ? -1 : 1 
        ahead_one = [start_pos[0] + row, start_pos[1]]
        ahead_two = [start_pos[0] + 2*row, start_pos[1]]
        output << ahead_one if Piece.valid_pos?(ahead_one)
        output << ahead_two if Piece.valid_pos?(ahead_two) && !@already_moved
        output
    end

    def slide(start_pos, end_pos)
        row = self.color == :black ? -1 : 1 
        return [] if start_pos[0] + row == end_pos[0]
        ahead_one = [start_pos[0] + row, start_pos[1]]
        [ahead_one]
    end

    #board call this instance method everytime it moves a pawn
    def make_has_moved
        @already_moved = true
    end

    # under assumption board has checked there is a piece at the space to be moved-to
    # method returns spaces it *could* attack    
    def attacking_moves(start_pos)
        row = self.color == :black ? -1 : 1 
        output = []
        attack_one = [start_pos[0] + row, start_pos[1] + 1]
        attack_two = [start_pos[0] + row, start_pos[1] - 1]
        output << attack_one if Piece.valid_pos?(attack_one)
        output << attack_two if Piece.valid_pos?(attack_two)
        output
    end
end

