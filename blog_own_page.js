
const query_parameter = window.location.search;

const url_parameter = new URLSearchParams(query_parameter);

const post_ID = url_parameter.get('id');

const single_post = document.getElementById("single_post");

const api_data_03 = fetch("https://www.bitpastel.io/ReturnQueen/admin/api/press_data/details", { method: "POST", body: JSON.stringify({press_id: post_ID}) });

// Method = POST


// https://www.bitpastel.io/ReturnQueen/admin/api/press_data/details






api_data_03.then(res_03 => res_03.json().then(s3 => {
    console.log("s3 ....",s3);
    let data_Array = s3.response.data;
    // console.log("data : ",data_Array);

single_post.innerHTML = `
<div class="individual_post_img" id="individual_post_img">
    <div class="individual_post_img_container">
        <a class="back_to_newsroom" href="http://" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-angle-left icon" aria-hidden="true"></i>
        <span>Newsroom</span>
        </a>
    </div>
        <h1>${data_Array.image_text}</h1>
    
    <img src="${data_Array.features_image}" alt="">
</div>


<div class="individual_post_title" id="individual_post_title">

    <div ">
        <h2 class="individual_title">${data_Array.title}</h2>
        <p class="individual_pub_by">${data_Array.published_by}</p>
    </div>

</div>



<div class="individual_post_content" id="individual_post_content">

    <p>${data_Array.description}</p><br>
`;
}


))














