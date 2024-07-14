
export default function CardOperations() {
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const countNum = document.getElementById('count');
    const addCart = document.getElementById('addCart'); // Make sure this ID exists in your HTML
    const cartNum = document.getElementById('cart-num');
    let quantity=1;
    
    let finalNum = 1;
    // Function to increment on click of the + button
    plusBtn.addEventListener('click',function(){
        let plusNum = parseInt(countNum.textContent) + 1;
        countNum.textContent = plusNum;
    
        finalNum  = plusNum
        
    });
    
    // Function to decrement on click of the - button
    minusBtn.addEventListener('click',function(){
        let minusNum = parseInt(countNum.textContent) - 1;
    
        // Handle case where the increment is less than 0
        if(countNum.textContent <= 0 ){
            countNum.textContent = "0";
        }else{
            countNum.textContent = minusNum;
        }
    
        finalNum  = minusNum
        // console.log(minusNum);
    });
    
    // Function Display the value to show the number of items added to the cart
      if(finalNum === 1){
            cartNum.textContent = "1";
        }
       else{
            cartNum.textContent = finalNum
        }
    
    quantity=Number(countNum.innerHTML)
    return {
        getFinalNum: function() {
            
            return quantity;
        }
    }
    
}
