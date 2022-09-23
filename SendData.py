import requests
import json


# Variables globales
API_ENDPOINT = "http://xxx.xxx.xxx.xxx:yyyy"
API_KEY = "XXXXXXXXXXXXXXXXX"

# Inicializacion de variables
worker = None   
dist = 0

# La aplicación recibe primero los datos AQUI y luego los incluye en data

data = {    # Tupla de valores id - posicion para mandar a la web
    "id": worker,
    "distance": dist
}

r = requests.post(url=API_ENDPOINT, data=data)  # Sube los datos a la web
