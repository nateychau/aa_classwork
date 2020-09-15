# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  sub_id     :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :title, :sub_id, :author_id, presence:true 
    # validates :url, allow_nil:true 
    # validates :content, allow_nil:true

    belongs_to :sub,
        foreign_key: :sub_id, 
        class_name: :Sub

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User 
end
