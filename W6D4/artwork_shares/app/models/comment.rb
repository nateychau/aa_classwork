class Comment < ApplicationRecord
    validates :user_id, :artwork_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User,
        dependent: :destroy

    belongs_to :artwork,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :Artwork, 
        dependent: :destroy 
    
    has_many :likes,
        primary_key: :id,
        foreign_key: :likeable_id,
        class_name: :Like,
        as: :likeable
end
