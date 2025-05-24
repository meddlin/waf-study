# server.py
from http.server import BaseHTTPRequestHandler, HTTPServer
from rich import print

class SimpleHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # 🔴 Set a breakpoint here to inspect request headers
        print("Incoming headers:")
        for header, value in self.headers.items():
            print(f"{header}: {value}")

        # Continue with response
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Hello from the server!')

def run(server_class=HTTPServer, handler_class=SimpleHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f':sparkle: Server running at [blue] http://localhost:{port}/ [/blue]')
    httpd.serve_forever()

if __name__ == '__main__':
    run()