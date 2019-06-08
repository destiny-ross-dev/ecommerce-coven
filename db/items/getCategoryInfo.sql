SELECT category_id, category_name, category_url, category_description, category_banner 
FROM item_categories 
WHERE category_url = $1