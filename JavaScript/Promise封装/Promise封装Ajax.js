const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
    });
  
    return promise;
  };
  
  getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
  }, function(error) {
    console.error('出错了', error);
  });


  const getAjax = function(url){
      return new Promise((resolve, reject) => {
          const handler = function(){
              if(xhr.readyState !== 4) return;
              if(xhr.status === 200){
                  resolve(xhr.responseText);
              }else{
                  reject(new Error(this.statusText));
              }
          }
          let xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          xhr.onreadystatechange = handler
          xhr.setRequestHeader("Accept","application/json");
          xhr.responseType = "json";
          xhr.send();
      })
  } 