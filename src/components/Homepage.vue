<template>
  <div class="homepage">
    <!-- Welcome Banner -->
    <section class="banner">
      <h1>Welcome to SPR Global</h1>
      <p>Innovating, Expanding, Connecting</p>
    </section>

    <!-- Brands Section -->
    <section class="brands">
      <h2>Brands We Operate</h2>
      <div class="brand-list">
        <div class="brand" v-for="(brand, index) in brands" :key="index">
          <h3>{{ brand.name }}</h3>
          <p>{{ brand.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      brands: [
        { name: "SPR Delights", description: "Premium quality food products that bring joy to every meal." },
        { name: "SPR Snacks", description: "Delicious and healthy snacks for every occasion." },
        { name: "SPR Cuisine", description: "Authentic and flavorful dishes from around the world." },
        { name: "SPR Bakery", description: "Freshly baked goods that satisfy your cravings." },
        { name: "SPR Beverages", description: "Refreshing drinks to quench your thirst." },
        // Add more brands as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Updated Styling for Homepage */
.homepage {
  font-family: 'Roboto', sans-serif;
  color: #2e2e2e; /* Slightly darker color for better contrast */
  background-color: #f4f4f4; /* Light gray background for subtle contrast */
  margin: 0;
  padding: 0;
}

.banner {
  text-align: center;
  
  background : url('@/assets/Header.jpg') no-repeat center center;
  background-size : cover;
  color: white;
  padding: 60px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
  border-radius: 8px; /* Rounded edges for a softer visual */
}

.brands {
  text-align: center;
  padding: 30px 20px; /* Increased spacing for a more spacious layout */
}

.brand-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Tweaked minimum width for better scaling */
  gap: 25px; /* Increased gap for better spacing */
  padding: 20px;
  
}

.brand {
  background: rgba(255, 255, 255, 0.8); /* Light transparency for a modern effect */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Softened shadow for elegance */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add interaction animations */
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(174, 156, 95, 0.3);
}

/* Hover Effect for Brand Cards */
.brand:hover {
  transform: scale(1.05); /* Slight scaling for interactivity */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow effect on hover */
}

/* Responsiveness */
@media (max-width: 768px) {
  .brand-list {
    grid-template-columns: 1fr; /* Single column layout for tablets and smaller screens */
  }

  .banner {
    padding: 40px 20px; /* Adjust padding for smaller screens */
    font-size: 1.2rem; /* Reduce text size */
  }
}

@media (max-width: 480px) {
  .banner {
    font-size: 1rem; /* Further reduce text size for small screens */
  }

  .brand-list {
    gap: 15px; /* Adjust spacing for smaller screens */
  }

  .brand {
    padding: 15px;
  }
}
</style>

