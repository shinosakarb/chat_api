module Api
  class MessagesController < ApiController
    before_action :set_message, only: [:show, :update, :destroy]

    # GET / messages
    def index
      @messages = Message.order(created_at: :asc).all
      json_response(@messages)
    end

    # GET / messages / :id
    def show
      json_response(@message)
    end

    # POST / messages
    def create
      @message = Message.create!(message_params)
      json_response(@message, :created)
    end

    # PUT / messages / :id
    def update
      @message.update(message_params)
      head :no_content
    end

    # DELETE / messages / :id
    def destroy
      @message.destroy
      head :no_content
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_message
        @message = Message.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def message_params
        params.permit(:text)
      end
  end
end
