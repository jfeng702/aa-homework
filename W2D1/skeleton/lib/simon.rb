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
      system('clear')
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
    seq.each do |color|
      puts color
      sleep 0.75
      system('clear')
      sleep 0.25
    end
  end

  def require_sequence
    puts "What is the sequence? red blue green yellow"

    seq.each do |color|
      guess = gets.chomp
      if color[0] != guess
        puts "you done messed up!"
        @game_over = true
        break
      end
    end
    sleep 0.75
  end

  def add_random_color
    self.seq << COLORS.sample
  end

  def round_success_message
    "you did good."
  end

  def game_over_message
    puts "Game over! You made it #{sequence_length-1} rounds"
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
