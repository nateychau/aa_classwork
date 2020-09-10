# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
# SPIRE
class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token 

    attr_reader :password
    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            @user
        else 
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
        #might need to use a symbol for pword_digest --> check syntax
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password #used for validation
    end

    
end
