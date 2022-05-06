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

  def booking_success
    @data = { booking_id: params[:id] }.to_json
    render 'booking_success'
  end

  def bookings
    @data = { username: params[:username] }.to_json
    render 'bookings'
  end

  def listings
    @data = { username: params[:username] }.to_json
    render 'listings'
  end

  def add_property
    render 'add_property'
  end

  def edit_property
    @data = { property_id: params[:id] }.to_json
    render 'edit_property'
  end

  def property_reservations
    @data = { booking_id: params[:id] }.to_json
    render 'property_reservations'
  end

  def reservations
    @data = { username: params[:username] }.to_json
    render 'reservations'
  end

end