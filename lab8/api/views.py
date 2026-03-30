from django.http import JsonResponse

from .models import Category, Product


def product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": product.category_id,
    }


def category_to_dict(category):
    return {
        "id": category.id,
        "name": category.name,
    }


def products_list(request):
    products = Product.objects.all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    return JsonResponse(product_to_dict(product))


def categories_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(category) for category in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    return JsonResponse(category_to_dict(category))


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    products = category.products.all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)
