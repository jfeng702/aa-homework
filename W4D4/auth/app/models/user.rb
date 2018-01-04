class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: {}
end
