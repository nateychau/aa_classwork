class AlbumsController < ApplicationController
    def new
        @album = Album.new
        render :new
    end

    def update
    end

    def create
        @album = Album.new(album_params)
        if @album.save
            redirect_to album_url(@album)
        else
            render :new
        end
    end

    def album_params
        params.require(:Album).permit(:year, :title, :band, :is_live?)
    end

    def edit
    end

    def destroy
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end
end
