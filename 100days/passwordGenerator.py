import string
import random
from pymongo import MongoClient
import os
from passwordStore import storing

def getVal(arr):
    pick = random.randint(len(arr)-1)
    return arr[pick]

def generate(website, username):
    # check current list of passwords (todo)
    client = MongoClient(os.environ['URI'])
    db = client.passwords
    collection = db['passwords']
    current = list(collection.find({}))

    client.close()
    # make a string 8-12 characters long
    size = random.randint(10,20)
    # contains numbers, uppercase, lowercase, and special character
    numbers = [1,2,3,4,5,6,7,8,9,0]
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    special = ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","}","|","<",",",">",".","?","/"]
    flag = False
    count = 0
    while not flag:
        result = ""
        result += getVal(upper)
        result += getVal(lower)
        result += getVal(numbers)
        result += getVal(special)

        for i in range(4,size):
            pick = random.randint(1,4)
            if pick is 1:
                result += getVal(numbers)
            if pick is 2:
                result += getVal(lower)
            if pick is 3:
                result += getVal(upper)
            if pick is 4:
                result += getVal(special)
        count += 1
        if result not in current:
            break
        if count == 10:
            print("Couldn't make a unqiue password rerun")
            break

    # call Store
    storing(website, username, result)