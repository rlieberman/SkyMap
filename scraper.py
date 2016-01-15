#Uses cities.json file
#Scrapes images from Google Streetview Image API and downloads them to a directory called images
#Based on Sam Lavigne's web scraper example  https://github.com/antiboredom/webscrape_tutorial

import urllib
import json
import time
import json

my_key = 'AIzaSyDzYZyqUA9AjEif5QDItyoUd4vu4OQKfGE'

output = []

def download_image(latitude,longitude, city):
    # city = city.replace(' ','')
    url = "http://maps.googleapis.com/maps/api/streetview?size=180x180&location=" + latitude + "," + longitude + "&fov=50&heading=220&pitch=100&sensor=false&key=" + my_key

    print 'downloading', url
    img_filename = city + '.jpg'
    urllib.urlretrieve(url, 'images/' + img_filename)


with open('cities.json', "r") as infile:
  data = json.load(infile)
  #print data

for city in data:
  # print city
  ll = city['ll'].split(',')
  latitude = ll[0]
  longitude = ll[1]
  cityname = city['city']
  print latitude, longitude, cityname

  download_image(latitude, longitude, cityname)
  time.sleep(.1)