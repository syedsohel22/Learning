from django.db import models

# Create your models here.
class Dish(models.Model):
    dish_name = models.CharField(max_length=100)
    price=models.DecimalField(max_digits=6,decimal_places=2)
    availibility = models.BooleanField(default=True)

    def __str__(self):
        return self.dish_name