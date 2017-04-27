class Message < ApplicationRecord
  # model association
  has_many :reactions, dependent: :destroy
  # validation
  validates_presence_of :text
end
