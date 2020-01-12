from pymongo import MongoClient

# get website, username, and password
def storing(website, username, password):
    # send to db
    post = {"website": website, "username": username, "password": password}
    client = MongoClient(os.environ['URI'])
    db = client.passwords
    # collection = db['passwords']
    db.posts.insert_one(post).inserted_id
    client.close()