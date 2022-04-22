class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def property
    @data = { property_id: params[:id] }.to_json
    render 'property'
  end

  def login
    render 'login'
  end

  def booking
    @data = { booking_id: params[:id] }.to_json
    render 'booking'
  end

  def bookings
    render 'bookings'
  end

  def listings
    render 'listings'
  end

  def add_property
    render 'add_property'
  end

  def edit_property
    @data = { property_id: params[:id] }.to_json
    render 'edit_property'
  end

  def reservations
    render 'reservations'
  end

end