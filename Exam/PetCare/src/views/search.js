


import { searchItem } from "../api/posts.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";



const searchTempl = (onSubmit, resultsExist, result, userData) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>


    <h3>Results:</h3>
    <div id="search-container">

    ${resultsExist ? html` <ul class="card-wrapper">
   ${result.map(x=> itemTemplate(x,userData))}
    </ul>` : html`<h2>There are no results found.</h2>`}

    </div>

</section>

`

const itemTemplate=(item, userData)=>html`    <li class="card">
<img src="${item.imageUrl}" alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${item.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${item.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${item.value}</span>$</p>


${userData ? html`<a class="details-btn" href="/dashboardPage/${item._id}">Details</a>` : null}



</li>`



export function searchPage(ctx) {

    let resultsExist;
    ctx.render(searchTempl(onSubmit,resultsExist))
    let userData = getUserData();


    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchStr = formData.get('search').trim();

        try {
            if (searchStr === '') {

                throw new Error('Please fill the input field!');
            }

            const result = await searchItem(searchStr);
            resultsExist = result.length > 0;
            ctx.render(searchTempl(onSubmit,resultsExist,result,userData))

           

        } catch (err) {

            alert(err.message)

        }
    }

}



// import { getAllPosts, getPostById } from "../api/posts.js";
// import { html } from "../lib.js";
// import { getUserData } from "../util.js";
// var clicked = false
// const searchTemplate = (onClick,post, userData) => html`<section id="search">
// <h2>Search by Brand</h2>

// <form class="search-wrapper cf">
//   <input
//     id="#search-input"
//     type="text"
//     name="search"
//     placeholder="Search here..."
//     required
//   />
//   <button @click = ${onClick}type="submit">Search</button>
// </form>

// <h3>Results:</h3>

// <div id="search-container">
//   <ul class="card-wrapper">
//     <!-- Display a li with information about every post (if any)-->
//   ${ clicked ==  true ?  html`<li class="card">
//   <img src="${post.imageUrl}" alt="travis" />
//   <p>
//     <strong>Brand: </strong><span class="brand">${post.brand}</span>
//   </p>
//   <p>
//     <strong>Model: </strong
//     ><span class="model">${post.model}</span>
//   </p>
//   <p><strong>Value:</strong><span class="value">${post.value}</span>$</p>
//   ${userData== null? '':html`<a class="details-btn" href="/dashboardPage/${post._id}">Details</a>`}
  
//     </li>`: html`<h2>There are no results found.</h2>`}
//   </ul>

//   <!-- Display an h2 if there are no posts -->
//   <!--  -->
// </div>
// </section>`

// export async function searchView(ctx) {
//   ctx.render(searchTemplate(onClick))


//     async function onClick(e) {
//       clicked = true
//         e.preventDefault()
//       searchData()
      
     
      
      
  
//       async function searchData(){
//         let id;

        
//     let searchInput = document.querySelector('#search input').value
//     if(!searchInput){
//       return alert('fill input')
//     }
//     console.log(searchInput);
    
//         const res = await fetch('http://localhost:3030/data/shoes/')
//         const data = await res.json()
//         const final = data.forEach(async e => {
       
//             let count = Object.entries(e).length
//      let isit = true
//       for (let el of Object.entries(e)) {
        
//        if(el[1] == searchInput){
//         isit = false
//         continue
       
//        }
//     count --
//     if(count == 1 && isit == false){
//        id = e
//        const foundSearch = await searchData(e.brand)
//        console.log(foundSearch);
//        let post = await getPostById(e._id)
//        console.log(post);
//        let userData = await getUserData()
       
//        ctx.render(searchTemplate(onClick,post,userData))
//         console.log(id);
//         return id
        
//     }else if(isit == true && count ==1)
//     {
//         console.log('not found');
//     }    
//       }
     
//     }
    
//         );
        
        
        
        
//         }
      
      
      
//       }
        
//     }

    
   