json.extract! @parties, :name, :location

json.guests do
    json.array! @parties.guests do |guest|
        json.name guest.name
        json.age guest.age
        json.favorite_color guest.favorite_color
    end
end