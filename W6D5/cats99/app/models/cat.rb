class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    COLORS = %w(red green yellow blue orange)
    validates :birthdate, :color, :name, :sex, :description, presence: true
    validates :color, inclusion: { in: COLORS,
        message: "%{value} is not a valid color"}
    validates :sex, inclusion: { in: %w(M F)}

    def age
        time_ago_in_words(birthdate)
    end
end
