function convertToJson(response) {
  return response.json();
}



const time = setTimeout(()=>alert(`Please Enter any Cryptocoin here and press search 
 Example: Bitcoin`),2000)
  

function show_data(){
  clearTimeout(time)
  
  const header = document.getElementById("table_head")
  const header_row = document.createElement('tr')
  const h_s_no = document.createElement('th');
      const h_logo = document.createElement('th');
      const h_name = document.createElement('th');
      const h_link = document.createElement('th');
  
      h_s_no.innerText = "s.no";
      h_logo.innerText = "image";
      h_name.innerText="Name"
      h_link.innerText="Link"
      
      header_row.appendChild(h_s_no);
      header_row.appendChild(h_logo);
      header_row.appendChild(h_name);
      header_row.appendChild(h_link);
  
      header.appendChild(header_row)


      setTimeout(()=>alert(`Click on show more`),2000)
  
  
}

function showResult(data) {
  // console.log(data.coins);

  const tbody_elem = document.getElementById("search_result");
  let flag = true

  for(let i = 0; i < data.coins.length; i += 1) {

    if(flag){
      show_data()
    }
    flag=false;
    const single_data = data.coins[i];


    const new_row = document.createElement('tr');

    const new_s_no = document.createElement('td');
    const new_logo = document.createElement('td');
    const new_name = document.createElement('td');
    const new_link = document.createElement('td');

    const new_img  = document.createElement('img');
    const new_a = document.createElement('a');

    new_s_no.innerText = i + 1;
    new_img.src = single_data.thumb;
    new_logo.appendChild(new_img);
    new_name.innerText = single_data.name + " (" + single_data.symbol + ")";
    new_a.innerText = "Show more";
    new_a.href = `detail.html?coin=${single_data.id}`;
    new_link.appendChild(new_a);

    new_row.appendChild(new_s_no);
    new_row.appendChild(new_logo);
    new_row.appendChild(new_name);
    new_row.appendChild(new_link);

    

    tbody_elem.appendChild(new_row);

    console.log(single_data);

  }
}

const search_field = document.getElementById('search_field');

var url        = new URL(window.location.href);
var params     = new URLSearchParams(url.search);
let search_key = params.get("q");
console.log(url)
// search_field.value = search_key;

fetch(`https://api.coingecko.com/api/v3/search?query=${search_key}`).then(convertToJson).then(showResult);