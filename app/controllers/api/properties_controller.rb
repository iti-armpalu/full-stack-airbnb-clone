module Api
  class PropertiesController < ApplicationController
    def index
      @properties = Property.order(created_at: :desc).page(params[:page]).per(10)
      render 'api/properties/index', status: :ok
    end

    def show
      @property = Property.find_by(id: params[:id])
      return render json: {}, status: :not_found if !@property

      render 'api/properties/show', status: :ok
    end
  end
end
