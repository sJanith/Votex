<template lang="">
 

    <div v-if = "currentTask" class="container mt-5">
      <div
        class="page-btn-title d-flex justify-content-between align-items-center"
      >
        
        <h2   class="text-dark mb-0"><b>Edit  Task </b></h2>
        
      </div>
      <hr />    
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Employee Name</label>
    <input type="text" class="form-control"  
          v-model="currentTask.name" >
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Department</label>
    <input type="text"  v-model="currentTask.department" class="form-control"  >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Task</label>
    <input type="text" class="form-control"  v-model="currentTask.task"  >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">End Date</label>
    <v-date-picker v-model="currentTask.end_date">
  <template v-slot="{ inputValue, inputEvents }">
    <input
      class="form-control"
      :value="inputValue"
      v-on="inputEvents"
    
    />
  </template>
</v-date-picker>
  </div>
  
  <button type="submit" @click="saveTask" class="btn btn-success ">Update</button>

    <button  @click="cancelTask" class="btn btn-danger  
    ml-2 ">Cancel</button>
</form>
    </div>
  
  
  
  
  </template>
  <script>

    import routerService from '../../services/routerService';
    import firebase from "firebase/compat/app";
    

 
  export default {
    name : "add Task",

    data() {
      return {
        task: {
          name : "",
          department: "",
          task: "",
          end_date: "",
        },
        key: {id :this.$route.params.id},
        currentTask : null,
      }
    },

    methods: {
      saveTask() {
        var data = {
          name : this.currentTask.name,
          department: this.currentTask.department,
          task : this.currentTask.task,
          end_date: this.currentTask.end_date,
        };
      
      {data &&    
          routerService.update(this.key.id, data).then(() => {
          
          console.log("Created Sucessfully")
        }) .catch(e => {
          console.log(e);
        });
        this.$router.push('/taskdashboard');}    
      },

      cancelTask () {
        this.$router.push('/taskdashboard');
      }
    },
    mounted () {
  // we can implement any method here like

    routerService.getDataUsingID(this.key.id).then((doc) => {
      if(doc && doc.exists()) {
        this.currentTask = doc.val()
      }
    })
   
}
  };
  </script>
  <style lang=""></style>
  