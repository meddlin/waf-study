###
#
# Asking ChatGPT about manually crafting HTTP requests, it generated this code
# which is a good starting point for using this as a template to make 
# weird requests to our server.
###

import http.client
import json

conn = http.client.HTTPConnection("localhost", 8080)

headers = {
    "User-Agent": "MyCustomAgent/1.0",
    "Content-Type": "application/json",
    "X-Custom-Header": "Test123"
}

body = json.dumps({"key": "value", "test": "<script>alert(1)</script>"})

conn.request("POST", "/", body=body, headers=headers)

response = conn.getresponse()
print("Status:", response.status)
print("Headers:", response.getheaders())
print("Body:", response.read().decode())

conn.close()