class UsersController < ApplicationController
    # new and create methods

    def new
        @user = User.new
        render :new
    end

    def user_params
        params.require(:user).permit(:email,:password) 
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            login!(@user)
            redirect_to(user_url(@user.id))
        else 
            flash.now[:errors] = @user.errors.full_messages #REMEMBER to add to views
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end
end 
