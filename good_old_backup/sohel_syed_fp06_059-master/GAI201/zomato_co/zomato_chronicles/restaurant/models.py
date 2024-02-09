from django.db import models

# Create your models here.

from django.db import models

class Dish(models.Model):
    dish_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.dish_name


class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    dishes = models.ManyToManyField(Dish)
    status = models.CharField(max_length=20, default='received')

    def __str__(self):
        return f"Order #{self.pk}"
