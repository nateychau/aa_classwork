class Album < ApplicationRecord
    validates :title, :year, presence: true
    belongs_to :band,
        primary_key: :id,
        foreign_key: :band,
        class_name: :Album 
end
