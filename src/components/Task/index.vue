<template lang="">
 

  <div class="container mt-5">
    <div
      class="page-btn-title d-flex justify-content-between align-items-center"
    >
      <h2 class="text-dark mb-0"><b>Task Manager</b></h2>
      <div>
        <button class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="handleTask" aria-controls="offcanvasRight">Add Task</button>
        <button class="btn btn-danger ml-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="handleDelete" aria-controls="offcanvasRight">Delete All</button>
      </div>
    </div>
    <hr />



    
  <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Task</th>
      <th scope = 'col'>Date</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in taskData">
     
      <td class="link-data" @click="redirectTo(data.key)">{{data.name}}</td>
      <td>{{data.department}}</td>
      <td>{{data.task}}</td>
      <td>{{ formatDate( JSON.parse(data.end_date))  }}</td>
      <td>
        <span v-if="data.status == 0" class="badge badge-primary">To Do</span>
            <span v-if="data.status == 1" class="badge badge-warning"> In Progress</span>
            <span v-if="data.status == 2" class="badge badge-success"> Done</span>
          
          </td>
      
    </tr>

   

  
 
   
  </tbody>
</table>        
  </div>




</template>
<script>
  import routerService from '../services/routerService';
  import moment from 'moment';
 export default {

  data() {
    return {
      moment: moment,
      taskData: [],
      currentTask: null,
      currentIndex: -1
    };
  },
 
      methods: {
        formatDate: function(date){
        var formatedDate = moment(date).format("YYYY-MM-DD");
    
        return formatedDate;
       },

        
        handleTask() {
            this.$router.push('/taskdashboard/add');
         },

         redirectTo(id) {
            this.$router.push(`/taskdashboard/edit/${id}`);
         },



         refreshList() {
      this.currentTask = null;
      this.currentIndex = -1;
    },

         onDataChange(items) {
          let _tasks = [];
          items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            _tasks.push({
              key: key,
              name: data.name,
              department: data.department,
              task: data.task,
              end_date: data.end_date ,
              status : data.status
            })
          })

          this.taskData = _tasks
         },

         handleDelete() {
          routerService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
      },

      mounted() {
        routerService.getALl().on('value', this.onDataChange)

        // console.log( this.taskData[0].end_date)
      }
   };
</script>
<style scoped>
   .link-data {
    cursor: pointer;
   }
   .link-data:hover {
    color: blue;
   }
  </style>