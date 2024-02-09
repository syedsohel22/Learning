from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect, get_object_or_404
from .models import Dish
from .forms import DishForm

def dish_list(request):
    dishes = Dish.objects.all()
    return render(request, 'templates/dish_list.html', {'dishes': dishes})

def add_dish(request):
    if request.method == 'POST':
        form = DishForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('dish_list')
    else:
        form = DishForm()
    return render(request, 'templates/dish_form.html', {'form': form})

# Implement update_dish and delete_dish views similarly.

def update_dish(request, dish_id):
    dish = get_object_or_404(Dish, pk=dish_id)
    if request.method == 'POST':
        form = DishForm(request.POST, instance=dish)
        if form.is_valid():
            form.save()
            return redirect('dish_list')
    else:
        form = DishForm(instance=dish)
    return render(request, 'templates/dish_list.html', {'form': form})

def delete_dish(request, dish_id):
    dish = get_object_or_404(Dish, pk=dish_id)
    if request.method == 'POST':
        dish.delete()
        return redirect('dish_list')
    return render(request, 'restaurant/dish_confirm_delete.html', {'dish': dish})

