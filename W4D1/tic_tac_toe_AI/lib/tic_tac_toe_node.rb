require_relative 'tic_tac_toe'

class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos
  
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end
  # ask to explain what this code means
  def losing_node?(evaluator)
    return false if self.board.over? && (self.board.winner.nil? || self.board.winner == evaluator)
    return true if self.board.over? && self.board.winner != evaluator
    
    if evaluator == @next_mover_mark 
      self.children.all? {|child| child.losing_node?(evaluator)}
    else
      self.children.any? {|child| child.losing_node?(evaluator)}
    end
  end

  def winning_node?(evaluator)
    return true if self.board.over? && self.board.winner == evaluator
    return false if self.board.over? && self.board.winner != evaluator
    
    if evaluator == @next_mover_mark 
      self.children.any? {|child| child.winning_node?(evaluator)}
    else
      self.children.all? {|child| child.winning_node?(evaluator)}
    end
  end

require 'byebug'
  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    arr = []
    # # debugger
    max_index = self.board.rows.length
    (0...max_index).each do |row_i|
      (0...max_index).each do |col_i|
        pos = [row_i, col_i]
        if @board.empty?(pos)
          new_board = @board.dup 
          new_board[pos] = next_mover_mark
          prev_move_pos = pos
          next_mover_mark == :x ? next_mover_mark = :o : next_mover_mark = :x
          child = TicTacToeNode.new(new_board, next_mover_mark, prev_move_pos)
          arr << child
        end
      end
    end
    arr
  end
end
