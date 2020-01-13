import time

def countdown(start):
    while start>0:
        print(start)
        time.sleep(1)
        start -= 1
        if start== 0:
            print("END")
start = int(input())
countdown(start)
