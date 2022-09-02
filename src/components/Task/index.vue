<template lang="">
 

  <div class="container mt-5">
    <div
      class="page-btn-title d-flex justify-content-between align-items-center"
    >
      <h2 class="text-dark mb-0"><b>Task Manager</b></h2>
      <div>
        <button class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="handleTask" aria-controls="offcanvasRight">Add Task</button>
      </div>
    </div>
    <hr />



    
  <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Mark</td>
      <td>IT</td>
      <td>Complete the Wireframe</td>
      <td><i class=" text-primary bi bi-circle-fill"></i> To Do</td>
    </tr>

    <tr>
     
     <td>Mark</td>
     <td>IT</td>
     <td>Complete the Wireframe</td>
     <td><i class=" text-warning  bi bi-circle-fill"></i> In Progress</td>
   </tr>

   <tr>
     
     <td>Mark</td>
     <td>IT</td>
     <td>Complete the Wireframe</td>
     <td><i class=" text-sucess  bi bi-circle-fill"></i> Done</td>
   </tr>

   <tr>
     
     <td>Mark</td>
     <td>IT</td>
     <td>Complete the Wireframe</td>
     <td><i class=" text-secondary bi bi-circle-fill"></i> Backlog</td>
   </tr>
   
  </tbody>
</table>        
  </div>




</template>
<script>
 export default {
      methods: {
        handleTask() {
            this.$router.push('/taskdashboard/add');
         },
      },
   };
</script>
<style lang=""></style>
