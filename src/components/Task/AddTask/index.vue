<template lang="">
 

    <div class="container mt-5">
      <div
        class="page-btn-title d-flex justify-content-between align-items-center"
      >
        <h2  class="text-dark mb-0"><b>Add Task </b></h2>
       
      </div>
      <hr />    
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Employee Name</label>
    <input type="text" class="form-control"  
          v-model="task.name" >
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Department</label>
    <input type="text"  v-model="task.department" class="form-control"  >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Task</label>
    <input type="text" class="form-control"  v-model="task.task"  >
  </div>


 

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">End Date</label>
    <v-date-picker v-model="task.end_date " :masks="masks">
  <template v-slot="{ inputValue, inputEvents }">
    <input
      class="form-control"
      :value="inputValue"
      v-on="inputEvents"
    
    />
  </template>
</v-date-picker>
  </div>
  
  <button type="submit" @click="saveTask" class="btn btn-success ">Submit</button>

    <button  @click="cancelTask" class="btn btn-danger  
    ml-2 ">Cancel</button>
</form>
    </div>
  
   
  
  
  </template>
<script>

import routerService from '../../services/routerService';
import firebase from "firebase/compat/app";



export default {
  name: "add Task",

  data() {
    return {
      task: {
        name: "",
        department: "",
        task: "",
        end_date: "",
        
      },
      date: new Date(),
      masks: {
        input: 'YYYY-MM-DD',
      },
    }
  },

  methods: {
    saveTask() {
      var data = {
        name: this.task.name,
        department: this.task.department,
        task: this.task.task,
        end_date:
         JSON.stringify(this.task.end_date)
        ,
        status : 0,

      };
      console.log(data)
      {
        data &&
        routerService.create(data).then(() => {

          console.log("Created Sucessfully")
        }).catch(e => {
          console.log(e);
        });
        this.$router.push('/taskdashboard');
      }



    },


    mounted() {
      console.log(this.date)
      
    },





    cancelTask() {
      this.$router.push('/taskdashboard');
    }
  },


};
</script>
<style lang=""></style>
  