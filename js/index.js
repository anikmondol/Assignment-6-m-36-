







 




  
 let mark_cont = parseInt(document.getElementById('mark_cont').innerText);
 let mark = document.getElementById('mark_cont');

    

const loadTitle =  (id) => {
    mark_cont = mark_cont + 1;
    mark.innerText = mark_cont;
    
    

    const mark_id = document.getElementById('mark_id');
    const div = document.createElement("div");
       div.textContent = "";
    div.classList = "flex justify-between my-3 bg-[#12192D0D] p-5 rounded-md"

    const description_id = document.getElementById("description_id").innerText;
    const view_count = document.getElementById("view_count").innerText;

    

    div.innerHTML = `

    <h4 class="text-[#12132D] text-[18px] font-medium">${description_id}</h4>

    <div class="flex justify-between items-center">
        <img src="images/tabler-icon-eye.png" alt="">
        <p>${view_count}</p>
    </div>



    `;

    mark_id.appendChild(div);
}






// ------------------------------------------

const loadAllPosts2 = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();

    // console.log(data);

    const feach2_contaner = document.getElementById('feach2_contaner');


    data.forEach((element) => {
        // console.log(element);

        const div = document.createElement("div");
        div.classList = "card  bg-base-200 shadow-2xl ";
        div.innerHTML = `
        <figure class="px-10 pt-10">
                  
                  <img src="${element.cover_image}" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body ">
                  <div class="flex gap-1">
                    <img src="images/Frame (5).png" alt="">
                    <p>${element.author.posted_date ? element.author.posted_date : "No publish date"}</p>
                  </div>
                  <p class="text-[18px] font-medium">${element.title}</p>
                  <p>${element.description.slice(0, 100)}</p>
                  <div class="card-actions">
                    <img class="w-12 rounded-full" src="${element.profile_image}" alt="">
                    <div class="">
                        <p>${element.author.name}</p>
                        <p>${element.author.designation ? element.author.designation : "Unknown"}</p>
                    </div>
                  </div>
                </div>
        `;

        feach2_contaner.appendChild(div);



    })
}


loadAllPosts2();


// ----------------------------------------------



const load = async (searchText) => {
    document.getElementById("loading_spinner").classList.remove("hidden");
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    
    const allData = data.posts
    const myID = document.getElementById('myID');
    myID.innerHTML = "";
    if(allData.length > 0){
        
    }else{
        
    }

    allData.forEach(element => {

        document.getElementById("loading_spinner").classList.add("hidden");
        const div = document.createElement("div");
        div.innerHTML = "";
        div.classList = "flex flex-col md:flex-row gap-8 pb-20 bg-[#b9bbd0] p-5 rounded-lg mb-12 lg:h-[220px]";

        div.innerHTML = `
        <div class="space-x-5">
                        <p class="ml-16 absolute mt-[0px]">${element.isActive ? `<i class="fa-solid fa-check text-green-900 bg-green-900 rounded-full"></i>` : `<i class="fa-solid fa-check text-red-900 bg-red-900 rounded-full"></i>`}</p>
                        <img class="w-12 rounded-md" src="${element.image}" alt="">
                    </div>
                    <div class="space-y-3">
                        <div class="flex gap-5">
                            <p># ${element.category}</p>
                            <p>Author : ${element.author.name}</p>
                        </div>
                        <div>
                            <p id="description_id" class="text-[#12132D] text-[18px] font-medium">${element.title}</p>
                            <p >${element.description}</p>
                        </div>
                        <img src="images/Line 1.png" alt="">
                        <div class="flex justify-between">
                            <div class="flex gap-8">
                                <div class="flex justify-center items-center gap-2">
                                    <img src="images/tabler-icon-message-2.png" alt="">
                                    <p>${element.comment_count}</p>
                                </div>
                                <div class="flex justify-center items-center gap-2 ">
                                    <img src="images/tabler-icon-eye.png" alt="">
                                    <p id="view_count">${element.view_count}</p>
                                </div>
                                <div class="flex justify-center items-center gap-2">
                                    <img src="images/tabler-icon-clock-hour-9.png" alt="">
                                    <p>${element.posted_time}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick="loadTitle()" class="btn btn-ghost">
                                    <img src="images/email 1.png" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
        `;

       
        myID.appendChild(div);


    });
    



}











const handleSearch = () =>{
    const searchBox = document.getElementById('search_box');
    const value = searchBox.value;


    try{
        if(value){
            load(value);
            
        }else if(Array.isArray(value)){
            alert("give me valid reason")
        }
        else{
            alert('give me valid reason')
        }
    }catch{
        alert("enter valid value")
    }


   


    

}

// ------------------------
const loadAllPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const allData = data.posts;
    // console.log(allData);

    const myID = document.getElementById('myID')
    allData.forEach(element => {


        const div = document.createElement("div");
        div.innerHTML = "";
        div.classList = "flex flex-col md:flex-row gap-8 pb-20 bg-[#b9bbd0] p-5 rounded-lg mb-12 lg:h-[220px]";

        div.innerHTML = `
        <div class="space-x-5">
                        <p class="ml-16 absolute mt-[0px]">${element.isActive ? `<i class="fa-solid fa-check text-green-900 bg-green-900 rounded-full"></i>` : `<i class="fa-solid fa-check text-red-900 bg-red-900 rounded-full"></i>`}</p>
                        <img class="w-12 rounded-md" src="${element.image}" alt="">
                    </div>
                    <div class="space-y-3">
                        <div class="flex gap-5">
                            <p># ${element.category}</p>
                            <p>Author : ${element.author.name}</p>
                        </div>
                        <div>
                            <p id="description_id" class="text-[#12132D] text-[18px] font-medium">${element.title}</p>
                            <p >${element.description}</p>
                        </div>
                        <img src="images/Line 1.png" alt="">
                        <div class="flex justify-between">
                            <div class="flex gap-8">
                                <div class="flex justify-center items-center gap-2">
                                    <img src="images/tabler-icon-message-2.png" alt="">
                                    <p>${element.comment_count}</p>
                                </div>
                                <div class="flex justify-center items-center gap-2 ">
                                    <img src="images/tabler-icon-eye.png" alt="">
                                    <p id="view_count">${element.view_count}</p>
                                </div>
                                <div class="flex justify-center items-center gap-2">
                                    <img src="images/tabler-icon-clock-hour-9.png" alt="">
                                    <p>${element.posted_time}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick="loadTitle()" class="btn btn-ghost">
                                    <img src="images/email 1.png" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
        `;

        myID.appendChild(div);


    });

}


loadAllPosts()