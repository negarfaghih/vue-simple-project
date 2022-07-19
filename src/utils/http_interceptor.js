export async function request() {
  let response = await fetch("https://api.rakhtshoo.com/api/v2/profile/AppSetting", {
    method : 'GET',
    headers: {
      "Content-Type": "application/json"
  }
  } );

  response.json().then(i => console.log(i.AppSetting.CallOrderMessage))
console.log();



return response;

  // if (response.ok) {
    
  // } else {

  // }

}


// export async function request(url ,method, body) {
//   let response = await fetch(url, {
//     method : method,
//     body: body,
//     headers : {"authorization": "token"}
//   } );

// console.log(response.json);

// if (response.status == 401) {
//     console.log("lotfan login konid")
// } else if (response.status == 403) {
//   console.log("dastresi be inja nadari")

// }


// return response;



// }


// function sum(i, j) {
//   return i + j;
// }

// sum(4, 7);