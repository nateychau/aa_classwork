class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
        
    end

    def create
        @user = User.new(user_params)
        debugger
        if @user.save!
            redirect_to user_url(@user)
        else 
            render :new
        end 
    end 

    def show
        render :show
    end



    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
