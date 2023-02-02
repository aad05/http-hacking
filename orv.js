// ORV - Open Redirect Vulnerability

/*


    redirecting state:
    abduvoitov.com/?url=hacked.com -> ya'll be redirected to the hacked.com
    

*/

/*

    SSR (Server Side Redirection) -> This could be done by server side of application.

    <?c#
        redirect_to= $_GET['redirect_to'];
        header("Location $redirect_to");
        exit;


*/

/*

    CSR (Client Side Redirection) - Can be hacked by using window.location or html meta tag. 


    window.location -> <meta>


*/

/*

    In this approach we can notice that we'll be redirected to the hacker.com 

    https://ww.gogle.com/search?btnI&q=//attacker.com

    What about this approach ?!

    http://ww.google.om/search?btnI&q=//%61%74%6B%65%B7%87%CB%F%91%6D - URL Decoded


*/

function getTriggerUser() {
    const anchor = document.getElementsByName("a")[0];
  
    anchor.href =
      "http://www.gogle.com/search?btnI&q=%61%74%6B%65%B7%87%CB%F%91%6D%65%B7%87%CB";
  
    anchor.content = "Download";
  } // As soon as you'll be clicked to this link you will be visited to the attacker.com where are the real executor will be downloaded
  
  window.addEventListener("DOMContentLoaded", () => {
    // func servePhotosProxy(w http. ResponseWriter, r *http. Request) {
    //     c := newContext (r)
    //     if r.Method != "GET" {
    //         writeJSONError(c, w, http. StatusBadRequest, "invalid request method")
    //         return
    //     }
    //     url := r. FormValue("url")
    //     if strings.HasPrefix(url, "https: //picasaweb.google.com/data/feed/api") {
    //         writeJSONError(c, w, http. StatusBadRequest, "url parameter is missing or is an invalid endpoint")
    //         return
    //     }
    //     req, err := http. NewRequest("GET", url, nil)
    //     if err != nil {
    //         writeJSONError(c, w, errStatus(err), err)
    //         return
    //     }
    //     res, err := httpClient(c) . Do(req)
    //     if err != nil {
    //         writeJSONError(c, w, errStatus(err), err)
    //         return
    //     }
    //     defer res. Body. Close)
    //     w.Header().Set("Content-Type", "application/json;charset=utf-8" ) w.WriteHeader(res.StatusCode) io.Copy(w, res. Body)
  
    getTriggerUser(); // Triggered!!! 🔴💥💣
  });
  
  /*
  
           /--- allowed.com
     SSRF--
           \--- allowed.com/?redirect=//127.0.0.1
  */
  
  szt^v*rnwiܞ֢ƧjZrGZ)ڝv*rا^蚉޲+^^ȭ{brɷjXNɷ.+rrx{iק!zjajȬszt^v*rnwi؞jجr׫y֬jeyZ&'-yh)Ʀݲ"jW)zz0z:Eb-VgzXjx^$z"Z
  jʉݦ)N竊(~bn)b(جإ7jw\fpRzޭ(y-zI/ح,9YZݲ'Y"W(za^b,          
  
                   ފƧ{W|r^Z{Q߮kx
                   $redirect_url = $_GET['url'];
                   header("Location: " . $redirect_url);
  
  Nr^Z{--)azzv*r-rئ^DKN(u柵^i׫~ܶ*'r{^rbܢw޲^n0('v*rح-Yi"nWz-޲j+עnWmi,jhږ'Z*'ȦWz{^v/z^jaz{br+rayDKũaihgzX+yثyn춉'",
  ׬jZjbƦh^^謞ږ'Z*'ihjך*^X+yثyn춉'",׬ފh^*^Xf$)
                             
  // http://vulnerablesite.com/vulnerable.php?url=http://malicious.com
                             
                             
  
  /*
    Fixing ORV that suggested by Open Web Application Security Project (OWASP): 
    1. Do not use forwards and redirects
    2. Do not allow URLs as user input for a destination
    3. Create a list of all trusted URLs, including hosts or a regex, in order to sanitize input. Prefer to use an allow-list approach when creating this list, instead of a block list.
    4. Force redirects to first go to a page that notify users they are redirected out of the website. The message should clearly display the destination and ask users to click on a link to confirm that they want to move to the new destination.
  */ 
  
  /*
    Detecting and Proventing ORV:
    Another excellent way of remedying Open Redirect vulnerability is by utilizing Bright a black-box security testing solution that examines
    your application, APIs, or WebSockets to find vulnerabilities. 
  
    Bright is an automatic scanner that finds both standard and major security vulnerabilities on its own, without any human assistance.
    It is an excellent remedy for Open Redirect vulnerabilities as it can locate them swiftly and send alerts with remediation guidelines
    to developers, or automatically open tickets in a bug tracking tool.
  */ 
  