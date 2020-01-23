val = float(input("Price: "))
rate = int(input("Rate your expierience 1 to 10: "))

rates = [1, 1.05, 1.05, 1.10 , 1.10, 1.15, 1.15, 1.20, 1.20, 1.25]
print("Pay: "+str(round(val *rates[rate-1], 2)))
print("Rate: "+ str(rates[rate-1]))
print("Tip: "+str(round(val * (rates[rate-1]-1), 2)))