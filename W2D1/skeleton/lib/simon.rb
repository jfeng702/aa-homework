class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn(*args)
    unless game_over
      show_sequence
      require_sequence
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    puts seq
  end

  def require_sequence
    puts "What is the sequence? red blue green yellow"
    input = gets.chomp
    if input == @seq.join(' ')
      puts "nice"
    else
      puts "dead"
      puts "it was '#{@seq.join(' ')}'"
      @game_over = true
    end
  end

  def add_random_color
    self.seq << COLORS.sample
  end

  def round_success_message

  end

  def game_over_message
    puts "Game over"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end

if $PROGRAM_NAME == __FILE__
  game = Simon.new
  game.play
end
