const url = "https://fakestoreapi.com/"

const postProductos = async (inf, title, price, category) => {
    try {
        const res = await   
        
        fetch(`${url}${inf}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            price: price,
            category: category,
        })
    })
    const products = await res.json()
    console.log(products);
    console.log(`✅ ✅ ✅ PRODUCTO CREADO EXITOSAMENTE  😎 😎 👍🏻`);
    
          
    } catch (error) {

         console.log(`${error} 🚩`);
        
    }

}

export {
    postProductos
}