/*  HTTP Parameter Pollution (HPP)  */

// Sending mutiple similiar parameters simultaneously
/*  .../details/?user=abduvoitov_2005&user=mamasaliyev2006&user=mahmudjanov2006 */

// In that case Yahoo Server returns last value
// Google Server returns both values in concationation form like abduvoitov2005 mamasaliyev2006 ...
// JSP runs Tomcat returns first value
// PHP runs Appache returns last value
// NSP.net rusn IIS returns all of them in concatinated form

/*

    Within the URL - using the GET parameters
    Witin the request body - using the POST parameters
    In the HTTP headers - using the COOKIE header

    GET /somePage.jsp?param1=value1& param2=value2 HTTP/1.1 Host: www.someHost.co.il
        User-Agent: Safari/535.1 Accept: text/html,application/xhtml+xml    
    
    POST /somePage.asp HTTP/1.1 Host: www.someHost.co.il User-Agent: Safari/535.1
         Accept: text/html,application/xhtml+xml Content-Type: application/x-www-form-urlencoded
         Content-Length: 27param1=value1& param2=value2

*/

/*

    How different technologies and web servers manage multiple occurrences of the same parameter?


    ASP.NET/IIS -> All occurrences of the specific parameter -> par=val1,val2

    ASP/IIS -> All occurrences of the specific parameter -> par=val1,val2

    PHP/Apache -> Last occurrence -> par=val2

    PHP/Zeus -> Last occurrence -> par=val2

    JSP, Servlet/Apache Tomcat -> First occurrence -> par=val1

    JSP, Servlet/Oracle Application Server -> First occurrence -> par=val1

    JSP, Servlet/Jetty -> First occurrence -> par=val1

    IBM Lotus Domino -> Last occurrence -> par=val2

    IBM HTTP Server -> First occurrence -> par=val1

    mod_perl,libapreq2/Apache -> First occurrence -> par=val1

    Perl CGI/Apache -> First occurrence -> par=val1

    mod_wsgi (Python)/Apache -> First occurrence -> par=val1

    Python/Zope -> All occurrences in list (array) -> par=[‘val1′,’val2’]

*/

/*

         foo://example.com:8042/over/there?name=ferret#nose
         \_/   \______________/\_________/ \_________/ \__/
          |           |            |            |        |
       scheme     authority       path        query   fragment
          |   _____________________|__
         / \ /                        \
         urn:example:animal:ferret:nose

*/

/*

    IPv6address =                            6( h16 ":" ) ls32
                  /                       "::" 5( h16 ":" ) ls32
                  / [               h16 ] "::" 4( h16 ":" ) ls32
                  / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
                  / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
                  / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
                  / [ *4( h16 ":" ) h16 ] "::"              ls32
                  / [ *5( h16 ":" ) h16 ] "::"              h16
                  / [ *6( h16 ":" ) h16 ] "::"

      ls32        = ( h16 ":" h16 ) / IPv4address
                  ; least-significant 32 bits of address

      h16         = 1*4HEXDIG
                  ; 16 bits of address represented in hexadecimal


*/

/*


      IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet

      dec-octet   = DIGIT                 ; 0-9
                  / %x31-39 DIGIT         ; 10-99
                  / "1" 2DIGIT            ; 100-199
                  / "2" %x30-34 DIGIT     ; 200-249
                  / "25" %x30-35          ; 250-255


*/

/*

      path          = path-abempty    ; begins with "/" or is empty
                    / path-absolute   ; begins with "/" but not "//"
                    / path-noscheme   ; begins with a non-colon segment
                    / path-rootless   ; begins with a segment
                    / path-empty      ; zero characters

      path-abempty  = *( "/" segment )
      path-absolute = "/" [ segment-nz *( "/" segment ) ]
      path-noscheme = segment-nz-nc *( "/" segment )
      path-rootless = segment-nz *( "/" segment )
      path-empty    = 0<pchar>

*/

/*

   The base URI of a reference can be established in one of four ways,
   discussed below in order of precedence.  The order of precedence can
   be thought of in terms of layers, where the innermost defined base
   URI has the highest precedence.  This can be visualized graphically
   as follows:

         .----------------------------------------------------------.
         |  .----------------------------------------------------.  |
         |  |  .----------------------------------------------.  |  |
         |  |  |  .----------------------------------------.  |  |  |
         |  |  |  |  .----------------------------------.  |  |  |  |
         |  |  |  |  |       <relative-reference>       |  |  |  |  |
         |  |  |  |  `----------------------------------'  |  |  |  |
         |  |  |  | (5.1.1) Base URI embedded in content   |  |  |  |
         |  |  |  `----------------------------------------'  |  |  |
         |  |  | (5.1.2) Base URI of the encapsulating entity |  |  |
         |  |  |         (message, representation, or none)   |  |  |
         |  |  `----------------------------------------------'  |  |
         |  | (5.1.3) URI used to retrieve the entity            |  |
         |  `----------------------------------------------------'  |
         | (5.1.4) Default Base URI (application-dependent)         |
         `----------------------------------------------------------'

*/

/*

    Preventing HTTP Parameter Pollution

    Use WAF, and you should also consider some other safety tips. The easiest solution would be for the WAF to not allow multiple instances of the same parameter in a single HTTP request. 

*/
