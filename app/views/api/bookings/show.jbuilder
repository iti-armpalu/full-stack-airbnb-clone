json.booking do
  json.id @booking.id
  json.start_date @booking.start_date
  json.end_date @booking.end_date

  json.property do
    json.id @booking.property.id
    json.title @booking.property.title
    json.property_type @booking.property.property_type
    json.price_per_night @booking.property.price_per_night
    json.max_guests @booking.property.max_guests
    json.bedrooms @booking.property.bedrooms
    json.beds @booking.property.beds
    json.baths @booking.property.baths
    json.image url_for(@booking.property.image)
    json.city @booking.property.city

    json.user do
      json.id @booking.property.user.id
      json.username @booking.property.user.username
    end
  end

  json.user do
    json.id @booking.user.id
    json.email @booking.user.email
  end

end