val = float(input("Price: "))
pay = float(input("Payment: "))
rate = int(input("Rate your expierience 1 to 10: "))

rates = [1, 1.05, 1.05, 1.10 , 1.10, 1.15, 1.15, 1.20, 1.20, 1.25]
p = round(val *rates[rate-1], 2)
r = rates[rate-1]
print("Pay: "+str(p))
print("Rate: "+ str(r))
print("Tip: "+str(round(val * (rates[rate-1]-1), 2)))
print("Change: "+ str(round(pay-p,2)))