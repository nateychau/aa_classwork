class Artwork < ApplicationRecord
    validates :artist_id, uniqueness: { scope: :title}
    validates :title,:artist_id, :image_url, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User

    has_many :artwork_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :ArtworkShare

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer

    has_many :comments,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :likeable_id,
        class_name: :Like,
        as: :likeable

end