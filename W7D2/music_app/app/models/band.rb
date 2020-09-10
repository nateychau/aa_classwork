class Band < ApplicationRecord
    validates :name, presence: true
    has_many :albums,
        foreign_key: :band,
        class_name: :Album,
        primary_key: :id,
        
end
