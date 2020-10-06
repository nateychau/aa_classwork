json.extract! @guest, :name, :age, :favorite_color

json.gifts do
    @guest.gifts.each do |gift|
        json.set! gift.id do 
            json.title gift.title
            json.description gift.description
        end
    end
end
