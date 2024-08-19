document.addEventListener('DOMContentLoaded', function() {
    

    /**
     * Product Selection Event
     */
    const products = document.querySelectorAll('.product');
    products.forEach(product => {

       // Click  event listener to each product
       product.addEventListener('click', function(clicked) {

            // Remove selected class from all products first
            products.forEach( e => {
                e.classList.remove('selected');
            });

            // Add selected class to the clicked product
            clicked.target.classList.add('selected'); 

            // Calculate button click
           document.getElementById('calculate').click();
           
       });

    });


    // Calculator
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const sqft = document.getElementById('sqft');

    function caclulate_sqft( w, h ) {
        sqft.value = w * h;
    }

    width.addEventListener('input', function() {
        if ( height.value && height.value > 0 ) {
            console.log(caclulate_sqft(width.value, height.value));
        } 
    });

    height.addEventListener('input', function() {
        if ( width.value && width.value > 0 ) {
            console.log(caclulate_sqft(width.value, height.value));
        } 
    });

    sqft.addEventListener('input', function() {
        if ( sqft.value && sqft.value > 0 ) {
            width.value = sqft.value;
            height.value = 1;
        } else {
            width.value = 0;
            height.value = 0;
        }
    });

    const totalPrice = document.getElementById('total-price');
    const totalSqft = document.getElementById('total-sqft');

    // CALCULATE BUTTON EVENT
    document.getElementById('calculate').addEventListener('click', function() {
        if ( sqft.value && sqft.value > 0 ) {
            const selectedProductPrice = document.querySelector('.product.selected').getAttribute('data-price');
            const selectedtotalPrice = parseInt(selectedProductPrice) * parseInt(sqft.value);

            totalPrice.innerHTML = selectedtotalPrice.toLocaleString("en-GB", {maximumFractionDigits: 2, minimumFractionDigits: 2});
            totalSqft.innerHTML = sqft.value;
        } else {
            totalPrice.innerHTML = '0';
            totalSqft.innerHTML = '0';
        }
    });
});