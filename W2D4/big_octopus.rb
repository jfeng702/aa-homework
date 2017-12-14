fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def quadratic_biggest_fish(fishes)



  (0...fish.length).each_with_index do |fish1, idx1|
    max_length = true
    (0...fish.length).each_with_index do |fish2, idx2|
      next if idx1 == idx2
      max_length = false if fish2.length > fish1.length
    end
    return fish1 if fish1
  end
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new {|x, y| x <=> y }
    return self if length < 2
    mid = self.length / 2
    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)

    merge(left, right, &prc)
  end

  def self.merge(left, right, &prc)
    merge = []
    until left.empty? || right.empty?
      if prc.call(left.first, right.first) == -1
        merge << left.shift
      else
        merge << right.shift
      end
    end

    merge + left + right
  end
end

def lognfish(fish)
  prc = Proc.new {|x, y| x.length <=> y.length}
  fish.merge_sort (&prc)[0]
end

def clever(fish)
  longest = fish.first
  fish.each do |fish|
    longest = fish if fish.length > longest.length
  end
  longest
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
slow_dance("up", tiles_array)

def slow_dance(direction, tiles_array)
  tiles_array.each_index |idx|
    return idx if tiles_array[idx] == direction
  end
end

def fast_Dance(direction, tiles_array)
  tiles_hash = {'up' => 0, "right-up" => 1,"right" => 2,"right-down" => 3,"down" => 4,"left-down" => 5,"left" => 6,"left-up" => 7 }
  tiles_hash[direction]
end
