json.total_pages @properties.total_pages
json.next_page @properties.next_page
json.last_page @properties.last_page?

json.properties do
  json.array! @properties do |property|
    json.id property.id
    json.title property.title
    json.city property.city
    json.country property.country
    json.type property.type
    json.price_per_night property.price_per_night
    json.image_url property.image_url
  end
end
