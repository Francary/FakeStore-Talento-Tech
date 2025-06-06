const url = "https://fakestoreapi.com/"

const numeros = [
    '1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'
    ,'6️⃣','7️⃣','8️⃣','9️⃣','1️⃣ 0️⃣',
    '1️⃣ 1️⃣','1️⃣ 2️⃣','1️⃣ 3️⃣','1️⃣ 4️⃣','1️⃣ 5️⃣',
    '1️⃣ 6️⃣','1️⃣ 7️⃣','1️⃣ 8️⃣','1️⃣ 9️⃣','2️⃣ 0️⃣']

const getProductos = async (inf) => {

    try {
        const res = await  fetch(`${url}${inf}`)
        const products = await res.json()
        console.log(products);
        
        console.log( ` 🧮 🛒 🛍️  💳 Total Productos Consultados = ${products.length > 1 ? numeros[products.length-1] : numeros[0]}  👓 📸 👜 `);
        
        console.log( `✅✅✅ CONSULTA GET FINALIZADA  🚀 🎆 🎉`)   
        
    } catch (error) {

        console.log(`${error} 🚩`);
        
        
    }
    
}


export{
    getProductos
}