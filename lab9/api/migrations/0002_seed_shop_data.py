from django.db import migrations


def seed_shop_data(apps, schema_editor):
    Category = apps.get_model("api", "Category")
    Product = apps.get_model("api", "Product")

    category_names = [
        "Electronics",
        "Books",
        "Clothing",
        "Home & Kitchen",
    ]

    categories = {}
    for name in category_names:
        categories[name], _ = Category.objects.get_or_create(name=name)

    products = [
        {
            "name": "Wireless Mouse",
            "price": 24.99,
            "description": "Ergonomic wireless mouse with silent clicks.",
            "count": 50,
            "is_active": True,
            "category": categories["Electronics"],
        },
        {
            "name": "Mechanical Keyboard",
            "price": 79.99,
            "description": "Compact keyboard with tactile switches.",
            "count": 30,
            "is_active": True,
            "category": categories["Electronics"],
        },
        {
            "name": "USB-C Charger",
            "price": 19.99,
            "description": "Fast-charging 30W USB-C wall adapter.",
            "count": 70,
            "is_active": True,
            "category": categories["Electronics"],
        },
        {
            "name": "Noise-Cancelling Headphones",
            "price": 129.99,
            "description": "Over-ear headphones with active noise cancelling.",
            "count": 18,
            "is_active": True,
            "category": categories["Electronics"],
        },
        {
            "name": "Smart LED Bulb",
            "price": 14.99,
            "description": "App-controlled bulb with adjustable color temperature.",
            "count": 40,
            "is_active": True,
            "category": categories["Electronics"],
        },
        {
            "name": "Python for Beginners",
            "price": 29.5,
            "description": "Introductory programming guide with practical exercises.",
            "count": 25,
            "is_active": True,
            "category": categories["Books"],
        },
        {
            "name": "Django in Practice",
            "price": 34.0,
            "description": "Hands-on book for building web apps with Django.",
            "count": 20,
            "is_active": True,
            "category": categories["Books"],
        },
        {
            "name": "REST API Design",
            "price": 31.75,
            "description": "Principles and patterns for robust API design.",
            "count": 16,
            "is_active": True,
            "category": categories["Books"],
        },
        {
            "name": "Modern Fiction Novel",
            "price": 15.2,
            "description": "Bestselling novel with contemporary storytelling.",
            "count": 45,
            "is_active": True,
            "category": categories["Books"],
        },
        {
            "name": "Business Strategy Handbook",
            "price": 27.4,
            "description": "Compact guide to market strategy and execution.",
            "count": 14,
            "is_active": True,
            "category": categories["Books"],
        },
        {
            "name": "Classic T-Shirt",
            "price": 12.99,
            "description": "Soft cotton T-shirt for everyday wear.",
            "count": 60,
            "is_active": True,
            "category": categories["Clothing"],
        },
        {
            "name": "Denim Jacket",
            "price": 54.99,
            "description": "Medium-wash denim jacket with regular fit.",
            "count": 22,
            "is_active": True,
            "category": categories["Clothing"],
        },
        {
            "name": "Running Shoes",
            "price": 68.5,
            "description": "Lightweight shoes built for daily training.",
            "count": 35,
            "is_active": True,
            "category": categories["Clothing"],
        },
        {
            "name": "Winter Scarf",
            "price": 18.25,
            "description": "Warm knitted scarf for cold weather.",
            "count": 40,
            "is_active": True,
            "category": categories["Clothing"],
        },
        {
            "name": "Baseball Cap",
            "price": 16.0,
            "description": "Adjustable cap with curved brim.",
            "count": 55,
            "is_active": True,
            "category": categories["Clothing"],
        },
        {
            "name": "Ceramic Mug Set",
            "price": 22.5,
            "description": "Set of four durable ceramic mugs.",
            "count": 28,
            "is_active": True,
            "category": categories["Home & Kitchen"],
        },
        {
            "name": "Non-Stick Frying Pan",
            "price": 39.99,
            "description": "Versatile frying pan with non-stick coating.",
            "count": 24,
            "is_active": True,
            "category": categories["Home & Kitchen"],
        },
        {
            "name": "Cotton Bed Sheet Set",
            "price": 49.99,
            "description": "Breathable queen-size cotton bed sheets.",
            "count": 15,
            "is_active": True,
            "category": categories["Home & Kitchen"],
        },
        {
            "name": "Storage Basket",
            "price": 17.95,
            "description": "Woven basket for organizing household items.",
            "count": 33,
            "is_active": True,
            "category": categories["Home & Kitchen"],
        },
        {
            "name": "Desk Lamp",
            "price": 26.75,
            "description": "Adjustable LED desk lamp with touch controls.",
            "count": 21,
            "is_active": True,
            "category": categories["Home & Kitchen"],
        },
    ]

    for product_data in products:
        Product.objects.get_or_create(
            name=product_data["name"],
            defaults=product_data,
        )


def unseed_shop_data(apps, schema_editor):
    Category = apps.get_model("api", "Category")
    Product = apps.get_model("api", "Product")

    product_names = [
        "Wireless Mouse",
        "Mechanical Keyboard",
        "USB-C Charger",
        "Noise-Cancelling Headphones",
        "Smart LED Bulb",
        "Python for Beginners",
        "Django in Practice",
        "REST API Design",
        "Modern Fiction Novel",
        "Business Strategy Handbook",
        "Classic T-Shirt",
        "Denim Jacket",
        "Running Shoes",
        "Winter Scarf",
        "Baseball Cap",
        "Ceramic Mug Set",
        "Non-Stick Frying Pan",
        "Cotton Bed Sheet Set",
        "Storage Basket",
        "Desk Lamp",
    ]
    category_names = ["Electronics", "Books", "Clothing", "Home & Kitchen"]

    Product.objects.filter(name__in=product_names).delete()
    Category.objects.filter(name__in=category_names, products__isnull=True).delete()


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_shop_data, unseed_shop_data),
    ]
