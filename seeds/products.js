// import lavenderIceCream from '../src/assets/lavender-ice-cream.jpg'
// import chocolateIceCream from '../src/assets/chocolate-ice-cream.jpg'
// import vanillaIceCream from '../src/assets/vanilla-ice-cream.jpg'
// import strawberryIceCream from '../src/assets/strawberry-ice-cream.jpg'
// import lemonIceCream from '../src/assets/lemon-ice-cream.jpg'

const productData = [
    {
        "id": 1,
        "title": "Vanilla",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Rich & Induldgent",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649849/cream_and_ice/vanilla-ice-cream_xz5zih.jpg'
    },
    {
        "id": 2,
        "title": "Chocolate",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Rich & Induldgent",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649850/cream_and_ice/chocolate-ice-cream_ssogmx.jpg'
    },
    {
        "id": 3,
        "title": "Strawberry",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Rich & Induldgent",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649849/cream_and_ice/strawberry-ice-cream_gzjayr.jpg'
    },
    {
        "id": 4,
        "title": "Cherry",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Rich & Induldgent",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": "https://images.unsplash.com/photo-1646318754907-dc7c0d236a97?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 5,
        "title": "Lemon",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Rich & Induldgent",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649848/cream_and_ice/lemon-ice-cream_bwnl0t.jpg'
    },
    {
        "id": 6,
        "title": "Lavender",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Rich & Induldgent",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649848/cream_and_ice/lavender-ice-cream_zjrdsv.jpg'
    },
    {
        "id": 7,
        "title": "Candy Floss",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Wacky & Wonderful",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": "https://images.unsplash.com/photo-1646318754907-dc7c0d236a97?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 8,
        "title": "Cinnamon and Biscuit",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Spiced & Surprising",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": "https://images.unsplash.com/photo-1646318754907-dc7c0d236a97?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 9,
        "title": "Salted Caramel",
        "price": 5.99,
        "product_facts": ["Dairy Free", "Gluten Free", "Made Freshly Daily", "Locally Sourced Ingredients"],
        "product_type": "Ice-cream",
        "category": "Contemporary Flavors",
        "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaeca",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex, aliquam in eos soluta dignissimos optio repellat adipisci rem exercitationem aspernatur nesciunt quae ducimus laboriosam fugit distinctio totam. Asperiores, nostrum.",
        "image": "https://images.unsplash.com/photo-1646318754907-dc7c0d236a97?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export default productData;