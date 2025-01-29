<template>
  <div id="app">
    <h1>ข้อมูลจากฐานข้อมูล</h1>
    <section>
      <h1>Factory 4.0</h1>
      <h2>Station: {{ firstname }}</h2>
      <h3>Station: {{ firstname }}</h3>
    </section>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        No: {{ item.No }}
        Date: {{ item.date }} 
        Timestamp: {{ item.timestamp }} 
        Cycle Time: {{ item.cycletime }} sec
        
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        No: {{ item.No }}
        Date: {{ item.date }} 
        Timestamp: {{ item.timestamp }} 
        Cycle Time: {{ item.cycletime }} sec
        
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      items: [], // Data fetched from the database
      firstname: "Station 1", // Station name
    };
  },
  
  created() {
    // Fetch data from the Node.js backend
    axios
      .post("http://localhost:3000/fetchall") // Node.js backend URL
      .then((response) => {
        this.items = response.data; // Store the fetched data in items
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  padding: 20px;
  background-color: #f9f9f9;
}
ul {
  padding: 20px;
  background-color: #f9f9f9;
  list-style: none;
}
li {
  font-size: 1.2rem;
  color: #333;
}
h1 {
  font-size: 2rem;
  color: #3498db;
}
</style>
