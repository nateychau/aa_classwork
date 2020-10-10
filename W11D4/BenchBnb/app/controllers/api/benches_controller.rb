class Api::BenchesController < ApplicationController
   def index
    @benches = Bench.in_bounds(params[:filters])
    render :index
   end

   def show 
    @bench = Bench.find(params[:id])
    render :show 
    end

   def create
    @bench = Bench.new(bench_params)
    if @bench.save
        render :show
    else
        render json: @bench.errors.full_messages, status: 404
    end
   end

   private
   def bench_params
    params.require(:bench).permit(:description, :lng, :lat)
   end
end
