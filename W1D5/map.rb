class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    match = false
    @map.each do |sub|
      sub[1] = value if sub[0] == key
      match = true
    end

    @map << [key, value] unless match
  end

  def lookup(key)
    @map.select {|sub| return sub[1] if sub[0] == key}
    nil
  end

  def remove(key)
    index = nil
    @map.each_with_index do |sub,i|
      if sub[0] == key
        index = i
      end
    end
    @map.delete_at(index)
  end

  def show
    @map
  end
end
