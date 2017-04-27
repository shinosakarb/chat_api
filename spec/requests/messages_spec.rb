require 'rails_helper'

RSpec.describe "Messages API", type: :request do
  # initialize tests data
  let!(:messages) { create_list(:message, 10) }
  let(:message_id) { messages.first.id }

  # test suite for GET / messages
  describe "GET / messages" do
    before { get "/api/messages" }

    it "returns status code 200" do
      expect(response).to have_http_status(200)
    end

    it "returns messages" do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  # test suite for GET / messages / :id
  describe "GET / messages / :id" do
    before { get "/api/messages/#{message_id}" }

    context "when the record exists" do
      it "returns status code 200" do
        expect(response).to have_http_status(200)
      end

      it "returns the message" do
        expect(json).not_to be_empty
        expect(json['id']).to eq(message_id)
      end
    end

    context "when the record does not exist" do
      let(:message_id) { 100 }

      it "returns status code 404" do
        expect(response).to have_http_status(404)
      end

      it "returns a not found message" do
        expect(response.body).to match(/Couldn't find Message/)
      end
    end
  end

  # test suite for POST / messages
  describe "POST / messages" do
    let(:valid_attributes) { { text: "Text" } }
    let(:invalid_attributes) { {} }

    context "when the request is valid" do
      before { post "/api/messages", params: valid_attributes }

      it "returns status code 201" do
        expect(response).to have_http_status(201)
      end

      it "creates a message" do
        expect(json['text']).to eq("Text")
      end
    end

    describe "when the request is invalid" do
      before { post "/api/messages", params: invalid_attributes }

      it "returns status code 422" do
        expect(response).to have_http_status(422)
      end

      it "returns a validation failure message" do
        expect(response.body).to match(/Validation failed: Text can't be blank/)
      end
    end
  end

  # test suite for PUT / messages / :id
  describe "PUT / messages / :id" do
    let(:valid_attributes) { { text: "Text" } }

    context "when the record exists" do
      before { put "/api/messages/#{message_id}", params: valid_attributes }

      it "returns status code 204" do
        expect(response).to have_http_status(204)
      end

      it "updates the record" do
        expect(response.body).to be_empty
      end
    end
  end

  # test suite for DELETE / messages / :id
  describe "DELETE / messages / :id" do
    before { delete "/api/messages/#{message_id}" }

    it "returns status code 204" do
      expect(response).to have_http_status(204)
    end
  end
end
