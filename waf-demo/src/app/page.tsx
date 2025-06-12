import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Globe,
  Hash,
  Key,
  Lock,
  Server,
  Shield,
  Smartphone,
  Upload,
} from "lucide-react";

export default function HttpRequestViewer() {
  return (
    <div className="container mx-auto py-6 space-y-6" data-oid=":6c7q_9">
      <div className="flex flex-col space-y-2" data-oid="cnel8o4">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="-:4nji7">
          HTTP Request Viewer
        </h1>
        <p className="text-muted-foreground" data-oid="c3lonrs">
          Comprehensive view of all HTTP request fields and properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="4qvsdye">
        <Card className="md:col-span-2" data-oid="90_eult">
          <CardHeader className="pb-3" data-oid="y9b759y">
            <div
              className="flex items-center justify-between"
              data-oid="lznc0uz"
            >
              <CardTitle data-oid="kcabgdu">Request Overview</CardTitle>
              <Badge variant="outline" className="ml-2" data-oid="nh-jq1:">
                GET
              </Badge>
            </div>
            <CardDescription data-oid="s9q:rol">
              https://api.example.com/users?page=1&limit=10
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="ava:pbg">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="o:cp-rn"
            >
              <div className="space-y-2" data-oid="n_ji7th">
                <div className="flex justify-between" data-oid="v2q7pmo">
                  <span className="text-sm font-medium" data-oid="3mo6ia7">
                    Protocol:
                  </span>
                  <span className="text-sm" data-oid="8e6k1zx">
                    HTTP/2
                  </span>
                </div>
                <div className="flex justify-between" data-oid="h27j828">
                  <span className="text-sm font-medium" data-oid="39fq2hk">
                    Status:
                  </span>
                  <span className="text-sm" data-oid="xzwvaoc">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                      data-oid="rjsxin1"
                    >
                      200 OK
                    </Badge>
                  </span>
                </div>
                <div className="flex justify-between" data-oid="_-tj9t5">
                  <span className="text-sm font-medium" data-oid="2dh:82m">
                    Time:
                  </span>
                  <span className="text-sm" data-oid="fqh4o4i">
                    245ms
                  </span>
                </div>
                <div className="flex justify-between" data-oid="_d5g-wn">
                  <span className="text-sm font-medium" data-oid="xpy2vag">
                    Size:
                  </span>
                  <span className="text-sm" data-oid=".mo_isg">
                    1.2 KB
                  </span>
                </div>
              </div>
              <div className="space-y-2" data-oid="v8hv--u">
                <div className="flex justify-between" data-oid="ngx8ssg">
                  <span className="text-sm font-medium" data-oid="cbbhvkg">
                    Remote IP:
                  </span>
                  <span className="text-sm" data-oid="znbgszw">
                    192.168.1.1
                  </span>
                </div>
                <div className="flex justify-between" data-oid=".v532bh">
                  <span className="text-sm font-medium" data-oid="nupoi_j">
                    Remote Port:
                  </span>
                  <span className="text-sm" data-oid=":3y_u1-">
                    443
                  </span>
                </div>
                <div className="flex justify-between" data-oid="j0y67x5">
                  <span className="text-sm font-medium" data-oid="lhg71q:">
                    Local IP:
                  </span>
                  <span className="text-sm" data-oid="obnsm.o">
                    10.0.0.1
                  </span>
                </div>
                <div className="flex justify-between" data-oid="ipo-87c">
                  <span className="text-sm font-medium" data-oid=":9:sgoz">
                    Local Port:
                  </span>
                  <span className="text-sm" data-oid="oo1:a5i">
                    8080
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="38k97qg">
          <CardHeader data-oid=":9x.56l">
            <CardTitle className="flex items-center" data-oid="qu0nnoc">
              <Clock className="mr-2 h-5 w-5" data-oid=":jhlun1" />
              Timing
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="g6b2ck.">
            <div className="space-y-2" data-oid="cn2ar_n">
              <div className="flex justify-between" data-oid="919xkxe">
                <span className="text-sm font-medium" data-oid="3odkp5w">
                  DNS Lookup:
                </span>
                <span className="text-sm" data-oid="u7t-kp_">
                  15ms
                </span>
              </div>
              <div className="flex justify-between" data-oid="k3lyu3.">
                <span className="text-sm font-medium" data-oid="lwpefow">
                  TCP Connection:
                </span>
                <span className="text-sm" data-oid="s09guez">
                  35ms
                </span>
              </div>
              <div className="flex justify-between" data-oid="6znaq01">
                <span className="text-sm font-medium" data-oid="ka2sp.q">
                  TLS Handshake:
                </span>
                <span className="text-sm" data-oid="hudiyir">
                  120ms
                </span>
              </div>
              <div className="flex justify-between" data-oid="2vhn1s5">
                <span className="text-sm font-medium" data-oid="4ipaoox">
                  Time to First Byte:
                </span>
                <span className="text-sm" data-oid="03-2fce">
                  180ms
                </span>
              </div>
              <div className="flex justify-between" data-oid="r833qh5">
                <span className="text-sm font-medium" data-oid="__w-:6e">
                  Content Download:
                </span>
                <span className="text-sm" data-oid="ianvk4c">
                  65ms
                </span>
              </div>
              <div className="flex justify-between" data-oid="b0b9g7r">
                <span className="text-sm font-medium" data-oid="d_vx8.f">
                  Total:
                </span>
                <span className="text-sm font-bold" data-oid="w06:v-i">
                  245ms
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="headers" className="w-full" data-oid="8six.qq">
        <TabsList
          className="grid grid-cols-5 md:w-auto w-full"
          data-oid="s__y80t"
        >
          <TabsTrigger value="headers" data-oid=":xqczh8">
            Headers
          </TabsTrigger>
          <TabsTrigger value="query" data-oid=":3zavav">
            Query Params
          </TabsTrigger>
          <TabsTrigger value="body" data-oid="vp174:3">
            Body
          </TabsTrigger>
          <TabsTrigger value="auth" data-oid="1:cwx-c">
            Authentication
          </TabsTrigger>
          <TabsTrigger value="meta" data-oid="7yjqh9o">
            Metadata
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="headers"
          className="border rounded-md mt-6"
          data-oid="yv:x5an"
        >
          <div className="p-4 flex items-center" data-oid="10u_2le">
            <Server className="mr-2 h-5 w-5" data-oid="hzxy-cm" />
            <h3 className="text-lg font-medium" data-oid="ffstw0i">
              Request Headers
            </h3>
          </div>
          <Separator data-oid="c0thqjz" />
          <ScrollArea className="h-[400px]" data-oid="iww7-uv">
            <div className="p-4 space-y-4" data-oid="xdsr55g">
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
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4"
                  data-oid="gq1iuxg"
                >
                  <div className="font-medium text-sm" data-oid="bfsie1v">
                    {header.name}:
                  </div>
                  <div
                    className="col-span-2 text-sm break-all"
                    data-oid="2esoo1-"
                  >
                    {header.value}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent
          value="query"
          className="border rounded-md mt-6"
          data-oid="nrm10lb"
        >
          <div className="p-4 flex items-center" data-oid="zgtaoq-">
            <Hash className="mr-2 h-5 w-5" data-oid="6l.etp." />
            <h3 className="text-lg font-medium" data-oid=":14gq38">
              Query Parameters
            </h3>
          </div>
          <Separator data-oid="lupsbrd" />
          <div className="p-4 space-y-4" data-oid="jpbzodh">
            <div className="grid grid-cols-3 gap-4" data-oid=":_i1ehk">
              <div className="font-medium text-sm" data-oid="uitphw-">
                page:
              </div>
              <div className="col-span-2 text-sm" data-oid="uokz::i">
                1
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4" data-oid="2pfis34">
              <div className="font-medium text-sm" data-oid="260cws3">
                limit:
              </div>
              <div className="col-span-2 text-sm" data-oid="hg3z-al">
                10
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4" data-oid="8cfrdxo">
              <div className="font-medium text-sm" data-oid="k_lic4v">
                sort:
              </div>
              <div className="col-span-2 text-sm" data-oid="85h_cra">
                name_asc
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4" data-oid="kbdf3u.">
              <div className="font-medium text-sm" data-oid="3_v2kt7">
                filter:
              </div>
              <div className="col-span-2 text-sm" data-oid="v9cranw">
                active=true&role=admin
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="body"
          className="border rounded-md mt-6"
          data-oid="6h7sb3l"
        >
          <div className="p-4 flex items-center" data-oid="fpdk__c">
            <Upload className="mr-2 h-5 w-5" data-oid="_364c0a" />
            <h3 className="text-lg font-medium" data-oid="wso:x31">
              Request Body
            </h3>
          </div>
          <Separator data-oid="71mu-ub" />
          <ScrollArea className="h-[400px]" data-oid="ts60gk8">
            <div className="p-4" data-oid="o0xt61:">
              <pre
                className="bg-muted p-4 rounded-md overflow-x-auto text-sm"
                data-oid="72vx9ij"
              >
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

        <TabsContent
          value="auth"
          className="border rounded-md mt-6"
          data-oid="fmvf6au"
        >
          <div className="p-4 flex items-center" data-oid="r_.lzpr">
            <Lock className="mr-2 h-5 w-5" data-oid="ksg9kzy" />
            <h3 className="text-lg font-medium" data-oid="wpttmnt">
              Authentication
            </h3>
          </div>
          <Separator data-oid="epv3tk3" />
          <div className="p-4 space-y-6" data-oid="2hcdnjz">
            <div data-oid="ufmthv9">
              <h4
                className="text-sm font-medium mb-2 flex items-center"
                data-oid="dg0u_oa"
              >
                <Key className="mr-2 h-4 w-4" data-oid="70q80nc" />
                Bearer Token
              </h4>
              <pre
                className="bg-muted p-3 rounded-md overflow-x-auto text-sm"
                data-oid="-qzw4wa"
              >
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
              </pre>
            </div>

            <div data-oid="awf-mmp">
              <h4
                className="text-sm font-medium mb-2 flex items-center"
                data-oid="7gqky9_"
              >
                <Shield className="mr-2 h-4 w-4" data-oid="6cz5.76" />
                JWT Payload
              </h4>
              <pre
                className="bg-muted p-3 rounded-md overflow-x-auto text-sm"
                data-oid="agr6.fp"
              >
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

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="jtgf-4p"
            >
              <div data-oid="g6o.p:d">
                <h4 className="text-sm font-medium mb-2" data-oid="qfgp3xj">
                  Basic Auth
                </h4>
                <div className="space-y-2" data-oid="wu-nz3:">
                  <div className="flex justify-between" data-oid="sk-e0mq">
                    <span className="text-sm" data-oid="2_wzy1u">
                      Username:
                    </span>
                    <span className="text-sm" data-oid="a92:o_f">
                      api_user
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="fsddqa1">
                    <span className="text-sm" data-oid=":m-pazy">
                      Password:
                    </span>
                    <span className="text-sm" data-oid="::jvqdp">
                      ••••••••••••
                    </span>
                  </div>
                </div>
              </div>

              <div data-oid="zhus04v">
                <h4 className="text-sm font-medium mb-2" data-oid="2i876az">
                  API Key
                </h4>
                <div className="space-y-2" data-oid="8xq5-1w">
                  <div className="flex justify-between" data-oid="kj2k2s3">
                    <span className="text-sm" data-oid="7o54kw7">
                      Key Name:
                    </span>
                    <span className="text-sm" data-oid="1ls9oyk">
                      X-API-Key
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="s19i3o_">
                    <span className="text-sm" data-oid="4ahth1t">
                      Value:
                    </span>
                    <span className="text-sm" data-oid="3vrzy0c">
                      sk_test_51H...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="meta"
          className="border rounded-md mt-6"
          data-oid="z2al73:"
        >
          <div className="p-4 flex items-center" data-oid="7vqbrwc">
            <Globe className="mr-2 h-5 w-5" data-oid="4g7-yq_" />
            <h3 className="text-lg font-medium" data-oid="x-6_k.v">
              Request Metadata
            </h3>
          </div>
          <Separator data-oid="e8h4fzj" />
          <div
            className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid="e61b4n2"
          >
            <div data-oid="0snh5j8">
              <h4
                className="text-sm font-medium mb-3 flex items-center"
                data-oid="tz1dcq:"
              >
                <Smartphone className="mr-2 h-4 w-4" data-oid="hsmg2v8" />
                Client Information
              </h4>
              <div className="space-y-2" data-oid="yk0s:p7">
                <div className="flex justify-between" data-oid="y80e.tz">
                  <span className="text-sm" data-oid="ej1c13t">
                    IP Address:
                  </span>
                  <span className="text-sm" data-oid="7yhqj:9">
                    192.168.1.1
                  </span>
                </div>
                <div className="flex justify-between" data-oid="1qhi1d9">
                  <span className="text-sm" data-oid="y6uqv6h">
                    Country:
                  </span>
                  <span className="text-sm" data-oid="om.y1ow">
                    United States
                  </span>
                </div>
                <div className="flex justify-between" data-oid="u:jlfyh">
                  <span className="text-sm" data-oid="8ypb549">
                    City:
                  </span>
                  <span className="text-sm" data-oid="_9v2v7b">
                    San Francisco
                  </span>
                </div>
                <div className="flex justify-between" data-oid=".-e5z00">
                  <span className="text-sm" data-oid="bjmymme">
                    User Agent:
                  </span>
                  <span className="text-sm" data-oid="mdcqah_">
                    Chrome 91.0
                  </span>
                </div>
                <div className="flex justify-between" data-oid="-nyc7o1">
                  <span className="text-sm" data-oid="zl26q7z">
                    Platform:
                  </span>
                  <span className="text-sm" data-oid="o038hzj">
                    Windows
                  </span>
                </div>
                <div className="flex justify-between" data-oid="s0wmf8c">
                  <span className="text-sm" data-oid="mtks8ia">
                    Screen:
                  </span>
                  <span className="text-sm" data-oid="g-8u:wp">
                    1920x1080
                  </span>
                </div>
              </div>
            </div>

            <div data-oid="tthf4re">
              <h4
                className="text-sm font-medium mb-3 flex items-center"
                data-oid="7h3mctz"
              >
                <Server className="mr-2 h-4 w-4" data-oid="qf3o8z." />
                Server Information
              </h4>
              <div className="space-y-2" data-oid="svbaake">
                <div className="flex justify-between" data-oid="rqc38w4">
                  <span className="text-sm" data-oid="174a1zd">
                    Server:
                  </span>
                  <span className="text-sm" data-oid="e82a238">
                    nginx/1.21.0
                  </span>
                </div>
                <div className="flex justify-between" data-oid="ynpd1b7">
                  <span className="text-sm" data-oid="h5v0c13">
                    Region:
                  </span>
                  <span className="text-sm" data-oid="3m:nu1h">
                    us-west-1
                  </span>
                </div>
                <div className="flex justify-between" data-oid="uvdxzeo">
                  <span className="text-sm" data-oid="duia6ib">
                    Cache:
                  </span>
                  <span className="text-sm" data-oid="5w0dssf">
                    HIT
                  </span>
                </div>
                <div className="flex justify-between" data-oid="cgz9x:v">
                  <span className="text-sm" data-oid="m4aa-j0">
                    Edge Network:
                  </span>
                  <span className="text-sm" data-oid="an1:-oi">
                    Vercel
                  </span>
                </div>
                <div className="flex justify-between" data-oid="sg4qs_v">
                  <span className="text-sm" data-oid="9j7pe9f">
                    Request ID:
                  </span>
                  <span className="text-sm" data-oid="jhnw-30">
                    req_7a8b9c0d1e2f
                  </span>
                </div>
                <div className="flex justify-between" data-oid="0iaajku">
                  <span className="text-sm" data-oid="a9c1z96">
                    Trace ID:
                  </span>
                  <span className="text-sm" data-oid="293joea">
                    trace_3f4g5h6i7j8k
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2" data-oid="_a1.t.s">
              <h4 className="text-sm font-medium mb-3" data-oid="t4z-ozn">
                Cookies
              </h4>
              <ScrollArea className="h-[200px]" data-oid="36ebsa1">
                <div className="space-y-2" data-oid="8njglly">
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
                    <div
                      key={index}
                      className="grid grid-cols-6 gap-2 text-sm"
                      data-oid="9pwxwcs"
                    >
                      <div className="font-medium" data-oid="shza9y9">
                        {cookie.name}
                      </div>
                      <div className="col-span-2 truncate" data-oid=":k7mmr3">
                        {cookie.value}
                      </div>
                      <div data-oid="gulzqby">{cookie.domain}</div>
                      <div data-oid="as8iqtz">{cookie.expires}</div>
                      <div className="flex space-x-2" data-oid="ybd2y7z">
                        {cookie.httpOnly && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            data-oid=":.z6nmy"
                          >
                            HttpOnly
                          </Badge>
                        )}
                        {cookie.secure && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            data-oid="60namws"
                          >
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
  );
}
