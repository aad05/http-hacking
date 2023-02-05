## HTTP Hijacking

# ORV - Open Redirect Vulnerability
- An Open Redirect Vulnerability entails an attacker manipulating the user and redirecting them from one site to another site – which may be malicious. The cybersecurity community doesn’t put enough emphasis on Open Redirect Vulnerabilities because it is considered a simple flaw commonly connected to phishing scams and social engineering.

# HPP - HTTP Parameter Pollution
- HTTP Parameter Pollution is a Web attack evasion technique that allows an attacker to craft a HTTP request in order to manipulate or retrieve hidden information. This evasion technique is based on splitting an attack vector between multiple instances of a parameter with the same name. Since none of the relevant HTTP RFCs define the semantics of HTTP parameter manipulation, each web application delivery platform may deal with it differently. In particular, some environments process such requests by concatenating the values taken from all instances of a parameter name within the request. This behavior is abused by the attacker in order to bypass pattern-based security mechanisms.

# IDOR - Insecure Direct Object Reference
- Insecure direct object references (IDOR) are a type of access control vulnerability that arises when
an application uses user-supplied input to access objects directly. The term IDOR was popularized by
its appearance in the OWASP 2007 Top Ten. However, it is just one example of many access control implementation
mistakes that can lead to access controls being circumvented.
