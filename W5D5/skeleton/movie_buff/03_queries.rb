def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.
  Movie.select(:title, :id).group(:id).joins(:actors).where("actors.name IN (?)", those_actors).having('COUNT(actors.id) = (?)', those_actors.length)
end

def golden_age
  # Find the decade with the highest average movie score.
  years  = Movie.all.select(:yr, :score)
  res = Hash.new{|h,k| h[k] = Array.new}
  years.each do |year|
    key = year.yr/10
    res[key] << year.score 
  end
  res.each {|k,v| res[k] = (v.sum)/v.length}
  # puts res
  res.sort_by {|k,v| v}[-1][0]*10
end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery
  
  
  sub_q = Movie.joins(:actors).where("actors.name = (?)", name).pluck(:id)
  Actor
  .joins(:movies)
  .where("movies.id in (?)", sub_q)
  .where.not("actors.name = (?)", name)
  .pluck(:name)
  .uniq
end

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie
    Actor.left_outer_joins(:movies).select('actors.* ,COUNT(*)').where(movies: {id: nil})
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"

end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.

end
