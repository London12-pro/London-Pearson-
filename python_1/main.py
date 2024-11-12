# Bank Account Management System

# List of account balances for multiple users
accounts = [1000.50, 1500.75, 3200.10, 500.20]  # Initial balances for 4 users

# Function to display the current balance of each account
def display_balances():
    """
    This function displays the balance of each account in the system.
    """
    print("\nAccount Balances:")
    for index, balance in enumerate(accounts):
        print(f"Account {index + 1}: ${balance:.2f}")

# Function to deposit money into a specified account
def deposit(account_index, amount):
    """
    This function deposits a specified amount into the given account.

    Parameters:
    account_index (int): The index of the account to deposit into (0-based index).
    amount (float): The amount to deposit into the account.
    """
    if amount > 0:
        accounts[account_index] += amount
        print(f"Deposited ${amount:.2f} into Account {account_index + 1}.")
    else:
        print("Invalid deposit amount. Must be greater than zero.")

# Function to withdraw money from a specified account
def withdraw(account_index, amount):
    """
    This function withdraws a specified amount from the given account.

    Parameters:
    account_index (int): The index of the account to withdraw from (0-based index).
    amount (float): The amount to withdraw from the account.
    """
    if amount > 0 and accounts[account_index] >= amount:
        accounts[account_index] -= amount
        print(f"Withdrew ${amount:.2f} from Account {account_index + 1}.")
    else:
        print("Invalid withdrawal amount or insufficient balance.")

# Main program loop for interacting with the user
def main():
    """
    Main function to run the Bank Account Management System.
    It allows the user to deposit, withdraw, or check account balances.
    """
    print("Welcome to the Bank Account Management System!\n")
    
    while True:
        print("\nWhat would you like to do?")
        print("1. View Account Balances")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Please enter the number of your choice: ")
        
        if choice == "1":
            # View all account balances
            display_balances()

        elif choice == "2":
            # Deposit money into an account
            display_balances()
            account_index = int(input("Enter the account number (1-4) to deposit into: ")) - 1
            amount = float(input("Enter the amount to deposit: $"))
            deposit(account_index, amount)

        elif choice == "3":
            # Withdraw money from an account
            display_balances()
            account_index = int(input("Enter the account number (1-4) to withdraw from: ")) - 1
            amount = float(input("Enter the amount to withdraw: $"))
            withdraw(account_index, amount)

        elif choice == "4":
            print("Thank you for using the Bank Account Management System!")
            break  # Exit the loop and end the program
        
        else:
            print("Invalid choice. Please try again.")

# Run the main program
if __name__ == "__main__":
    main()
