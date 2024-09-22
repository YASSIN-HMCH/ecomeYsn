const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
const products = [
    
        {
          "id": 1,
          "categorie":[
            {
              "id":10,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/casquette3.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":11,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/casquette2.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":12,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/casquette7.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":13,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/casquette6.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":14,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/casquette4.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "image": "/images/casquette3.png",
          "name": "Casque Bluetooth sans Fil Marque Funwaretech",
          "Price": "299€",
          "type": "M-ONE"
        },
        {
          "id": 2,
          "categorie":[
            {
              "id":15,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/manette6.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":16,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/manette11.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":17,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/manette12.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":18,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/manette16.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":19,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/manette17.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "image": "/images/manette6.png",
          "name": "Manette DualSense Playstation-5 ",
          "description": "Typically , these chairs boast a distinctive and ergonomic design, featuring features tailored to the needs of avid gamers.",
          "Price": "299€",
          "type": "M-TWO"
        },
        {
          "id": 3,
          "image": "/images/playstation3.png",
          "categorie":[
            {
              "id":20,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/playstation3.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":21,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/playstation10.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":22,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/playstation8.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":23,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/playstation1.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":24,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/playstation2.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "description": "Typically , these chairs boast a distinctive and ergonomic design, featuring features tailored to the needs of avid gamers.",
          "name": "PlaystationSony Gener-7  PS-3",
          "Price": "299€",
          "type": "M-Three"
        },
        {
          "id": 4,
          "image": "/images/mouse.png",
          "categorie":[
            {
              "id":25,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/mouse1.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":26,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/mouse.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":27,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/mouse5.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":28,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/mouse2.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":29,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/mouse7.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "description": "Typically , these chairs boast a distinctive and ergonomic design, featuring features tailored to the needs of avid gamers.",
          "name": "Clavier Gamming Marque  Logitech G915",
          "Price": "299€",
          "type": "M-FOR"
        },
        
        {
          "id": 5,
          "image": "/images/laptop_1.png",
          "categorie":[
            {
              "id":30,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/laptop_6.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":31,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/laptop_1.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":32,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/laptop_3.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":33,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/laptop_4.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":34,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/laptop_5.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "name": "écran d’ordinateur Marque ASUS",
          "Price": "299€",
          "type": "M-FIVE"
        },
    
        {
          "id": 6,
          "image": "/images/carteGr1.png",
          "categorie":[
            {
              "id":35,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/carteGr2.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":36,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/carteGr6.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":98,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/carteGr1.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":37,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/carteGr7.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":38,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/carteGr8.jpg",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "name": "Carte Mère GTX-960 Gaming 2G",
          "Price": "299€",
          "type": "M-SIX"
        },
    
        {
          "id": 7,
          "image": "/images/Keyboard3.png",
          "categorie":[
            {
              "id":39,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/Keyboard3.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":40,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/Keyboard3.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":41,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/Keyboard3.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":42,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/Keyboard3.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":43,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/Keyboard3.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "name": "Souris avec CabLe coulour Noir ",
          "Price": "299€",
          "type": "M-SEVEN"
        },
    
        {
          "id": 8,
          "image": "/images/chair4.jpg",
          "categorie":[
            {
              "id":44,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/chair6.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":45,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/chair4.jpg",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":46,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/chair9.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":47,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/chair7.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":48,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/chair8.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "name": "Chaise PowerGaming ",
          "Price": "299€",
          "type": "M-EIGHT"
        },
    
        {
          "id": 9,
          "image": "/images/airopod.png",
          "categorie":[
            {
              "id":49,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/airopod1.png",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":50,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/airopod2.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":51,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/airopod.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":52,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/airopod4.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":53,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/airopod5.png",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "name": "Apple AirPods Pro wireless headphones ",
          "Price": "299€",
          "type": "M-EIGHT"
        },
        {
          "id": 10,
          "image": "/images/volant.jpg",
          "categorie":[
            {
              "id":54,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/volant.jpg",
              "nom": "Casque Bluetooth",
              "Prix": "299€"
            },
            {
              "id":55,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/volant1.jpg",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":56,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/volant2.jpg",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":57,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/volant3.jpg",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            },
            {
              "id":58,
              "description": "Typically Good Quality for your Comfortable ",
              "Image": "/images/volant5.jpg",
              "nom": "Casque Bluetooth ",
              "Prix": "299€"
            }
          ],
          "name": " Volant Gaming  pour PC  ",
          "Price": "299€",
          "type": "M-EIGHT"
        }

]

app.get("/", (req, res) => {
  res.send("Welcome to the API! Use /products to get a list of products.");
});


app.get("/products", (req, res) => {
    res.json({ products });
  });



// Route to get a product by ID
app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });


  app.get('/products/:productId/categories/:categoryId', (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    const categoryId = parseInt(req.params.categoryId, 10);

    console.log(`Received productId: ${productId}, categoryId: ${categoryId}`);  // Log the received params

    if (isNaN(productId) || isNaN(categoryId)) {
        console.log('Invalid product or category ID');  // Log if invalid IDs
        return res.status(400).json({ message: 'Invalid product or category ID' });
    }

    // Rest of the logic
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const category = product.categorie.find(c => c.id === categoryId);
        if (category) {
            res.json(category);
        } else {
            console.log(`Category ID ${categoryId} not found for product ID ${productId}`);
            res.status(404).json({ message: 'Category not found' });
        }
    } else {
        console.log(`Product ID ${productId} not found`);
        res.status(404).json({ message: 'Product not found' });
    }
});


  


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});