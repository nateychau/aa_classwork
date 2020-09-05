# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


cat_1 = Cat.create(name: 'Peter', birthdate: '2020/08/25', color: 'green', sex: 'M', description: 'I am a human, not a cat.' )
cat_2 = Cat.create(name: 'Nathan', birthdate: '2010/02/14', color: 'blue', sex: 'F', description: 'I love being a cat')

