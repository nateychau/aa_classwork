# PHASE 2
def convert_to_int(str)
  
  Integer(str)

rescue ArgumentError
  return nil
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise StandardError.new("I require coffee!")
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"
    begin 
      puts "Feed me a fruit! (Enter the name of a fruit:)"
      maybe_fruit = gets.chomp
      reaction(maybe_fruit) 
    rescue StandardError => e
      puts "Error was #{e.message}"
      retry
    end
    # puts "Have a nice day"
  end  

# def feed_me_a_fruit
#   puts "Hello, I am a friendly monster. :)"
#     begin 
#       puts "Feed me a fruit! (Enter the name of a fruit:)"
#       maybe_fruit = gets.chomp
#       reaction(maybe_fruit) 
#     ensure
#       p "Vital saving work done"
#     end
#     # puts "Have a nice day"
#   end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    if @yrs_known < 5
      raise StandardError.new("Insufficient time")
    end
    if name.length == 0 || fav_pastime.length == 0
      raise StandardError.new("All fields please")
    end

  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


