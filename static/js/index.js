var Cookies={
  			getCookie:function(name){
				var cookieName=encodeURIComponent(name)+"=",
				start=document.cookie.indexOf(cookieName),
				cookieValue=null;
				
				if(start>-1){
					var end=document.cookie.indexOf(";",start);
					if(end==-1){
						end=document.cookie.length;
					}
					cookieValue=decodeURIComponent(document.cookie.substring(start+cookieName.length,end));
				}
				
				return cookieValue;
			},
			set:function(name,value,expires,path,domain,secure){
				var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
				if(expires instanceof Date){
					cookieText+=";expires="+expires.toGMTString();
				}
				
				if(path){
					cookieText+=";path="+path;
				}
				
				if(domain){
					cookieText+=";domain="+domain;
				}
				
				if(secure){
					cookieText+=";secure="+secure;
				}
				document.cookie=cookieText;
			
			},
			unset:function(name,path,domain,secure){
				Cookies.set(name,"",new Date(0),path,domain,secure);
			}
  		}
  export default Cookies;