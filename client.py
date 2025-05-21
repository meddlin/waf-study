# client.py
import http.client

conn = http.client.HTTPConnection("localhost", 8080)
conn.request("GET", "/")
response = conn.getresponse()

print("Status:", response.status)
print("Reason:", response.reason)
print("Response body:", response.read().decode())

conn.close()