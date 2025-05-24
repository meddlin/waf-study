# client.py
import http.client
from rich import print

conn = http.client.HTTPConnection("localhost", 8080)
conn.request("GET", "/")
response = conn.getresponse()

print("[green]Status: [/green]", response.status)
print("[green]Reason: [/green]", response.reason)
print("[green]Response body: [/green]", response.read().decode())

conn.close()