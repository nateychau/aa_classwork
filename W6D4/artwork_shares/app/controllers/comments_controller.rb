class CommentsController < ApplicationController
    def index
        if params[:comments][:user_id]
            user = User.find_by(id: params[:comments][:user_id])
            user.nil? ? (render json: 'User doesn\'t exist') : (render json: user.comments.to_json)
        elsif params[:comments][:artwork_id]
            artwork = Artwork.find_by(id: params[:comments][:artwork_id])
            artwork.nil? ? (render json: 'Artwork doesn\'t exist') : (render json: artwork.comments.to_json)
        else
            render json: "Please provide a user or artwork ID"
        end
    end
    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        render json: comment
    end
    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: "#{comment.user.name} commented on #{comment.artwork.title}:
                #{comment.body}"
        else
            render json: comment.errors.full_messages
        end
    end

    private
    def comment_params
        params.require(:comments).permit(:artwork_id, :user_id)
    end
end
