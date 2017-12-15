class LRUCache
  # can fit 4 things
  def initialize(size)
     @size = size
     @cache = []
   end

  def count
     # returns number of elements currently in cache
     @cache.count
   end

  def add(el)
     # adds element to cache according to LRU principle
    if @cache.include?(el)
      @cache.delete(el)
      @cache.push(el)
    end

     @cache << el
     @cache.shift if count > 4
   end

   def show
     p @cache
     # shows the items in the cache, with the LRU item first
   end

   private
   # helper methods go here!

 end
