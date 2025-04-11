<template>
  <header class="header">
    <h1 class="title">SPR Global</h1>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/brand/Ponnusamy Elite">Our Brands</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: rgba(224, 234, 26, 0.49); 
  color: black;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky; /* Makes the nav bar stick to the top */
  top: 0;
  z-index: 1000;
  margin: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
}

.navbar {
  display: flex;
  gap: 20px; /* Improved spacing between navigation links */
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px; /* Rounded edges for better visual appeal */
  transition: background-color 0.3s, color 0.3s; /* Smooth hover effect */
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent highlight */
  color: black; /* Change text color for contrast */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header {
    flex-direction: column; /* Stack header title and nav for smaller screens */
    text-align: center;
  }

  .navbar {
    flex-direction: column;
    gap: 10px; /* Reduce gap for smaller devices */
    margin-top: 10px;
  }
}
</style>
