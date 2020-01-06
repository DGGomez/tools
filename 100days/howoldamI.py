from datetime import datetime


birthday = datetime.strptime(input("Enter Birthday (Year-Month-Day, 0000-00-00): "),"%Y-%m-%d")


currDate = datetime.strptime(str(datetime.now().date()), "%Y-%m-%d")

print("Current date: "+str(currDate))
days = abs(birthday-currDate)
trimming = str(days).split(" ")
print("You've been alive: "+str(trimming[0])+" days")

# check month
print("You've been alive: "+ str(int(trimming[0])*12/365)+" months")
# years
print("You've been alive: "+str(int(trimming[0])/365)+" years")

