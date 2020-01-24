from forex_python.converter import CurrencyRates

def exchange(cur1, cur2, amount):
    c = CurrencyRates()
    result = c.convert(cur1, cur2, float(amount))
    print(result)
cur1 = input("Enter current currency: ")
cur2 = input("Enter change currency: ")
amount = input("Enter amount: ")

exchange(cur1,cur2, amount)