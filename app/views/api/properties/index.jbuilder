json.total_pages @properties.total_pages
json.next_page @properties.next_page

json.properties do
  json.array! @properties do |property|
    json.id               property.id
    json.title            property.title
    json.description      property.description
    json.city             property.city
    json.country          property.country
    json.property_type    property.property_type
    json.max_guests       property.max_guests
    json.bedrooms         property.bedrooms
    json.beds             property.beds
    json.baths            property.baths
    json.price_per_night  property.price_per_night
    
    if property.image.attached?
      json.image url_for(property.image)
    else
      json.image nil
    end

  end
end