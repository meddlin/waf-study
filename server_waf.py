import re
from http.server import BaseHTTPRequestHandler, HTTPServer

class WAFHandler(BaseHTTPRequestHandler):
    def _scan_for_threats(self, text):
        threats = {
            "SQL Injection": [
                r"(?i)('|\")\s*or\s+['\"]?1['\"]?\s*=\s*['\"]?1",  # ' OR '1'='1'
                r"(?i)(union\s+select)",                           # UNION SELECT
                r"(?i)drop\s+table",                               # DROP TABLE
            ],
            "XSS": [
                r"<script.*?>.*?</script.*?>",
                r"javascript:",
                r"on\w+=['\"].*?['\"]"
            ],
            "Path Traversal": [
                r"\.\./",
                r"\.\.\\"
            ]
        }

        for category, patterns in threats.items():
            for pattern in patterns:
                if re.search(pattern, text):
                    return f"Possible {category} attack detected!"
        return None

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode()

        print("Headers:")
        for k, v in self.headers.items():
            print(f"{k}: {v}")

        print("\nBody:")
        print(post_data)

        # 🛡️ Check for threats
        alert = self._scan_for_threats(post_data)
        if alert:
            print("🚨 SECURITY ALERT:", alert)
            self.send_response(403)
            self.end_headers()
            self.wfile.write(f"Blocked: {alert}".encode())
            return

        # Respond normally
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"POST received")

def run(server_class=HTTPServer, handler_class=WAFHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Server running at http://localhost:{port}/')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
