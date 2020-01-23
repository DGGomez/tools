import time
from datetime import datetime
from datetime import date

def countdown(start):
    print(start)
    while start>0:
        print(start)
        time.sleep(1)
        start -= 1
        if start== 0:
            print("END")            

today = datetime.today()
start = input("Input day-month-year of event: ")
vals = start.split("-")
t = datetime(int(vals[2]), int(vals[1]), int(vals[0]), 0, 0)

countdown(int(abs(time.mktime(t.timetuple()) - today.timestamp())))
