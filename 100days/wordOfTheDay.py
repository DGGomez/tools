import random
import re
import traceback
import json

def find(dictionary, defintions):
    try:
        for i in range(10):
            select = random.randint(0,235885)
            srch = dictionary[select].upper()
            if srch in defintions:
                print("\nWord: "+ srch+"\n")
                print("Definition: "+str(defintions[srch])+"\n")
                return
        print("Error try again")
    except Exception:
        traceback.print_exc()

val = ""
file = open("words.txt", "r")
count = 0 
dictionary = []
# go through list
for line in file:
    dictionary.append(line.strip())

with open('dictionary.json', 'r') as myfile:
    data=myfile.read()

obj = json.loads(data)

find(dictionary, obj)