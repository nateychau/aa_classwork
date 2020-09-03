# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Artwork.create([
        {title: 'Mona Lisa', image_url: 'mona_lisa.jpg', artist_id: 1 },
        {title: 'Starry Night', image_url: 'starry_night.jpg', artist_id: 2 },
        {title: 'John Cena', image_url: 'invisible.jpeg', artist_id: 3 }
    ])

User.create([
    {username: 'da Vinci'},
    {username: 'Vangough'},
    {username: 'Champ'}
])

ArtworkShare.create([
    {artwork_id: 2, viewer_id: 1},
    {artwork_id: 1, viewer_id: 3},
    {artwork_id: 3, viewer_id: 2}
])