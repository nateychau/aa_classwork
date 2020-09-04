class ArtworksController < ApplicationController
    def index
        user = User.find_by(id: params[:user_id])
        render json: "own art: #{user.artworks.to_json} \n
        shared art: #{user.artwork_shares.to_json}"
    end
    def destroy
        artwork = Artwork.find_by(id: params[:id]) 
        artwork.destroy
        render json: artwork
    end
    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        artwork = Artwork.find_by(id: params[:id])

        if artwork
            render json: artwork
        else
            render json: "That artwork does not exist"
        end
    end

    def update
        artwork = Artwork.find_by(id: params[:id]) 
        if artwork
            artwork.update(artwork_params)
            render json: artwork
        else
            render json: 'artwork does not exist'
        end          
    end
    private
    def artwork_params
        params.require(:artworks).permit(:title, :artist_id, :image_url)
    end
end
