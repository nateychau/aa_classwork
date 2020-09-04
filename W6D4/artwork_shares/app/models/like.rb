class Like < ApplicationRecord
    validates :likeable_id, :likeable_type, presence: true
    belongs_to :likeable, 
        polymorphic:true,
        primary_key: :id,
        foreign_key: :likeable_id,
        class_name: :likeable_type
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
