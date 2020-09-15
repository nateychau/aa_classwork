class PostsController < ApplicationController
    def new 
        @post = Post.new
        @subs = Sub.all 
        render :new
    end

    def create
        debugger
        @post = Post.new(post_params)
        if @post.save
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def show 
        @post = Post.find(params[:id])
        render :show
    end


    def edit    
        @post = Post.find(params[:id])
        if @post && current_user.id == @post.author_id 
            render :edit
        else
            redirect_to post_url(@post)
        end
    end

    def update
        @post = current_user.posts.find(params[:id])
        if @post.update(post_params)
            redirect_to post_url(@post)
        else   
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end
    end

    private
    def post_params
        params.require(:post).permit(:title, :url, :content, :sub_id, :author_id)
    end
end
