// Description
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// My Solution

function domainName(url){
    if(url.startsWith("https://www.")){
       let newUrl = url.slice(12)
       return newUrl.slice(0, newUrl.indexOf("."))
       }
    else if(url.startsWith("http://www.")){
       let newUrl = url.slice(11)
       return newUrl.slice(0, newUrl.indexOf("."))
    }
    else if(url.startsWith("https://")){
       let newUrl = url.slice(8)
       return newUrl.slice(0, newUrl.indexOf("."))
    }
    else if(url.startsWith("http://")){
       let newUrl = url.slice(7)
       return newUrl.slice(0, newUrl.indexOf("."))
    }
    else if(url.startsWith("www.")){
      let newUrl = url.slice(4)
      return newUrl.slice(0, newUrl.indexOf("."))
    }
    else {
       return url.slice(0, url.indexOf("."))
    }
  
  }