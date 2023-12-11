document.addEventListener("DOMContentLoaded", function () {
    // JavaScript обект с информация за ресторантите
    const restaurantsData = [
      {
        category: "Ресторанти",
        restaurants: [
          {
            name: "Ресторант 1",
            image: "restaurant1.jpg",
            description: "Текст за ресторант 1",
            url: "restaurant1.html"
          },
          // Добавете още ресторанти
        ]
      }
    ];
  
    displayCategories(restaurantsData);
  });
  
  function displayCategories(categories) {
    const container = document.getElementById("restaurant-container");
  
    categories.forEach(category => {
      const categoryCard = document.createElement("div");
      categoryCard.className = "category-card";
  
      const categoryName = document.createElement("h2");
      categoryName.textContent = category.category;
  
      const restaurantsContainer = document.createElement("div");
      restaurantsContainer.className = "restaurant-container";
  
      category.restaurants.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        restaurantsContainer.appendChild(restaurantCard);
      });
  
      categoryCard.appendChild(categoryName);
      categoryCard.appendChild(restaurantsContainer);
      container.appendChild(categoryCard);
    });
  }
  
  function createRestaurantCard(restaurant) {
    const restaurantCard = document.createElement("div");
    restaurantCard.className = "restaurant-card";
    restaurantCard.onclick = function () {
      navigateToRestaurant(restaurant.url);
    };
  
    const image = document.createElement("img");
    image.src = restaurant.image;
    image.alt = restaurant.name;
  
    const text = document.createElement("p");
    text.textContent = restaurant.description;
  
    restaurantCard.appendChild(image);
    restaurantCard.appendChild(text);
  
    return restaurantCard;
  }
  
  function navigateToRestaurant(url) {
    window.location.href = url;
  }