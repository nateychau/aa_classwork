require_relative "./piece.rb"
require_relative "./pawn.rb"

# fill out Steppable in all the ways (done)
# (4) add color into Piece (done)
# (3) make null piece into singleton thing (done)
# (5) normalize null_piece in the various ways (done)
# do Board logic to (1) prevent moving into same-team-occupied place, (2) slide through blocking piece (done)
# (8) Capture logic in move_piece (done)
# (6) Pawn class (done)
# (7) refactor Board initialize (just pawn)

# (9) refactor move piece upon completion


class Board

    attr_reader :board

    def initialize
        @board = Array.new(8) {Array.new(8, NullPiece.instance)}
        fill_board
    end

    def fill_board    
        (0...self.board.length).each do |row|
            (0...self.board.length).each do |col|
                if row == 0 || row == 1
                    color = :white
                elsif row == 6 || row == 7
                    color = :black
                else
                    next
                end
                pos = [row, col]
                # see if in pawn row, if so => put pawn there & next 
                if row == 1 || row == 6
                    self[pos] = Pawn.new(color)
                    next
                end
                case col
                when 0, 7
                    self[pos] = Rook.new(color)
                when 1, 6
                    self[pos] = Knight.new(color)
                when 2, 5
                    self[pos] = Bishop.new(color)
                when 4
                    self[pos] = King.new(color)
                when 3
                    self[pos] = Queen.new(color)
                end
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

    # initial_checking
    # pawn_sequence
    # normal_sequence
    # check-logic (speculative)
    # keep capture-logic in move piece

    def move_piece(start_pos, end_pos)
        # We need to know the color of the current player, and then refactor below
        if self[start_pos].is_a?(NullPiece)
            raise StandardError.new("You have no piece at this position")
        end
        color = self[start_pos].color
        type = self[start_pos].type
        piece = self[start_pos]
        if self[end_pos].color == color
            raise StandardError.new("You already have a piece at this position")
        end
        #probably should be refactored
        if type == :pawn #pawn sequence
            if self[end_pos] == NullPiece.instance #normal move
                moves = piece.normal_moves(start_pos)
                if !moves.include?(end_pos)
                    raise StandardError.new("Illegal move for piece type")
                end
                must_be_open = piece.slide(start_pos, end_pos)
                if !must_be_open.empty? && self[must_be_open[0]] != NullPiece.instance
                    raise StandardError.new("Piece in the way")
                end 
            else #attacking move
                moves = piece.attacking_moves(start_pos)
                if !moves.include?(end_pos)
                    raise StandardError.new("Illegal move for piece type")
                end
            end
            piece.make_has_moved   
        else #normal sequence
            moves = piece.class.moves(start_pos)
            if !moves.include?(end_pos)
                raise StandardError.new("Illegal move for piece type")
            end
            must_be_open = piece.class.slide(start_pos, end_pos)
            must_be_open.each do |pos|
                if self[pos] != NullPiece.instance
                    raise StandardError.new("Piece in the way")
                end   
            end         
        end

        # add check logic here

        self[end_pos] = NullPiece.instance 
        self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
        
        # can piece not be moved because that would put the king in check
        # add retry move call to method that calls move_piece
    end
end

# p test = Board.new
# p test[[0, 0]]
# p test[[2, 1]]
# test.move_piece([2, 2],[0, 1])
# p test[[0, 0]]
# p test[[2, 2]]


