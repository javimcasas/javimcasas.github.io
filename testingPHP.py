from urllib.request import urlopen


data = [('one', '1'), ('two', '2')]
data=urllib.urlencode(data)
url = 'index.html'

req=urllib2.Request(url, data)
