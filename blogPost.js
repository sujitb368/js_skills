
const blog_container = document.getElementById("blog_container")

const api_data_02 = fetch("https://www.bitpastel.io/ReturnQueen/admin/api/press_data", { method: "POST", body: JSON.stringify({ latest: "0", limit: "all", start: 0, state: "" }) });


api_data_02.then(res_02 => res_02.json().then(s => {
   
    let data_Ary = s.response.data;
    for (var i = 0; i < data_Ary.length; i++) {
    
        pressID = data_Ary[i].press_id;

        blog_container.innerHTML += `
        <div class="a_content" >
            <a target="_blank" href="/blog_own_page.html?id=${pressID}" class="blog_card">
            
            <div class="img_part font_size" id="img_part">
                <img width="400" height="400" src="${data_Ary[i].features_image}" alt="${data_Ary[i].image_text}" class="post_img" width="200" height="200">
                <p class="city font_weight font_size"> ${data_Ary[i].image_text}</p>
            </div>

            <div class="blog_part">
                <p class="pub_by">
                    ${data_Ary[i].published_by}
                </p>
                <h4 class="blog_title">${data_Ary[i].title}</h4>
                <div class="blog_desc">
                    ${(data_Ary[i].description).slice(0, 98)}...
                </div>
                <div class="read_more_action">
                    <p class="read_more_btn">Read More</p>
                </div>                
            </div>
        </a>
        </div>
         `
    }
}));




     
    








