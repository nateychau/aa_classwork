class BandsController < ApplicationController
    def new
        render :new 
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to band_url(@band)
        else
            render :new
        end
    end

    def band_params
        params.require(:band).permit(:name)
    end

    def show
        @band = Band.find(params[:id])
        render :show
    end

    def index
        @bands = Band.all
        render :index
    end

    def update
        @band = Band.find(params[:id])
        if @band.update(band_params)
            redirect_to band_url(@band)
        else
            render :edit
        end
    end

    def edit
        @band = Band.find(params[:id])
        render :edit
    end

    def destroy
        # debugger
        @band = Band.find(params[:id])
        Band.delete(@band)
        redirect_to bands_url
    end

end
