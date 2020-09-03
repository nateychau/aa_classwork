class ArtworksController < ApplicationController
    def index
        artworks = Artwork.all
        render json: artworks
    end
    def destroy
        artwork = Artwork.find_by(id: params[:id]) 
        artwork.destroy
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
