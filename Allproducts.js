const all = document.getElementById('all-productss');
const searchinput=document.getElementById('searching');
let output=[]

searchinput.addEventListener("input",(event)=>{
    const value =event.target.value.toLowerCase()
    output.forEach(matches =>{
        const isVisible = matches.product_name.toLowerCase().includes(value)
        matches.Element.classList.toggle("hide",!isVisible)
    })
})

fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const allproductss = data.products;

                output=allproductss.map(product => {
                    // create productBox
                    const allproductDiv = document.createElement('div');
                    allproductDiv.className = 'product';
                    all.appendChild(allproductDiv);

                    // create image
                    const allimg = document.createElement('img');
                    allimg.src = product.thumbnail;
                    allimg.alt = product.title;
                    allproductDiv.appendChild(allimg);

                    // create title
                    const alltitle = document.createElement('h3');
                    alltitle.className = 'title';
                    alltitle.textContent = product.title;
                    allproductDiv.appendChild(alltitle);

                    // price
                    const allprice = document.createElement('p');
                    allprice.className = 'price';
                    allprice.textContent = `$${product.price}`;
                    allproductDiv.appendChild(allprice);
                    console.log(product.title,product.discountPercentage)
                    return {product_img :product.thumbnail,product_category:product.category,product_name:product.title,product_price:`$${product.price}`,Element:allproductDiv}
                    
                });
                console.log(output)
                const b = document.querySelector('.cbeauty');
                b.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'beauty');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
               const f = document.querySelector('.cFragrance');
                f.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'fragrances');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
               const fu = document.querySelector('.cFurniture');
                fu.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'furniture');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
               const  g= document.querySelector('.cGroceries');
                g.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'groceries');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
            })
            
            .catch(error => console.error('Error fetching data:', error));

function showSidebar(){
        const Sidebar =document.querySelector('.sidebar');
        Sidebar.style.display='flex'
}
function hideSidebar(){
         const Sidebar =document.querySelector('.sidebar');
         Sidebar.style.display='none'
}            
function displaycat(){
    const Sidebar =document.querySelector('.dropdown1');
        Sidebar.style.display='block'
}
function displaycat2(){
    const Sidebar =document.querySelector('.dropdown1-1');
        Sidebar.style.display='block'
}

function FragranceCat(){

}
function FurnitureCat(){

}
function GroceriesCat(){

}
