<template lang="">
 

  <div class="container mt-5">
    <div
      class="page-btn-title d-flex justify-content-between align-items-center"
    >
      <h2 class="text-dark mb-0"><b>Reports</b></h2>

      <div>
            
     
     
        <Button @click = "createPDF" class="btn btn-warning"
          >Export to PDF <FaDownload className="download-icon"
        /></Button>
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
    <tr v-for="(data, index) in taskData">
     
      <td>{{data.name}}</td>
      <td>{{data.department}}</td>
      <td>{{data.task}}</td>
      <td> <span v-if="data.status == 0" class="badge badge-primary">To Do</span>
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
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
 export default {

  data() {
    return {
      taskData: [],
      currentTask: null,
      currentIndex: -1
    };
  },
 
      methods: {
        handleTask() {
            this.$router.push('/taskdashboard/add');
         },

         redirectTo(id) {
            this.$router.push(`/taskdashboard/edit/${id}`);
         },



         createPDF () {
          const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    const title = "Report";
    const headers = [["NAME", "DEPARTMENT", "TASK"]];
     const data = this.taskData.map(elt=> [elt.name, elt.department, elt.task, ]);
      
    let content = {
        startY: 90,
        head: headers,
        body: data,
        headStyles: { fillColor: "#d6a52e" },
      };
      doc.setFontSize(15);
      doc.text(title, marginLeft, 40);
      doc.setFontSize(12);
      
      doc.autoTable(content);
      doc.save("report.pdf")
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
              end_date:data.end_date,
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

        console.log(this.taskData)
      }
   };
</script>
<style lang=""></style>
