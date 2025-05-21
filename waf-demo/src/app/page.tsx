import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Clock, Globe, Hash, Key, Lock, Server, Shield, Smartphone, Upload } from "lucide-react"

export default function HttpRequestViewer() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">HTTP Request Viewer</h1>
        <p className="text-muted-foreground">Comprehensive view of all HTTP request fields and properties</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Request Overview</CardTitle>
              <Badge variant="outline" className="ml-2">
                GET
              </Badge>
            </div>
            <CardDescription>https://api.example.com/users?page=1&limit=10</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Protocol:</span>
                  <span className="text-sm">HTTP/2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <span className="text-sm">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      200 OK
                    </Badge>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Time:</span>
                  <span className="text-sm">245ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Size:</span>
                  <span className="text-sm">1.2 KB</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Remote IP:</span>
                  <span className="text-sm">192.168.1.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Remote Port:</span>
                  <span className="text-sm">443</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Local IP:</span>
                  <span className="text-sm">10.0.0.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Local Port:</span>
                  <span className="text-sm">8080</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Timing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">DNS Lookup:</span>
                <span className="text-sm">15ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">TCP Connection:</span>
                <span className="text-sm">35ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">TLS Handshake:</span>
                <span className="text-sm">120ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Time to First Byte:</span>
                <span className="text-sm">180ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Content Download:</span>
                <span className="text-sm">65ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Total:</span>
                <span className="text-sm font-bold">245ms</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="headers" className="w-full">
        <TabsList className="grid grid-cols-5 md:w-auto w-full">
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="query">Query Params</TabsTrigger>
          <TabsTrigger value="body">Body</TabsTrigger>
          <TabsTrigger value="auth">Authentication</TabsTrigger>
          <TabsTrigger value="meta">Metadata</TabsTrigger>
        </TabsList>

        <TabsContent value="headers" className="border rounded-md mt-6">
          <div className="p-4 flex items-center">
            <Server className="mr-2 h-5 w-5" />
            <h3 className="text-lg font-medium">Request Headers</h3>
          </div>
          <Separator />
          <ScrollArea className="h-[400px]">
            <div className="p-4 space-y-4">
              {[
                { name: "Accept", value: "application/json, text/plain, */*" },
                { name: "Accept-Encoding", value: "gzip, deflate, br" },
                { name: "Accept-Language", value: "en-US,en;q=0.9" },
                { name: "Cache-Control", value: "no-cache" },
                { name: "Connection", value: "keep-alive" },
                { name: "Content-Type", value: "application/json" },
                { name: "Host", value: "api.example.com" },
                { name: "Origin", value: "https://example.com" },
                { name: "Pragma", value: "no-cache" },
                { name: "Referer", value: "https://example.com/users" },
                { name: "Sec-Fetch-Dest", value: "empty" },
                { name: "Sec-Fetch-Mode", value: "cors" },
                { name: "Sec-Fetch-Site", value: "same-site" },
                {
                  name: "User-Agent",
                  value:
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                },
                { name: "X-Requested-With", value: "XMLHttpRequest" },
              ].map((header, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-sm">{header.name}:</div>
                  <div className="col-span-2 text-sm break-all">{header.value}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="query" className="border rounded-md mt-6">
          <div className="p-4 flex items-center">
            <Hash className="mr-2 h-5 w-5" />
            <h3 className="text-lg font-medium">Query Parameters</h3>
          </div>
          <Separator />
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-medium text-sm">page:</div>
              <div className="col-span-2 text-sm">1</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="font-medium text-sm">limit:</div>
              <div className="col-span-2 text-sm">10</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="font-medium text-sm">sort:</div>
              <div className="col-span-2 text-sm">name_asc</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="font-medium text-sm">filter:</div>
              <div className="col-span-2 text-sm">active=true&role=admin</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="body" className="border rounded-md mt-6">
          <div className="p-4 flex items-center">
            <Upload className="mr-2 h-5 w-5" />
            <h3 className="text-lg font-medium">Request Body</h3>
          </div>
          <Separator />
          <ScrollArea className="h-[400px]">
            <div className="p-4">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                {`{
  "user": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "admin",
    "permissions": [
      "read",
      "write",
      "delete"
    ],
    "settings": {
      "notifications": true,
      "theme": "dark",
      "language": "en-US"
    },
    "metadata": {
      "lastLogin": "2023-05-15T14:30:00Z",
      "browser": "Chrome",
      "os": "Windows"
    }
  }
}`}
              </pre>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="auth" className="border rounded-md mt-6">
          <div className="p-4 flex items-center">
            <Lock className="mr-2 h-5 w-5" />
            <h3 className="text-lg font-medium">Authentication</h3>
          </div>
          <Separator />
          <div className="p-4 space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <Key className="mr-2 h-4 w-4" />
                Bearer Token
              </h4>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
              </pre>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                JWT Payload
              </h4>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
                {`{
  "sub": "1234567890",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin",
  "iat": 1516239022,
  "exp": 1516242622
}`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Basic Auth</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Username:</span>
                    <span className="text-sm">api_user</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Password:</span>
                    <span className="text-sm">••••••••••••</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">API Key</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Key Name:</span>
                    <span className="text-sm">X-API-Key</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Value:</span>
                    <span className="text-sm">sk_test_51H...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="meta" className="border rounded-md mt-6">
          <div className="p-4 flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            <h3 className="text-lg font-medium">Request Metadata</h3>
          </div>
          <Separator />
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <Smartphone className="mr-2 h-4 w-4" />
                Client Information
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">IP Address:</span>
                  <span className="text-sm">192.168.1.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Country:</span>
                  <span className="text-sm">United States</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">City:</span>
                  <span className="text-sm">San Francisco</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">User Agent:</span>
                  <span className="text-sm">Chrome 91.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Platform:</span>
                  <span className="text-sm">Windows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Screen:</span>
                  <span className="text-sm">1920x1080</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <Server className="mr-2 h-4 w-4" />
                Server Information
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Server:</span>
                  <span className="text-sm">nginx/1.21.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Region:</span>
                  <span className="text-sm">us-west-1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cache:</span>
                  <span className="text-sm">HIT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Edge Network:</span>
                  <span className="text-sm">Vercel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Request ID:</span>
                  <span className="text-sm">req_7a8b9c0d1e2f</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Trace ID:</span>
                  <span className="text-sm">trace_3f4g5h6i7j8k</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-medium mb-3">Cookies</h4>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {[
                    {
                      name: "session_id",
                      value: "abc123xyz789",
                      domain: "example.com",
                      expires: "2023-12-31",
                      httpOnly: true,
                      secure: true,
                    },
                    {
                      name: "user_preferences",
                      value: "theme=dark&lang=en",
                      domain: "example.com",
                      expires: "2023-12-31",
                      httpOnly: false,
                      secure: true,
                    },
                    {
                      name: "csrf_token",
                      value: "def456uvw012",
                      domain: "api.example.com",
                      expires: "2023-06-01",
                      httpOnly: true,
                      secure: true,
                    },
                    {
                      name: "_ga",
                      value: "GA1.2.1234567890.1622548800",
                      domain: ".example.com",
                      expires: "2025-06-01",
                      httpOnly: false,
                      secure: false,
                    },
                    {
                      name: "_gid",
                      value: "GA1.2.0987654321.1622548800",
                      domain: ".example.com",
                      expires: "2023-06-02",
                      httpOnly: false,
                      secure: false,
                    },
                  ].map((cookie, index) => (
                    <div key={index} className="grid grid-cols-6 gap-2 text-sm">
                      <div className="font-medium">{cookie.name}</div>
                      <div className="col-span-2 truncate">{cookie.value}</div>
                      <div>{cookie.domain}</div>
                      <div>{cookie.expires}</div>
                      <div className="flex space-x-2">
                        {cookie.httpOnly && (
                          <Badge variant="outline" className="text-xs">
                            HttpOnly
                          </Badge>
                        )}
                        {cookie.secure && (
                          <Badge variant="outline" className="text-xs">
                            Secure
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
