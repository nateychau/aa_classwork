#WHY DO WE PUT CUSTOM ERROR MESSAGES IN BRACKETS
#!!!!!!!

class SubsController < ApplicationController
    before_action :require_logged_in, only: [:new, :update, :create, :edit]

    def new 
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def edit
        @sub = Sub.find(params[:id])
        render :edit
    end

    def update 
        # @sub = Sub.find(params[:id])
        # if @sub.moderator_id == current_user.id 
        @sub = current_user.subs.find_by(id: params[:id])
        if @sub
            if @sub.update(sub_params)
                redirect_to sub_url(@sub)
            else 
                flash[:errors] = @sub.errors.full_messages 
                render :edit 
            end
        else
            flash[:errors] = ["You don't have access to edit this sub"]
            redirect_to subs_url 
        end
    end

    def show
        @sub = Sub.find(params[:id])
        render :show 
    end

    def index 
        @subs = Sub.all 
        render :index 
    end



    private 
    def sub_params
        params.require(:sub).permit(:title,:description,:moderator_id)
    end
end
