import json

# Step 1: Load the snack inventory from the JSON file


def load_inventory():
    try:
        with open("snack_inventory.json", "r") as file:
            inventory_data = json.load(file)
            return inventory_data
    except FileNotFoundError:
        return []

# Step 2: Save the updated snack inventory to the JSON file


def save_inventory(inventory_data):
    with open("snack_inventory.json", "w") as file:
        json.dump(inventory_data, file)

# Step 3: Add a new snack to the inventory


def add_snack(snack_id, snack_name, price, availability):
    inventory_data = load_inventory()
    new_snack = {
        "snack_id": snack_id,
        "snack_name": snack_name,
        "price": price,
        "availability": availability
    }
    inventory_data.append(new_snack)
    save_inventory(inventory_data)

# Step 4: Remove a snack from the inventory


def remove_snack(snack_id):
    inventory_data = load_inventory()
    # Create a new inventory without the snack to be removed
    updated_inventory = [
        snack for snack in inventory_data if snack["snack_id"] != snack_id]
    save_inventory(updated_inventory)

# Step 5: Display the current snack inventory


def display_inventory():
    inventory_data = load_inventory()
    if not inventory_data:
        print("The inventory is empty.")
    else:
        print("Current Snack Inventory:")
        print("Snack ID | Snack Name | Price | Availability")
        print("------------------------------------------")
        for snack in inventory_data:
            print(
                f"{snack['snack_id']} | {snack['snack_name']} | {snack['price']} | {'Available' if snack['availability'] else 'Not Available'}"
            )
        print("------------------------------------------")

# Step 6: Prompt the staff to enter snack details and return them as a dictionary


def get_snack_details():
    snack_id = input("Enter Snack ID: ")
    snack_name = input("Enter Snack Name: ")
    price = float(input("Enter Snack Price: "))
    availability = input("Is the Snack Available? (yes/no): ").lower() == "yes"
    return {'snack_id': snack_id, 'snack_name': snack_name, 'price': price, 'availability': availability}

# Step 7: Update the availability of a snack


def update_availability(snack_id, availability):
    inventory_data = load_inventory()
    for snack in inventory_data:
        if snack['snack_id'] == snack_id:
            snack['availability'] = availability
            break
    save_inventory(inventory_data)


# Step 8: Add sale record and update inventory
def make_sale(snack_id):
    inventory_data = load_inventory()
    sale_snack = None

    # Find the snack in inventory and update availability
    for snack in inventory_data:
        if snack['snack_id'] == snack_id:
            # Snack is sold, so availability becomes False
            snack['availability'] = False
            sale_snack = snack
            break

    if sale_snack is not None:
        save_inventory(inventory_data)

        # Record the sale in sales_records.json
        try:
            with open("sales_records.json", "r") as sales_file:
                sales_data = json.load(sales_file)
        except FileNotFoundError:
            sales_data = []

        sales_data.append({
            "snack_id": sale_snack['snack_id'],
            "snack_name": sale_snack['snack_name'],
            "price": sale_snack['price']
        })

        with open("sales_records.json", "w") as sales_file:
            json.dump(sales_data, sales_file)

        print("Sale recorded successfully.")
    else:
        print("Snack not found in inventory.")

# Step 9: Display sales records


def display_sales_records():
    try:
        with open("sales_records.json", "r") as sales_file:
            sales_data = json.load(sales_file)
            if not sales_data:
                print("No sales records found.")
            else:
                print("Sales Records:")
                print("Snack ID | Snack Name | Price")
                print("--------------------------------")
                for sale in sales_data:
                    print(
                        f"{sale['snack_id']} | {sale['snack_name']} | {sale['price']}")
                print("--------------------------------")
    except FileNotFoundError:
        print("No sales records found.")

# Step 10: Provide a menu for managing the inventory and sales records


def manage_inventory_and_sales():
    while True:
        print("----------------------------------------------------------------")
        print("\n----- Mumbai Munchies - Inventory Management Menu -----")
        print("1. Display Inventory")
        print("2. Add New Snack to Inventory")
        print("3. Remove Snack from Inventory")
        print("4. Update Snack Availability")
        print("5. Record Sale")
        print("6. Display Sales Records")
        print("7. Exit")

        print("----------------------------------------------------------------")
        choice = input("Enter your choice (1/2/3/4/5/6/7): ")

        if choice == "1":
            display_inventory()
        elif choice == "2":
            snack_details = get_snack_details()
            add_snack(**snack_details)
            print("Snack added to inventory successfully.")
        elif choice == "3":
            snack_id = input("Enter Snack ID to remove: ")
            remove_snack(snack_id)
            print("Snack removed from inventory successfully.")
        elif choice == "4":
            snack_id = input("Enter Snack ID to update availability: ")
            availability = input(
                "Is the Snack Available? (yes/no): ").lower() == "yes"
            update_availability(snack_id, availability)
            print("Snack availability updated successfully.")
        elif choice == "5":
            snack_id = input("Enter Snack ID for the sale: ")
            make_sale(snack_id)
        elif choice == "6":
            display_sales_records()
        elif choice == "7":
            print("Exiting Inventory Management. Goodbye!")
            break
        else:
            print("Invalid choice. Please choose a valid option (1/2/3/4/5/6/7).")


if __name__ == "__main__":
    manage_inventory_and_sales()
