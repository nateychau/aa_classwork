require_relative "./piece.rb"


class Board

    attr_reader :board

    def initialize
        @board = Array.new(8) do |x|
            if x ==0 || x == 1 || x ==6 || x == 7
                # fill with Piece.new
                Array.new(8) {Piece.new}
            else
                # fill with NullPiece.new...also singleton?
                Array.new(8,NullPiece.new)
            end
        end
    end

    def validate_pos(pos)
        if pos[0] < 0 || pos[0] >= 8 || pos[1] < 0 || pos[1] >= 8
            raise StandardError.new("Off the board")
        end
    end

    def [](pos)
        validate_pos(pos)
        @board[pos[0]][pos[1]]
    end

    def []=(pos, piece)
        validate_pos(pos)
        @board[pos[0]][pos[1]] = piece
    end

    def move_piece(start_pos, end_pos)
        if self[start_pos].is_a?(NullPiece)
            raise StandardError.new("There is no piece at this position")
        end
        if !self[end_pos].is_a?(NullPiece)
            raise StandardError.new("There is already a piece at this position")
        end
        self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
        
        # is end_pos in moves_list
        # is end_pos unreachable b/c of other pieces
        # can piece not be moved because that would put the king in check
    end
end

p test = Board.new
p test[[0, 0]]
p test[[2, 1]]
test.move_piece([2, 2],[0, 1])
p test[[0, 0]]
p test[[2, 2]]



