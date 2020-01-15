import time

def countdown(start):
    while start>0:
        print(start)
        time.sleep(1)
        start -= 1
        if start== 0:
            print("END")

# input a date
# list years, months, days, hours, minutes, and seconds remaining
start = int(input())
countdown(start)
