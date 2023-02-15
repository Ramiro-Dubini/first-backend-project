class ProductManager {

    #idGenerator(){
        const id =
            this.products.length === 0
            ? 1
            : this.products[this.products.length -1].id +1;
        return id;
    }

    #codeGenerator(codeLength = 15){
        const numeros = "0123456789";
        const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numYLetras = numeros + letras;
        let code = "";
        for (let i = 0; i < codeLength; i++) {
          const random = Math.floor(Math.random() * numYLetras.length);
          code += numYLetras.charAt(random);
        }
        return code;
    }

    constructor(){
        this.products = []
    }

    addProduct(title,description,price,thumbnail,stock){
        const product = {
            id: this.#idGenerator(),
            title,
            description,
            price,
            thumbnail,
            code: this.#codeGenerator(),
            stock
        }

        try {
            if (!title || !description || !price || !thumbnail || !stock) {
              throw new Error(
                `Por favor complete todos los parametros requeridos`
              );
            } else {
              this.products.push(product);
            }
          } catch (error) {
            console.log(`Problema agregando producto: ${error.message}`);
          }
        }
      
        getProducts() {
          try {
            console.log(this.products);
          } catch (error) {
            console.log(`Error obteniendo todos los productos: ${error.message}`);
          }
    }
    
    getProductById(id){
        try {
          const idProduct = this.products.filter(product => product.id === id);
          if (idProduct.length > 0) {
            console.log(idProduct[0]);
          } else throw new Error(`Not found`);
        } catch (error) {
          console.log(
            `Problema al buscar producto con el id ${id}: ${error.message}`
          );
        }
    }
}

const manager = new ProductManager()
manager.addProduct("remera", "remera overzise negra", 7000, "No tiene imagen", 10)
manager.addProduct("pantalon", "jean mom azul", 15000, "No tiene imagen", 10)
manager.addProduct("zapatilla", "zapatilla air force 1 blanca", 22000, "No tiene imagen", 10)
console.log(manager);