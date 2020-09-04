class UsersController < ApplicationController

    
    def index
        if params[:query]
            username = params[:query]
            users = User.where("username like '#{username}%' OR username like '%#{username}' OR username like '%#{username}%'").pluck(:username)
        else
            users = User.all
        end
        render json: users
    end
    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: params[:id])

        if user
            render json: user
        else
            render json: "That user does not exist"
        end
    end

    def update
        user = User.find_by(id: params[:id]) 
        if user
            user.update(user_params)
            render json: user
        else
            render json: 'user does not exist'
        end          
    end
    
    def destroy
        user = User.find_by(id: params[:id]) 
        user.destroy
    end
    private
        def user_params
            params.require(:users).permit(:username)
        end
end