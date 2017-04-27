require 'rails_helper'

RSpec.describe Message, type: :model do
  # association test
  # ensure Message model has a 1:m relationship with the Reaction model
  it { should have_many(:reactions).dependent(:destroy) }
  # validation tests
  # ensure columns text is present before saving
  it { should validate_presence_of(:text) }
end
