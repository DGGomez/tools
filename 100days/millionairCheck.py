import math
# input current age, savings and how much is saved each year
age = int(input("Put in your age: "))
savings = float(input("How much do you save each year?: "))

# mulitply value from 65-age

time = 65 - age
print("Amount saved by 65: "+ str(time*savings))

# use compounded interest here
# invest = savings * math.pow((1.07),time)

invest = savings * (math.pow(1.07,time) -1) / 0.07
print("Amount invested by 65: "+str(invest))

print("To continue making your savings each year you need: " + str(savings*25))
