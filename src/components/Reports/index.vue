<template lang="">
  <div className="container organisation-controller mt-5">
    <div
      className="d-flex  justify-content-between
    align-items-center"
    >
      <h2 className="text-dark mb-0"><b>Reports</b></h2>

      <div>
        <Button class="btn btn-warning"
          >Export to PDF <FaDownload className="download-icon"
        /></Button>
      </div>
    </div>
    <hr />

    <div>
      <!-- <div className="row">
        <div className=" filter-fields col-lg-2 col-md-3">
          <div className=" input-group   mb-3">
            <input
              placeholder="Search by PIN"
              type="number"
              className="form-control"
              aria-describedby="button-addon2"
            />
          </div>
        </div>

        <div className=" filter-fields col-lg-2 col-md-3">
          <Button class="btn btn-success">Search </Button>
          <Button class="btn btn-danger ml-4">Clear</Button>
        </div>
      </div> -->

      <div>
         

            <table class="table table-striped">
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
     </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
