# if event then reduce health
# after time return health scores
# Score ratings

# most health, most kills, most damage
import asyncio
import sys

import time

health = []
kills = []
damage = []
dead = []

# input player size

def start (players):
    health = [100] * len(players)
    kills = [0] * len(players)
    damage = [0] * len(players)
    dead = [False] * len(players)
    #start time
    time()

async def time():
    start = time.time()
    
    # 5 min round
    while time.time() - start < 300:
        # all but one is dead then end
        check = dead.count(False)
        if(check == 1):
            break
        continue
    results()
    sys.exit()

def results():
    print("Kills")
    count=0
    mostKills = 0
    winner = 0
    for i in kills:
        print("player"+str(count)+": "+i)
        if i> mostKills:
            winner = count

    print("Damage")
    count = 0
    for i in damage:
        print("player"+str(count)+": "+i)

    # declare winner
    print("Winner: "+str(winner))
    # if only alive
    # else most kills and alive

# check if either player is dead already
async def main(hit, player1, player2):
    if dead[player1] or dead[player2]:
        return
    health[player1] -= 10
    if(health[player1] <=0):
        kills[player2] += 1
        dead[player1] = True
    damage[player2] += 10

asyncio.run(start()) 

