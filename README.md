# WAF Study Guide

I wanted a better way to study WAFs, web servers, and understand security detection 
logic. It was a struggle to find resources that explained security concepts with 
code attached. So, I started building this myself.

RFC for HTTP 1.1

[https://datatracker.ietf.org/doc/html/rfc2616](https://datatracker.ietf.org/doc/html/rfc2616)

## Development: Getting Started

The Python portion of this project is in the root folder. For the demo with web UI, see the next section about Next.js.

### Create a virtual environment

- `python -m venv .`
- `source ./bin/activate`

### server.py Breakpoints, Debugger

Set breakpoints in `server.py`, and start it:

`python server.py`

### Start client.py

In a separate terminal window, start `client.py`, and it will kick 
off a request to the locally running server.

`python client.py`

With the server waiting in the debugger window, the breakpoints 
should catch, and you can inspect the request.

## Development: Demo - web UI w/ Next.js

