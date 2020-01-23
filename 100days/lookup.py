from uszipcode import SearchEngine
zcdb = SearchEngine(simple_zipcode=False)
val = input()
zipcode = zcdb.by_zipcode(val)
print(zipcode)