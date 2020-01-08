 # importing necessary libraries 
import reverse_geocoder as rg 
import pprint 
import geocoder
def reverseGeocode(coordinates): 
    result = rg.search(coordinates) 
      
    # result is a list containing ordered dictionary. 
    pprint.pprint(result)  
  
# Driver function 
if __name__=="__main__": 
    g = geocoder.ip('me')
    loc = g.latlng
    # Coorinates tuple.Can contain more than one pair. 
    coordinates =(loc[0], loc[1]) 
      
    reverseGeocode(coordinates)  