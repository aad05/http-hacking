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
