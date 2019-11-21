class CatsController < ApplicationController
    def index
      cats = Cat.order(id: :desc).all
      # cats = Cat.all.order('id DESC')
      render json: cats
    end

    def create
  # Create a new cat
      cat = Cat.create(cat_params)

      if cat.valid?
          render json: cat
      else
          render json: cat.errors, status: :unprocessable_entity
      end
      # respond with our new cat
    end


    def cat_params
      params.require(:cat).permit(:name, :age, :enjoys)
    end
end
