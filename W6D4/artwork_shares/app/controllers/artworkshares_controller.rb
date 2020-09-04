class ArtworksharesController < ApplicationController
    def create
        share = ArtworkShare.new(artwork_share_params)
        if share.save
            render json: share
        else
            render json: share.errors.full_messages
        end

    end

    def destroy
        artwork_share = ArtworkShare.find_by(id: params[:id]) 
        artwork_share.destroy
        render json: artwork_share 
    end

    private
    def artwork_share_params
        params.require(:artwork_shares).permit(:artwork_id, :viewer_id)
    end
end
