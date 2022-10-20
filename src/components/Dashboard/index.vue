<template lang="">
  <div class=" page-overlay container mt-5">
    <div
      class="page-btn-title d-flex justify-content-between align-items-center"
    >
      <h2 class="text-dark mb-0"><b>Admin Dashboard</b></h2>
      <div>
        <h5>John Doe</h5>
      </div>
    </div>

    <hr />

    <!-- <b-modal v-model="modalShow">Hello From Modal!</b-modal> -->
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>

          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <button
              v-for="attr in attributes"
              :key="attr.key"
              @click="showModal(attr.customData)"
              class="text-xs rounded-sm p-1 mt-0 mb-1"
              v-bind:class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </button>
          </div>
        </div>
      </template>
    </v-calendar>

   
  </div>

 

  <div v-if="modalShow">
    
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ this.title }}</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="hideModal()">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                      >Task Status</label
                    >
                    <select @change = "saveChanges($event)"  v-bind:value = "this.taskStatus" class="form-control">
                      <option :value ="0">To do</option>
                      <option :value = "1">In Progress</option>
                      <option  :value = "2">Done</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="hideModal()"
                  >
                    Close
                  </button>
                  <button type="button" @click = "handleSave()" class="btn btn-success">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
import routerService from "../services/routerService";

export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      taskData: [],
      title: "",
      taskStatus: "",
      changedTask : "",
      dataKey : "",
      masks: {
        weekdays: "WWW",
      },
      attributes: [],
      modalShow: false,
    };
  },
  methods: {
    onDataChange(items) {
      var self = this;
      let _tasks = [];
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        self.attributes.push({
          key: key,

          customData: {
            title: data.task,
            class:
              data.status == 0
                 && "bg-primary border-0 text-white p-1 mt-0 mb-1" ||
                 data.status == 1 && "bg-warning border-0  text-white p-1 mt-0 mb-1" || 
                 data.status == 2 && "bg-success border-0  text-white p-1 mt-0 mb-1",
            status: data.status,
            key: key,
          },
          dates: data.end_date,
        });
      }),
        (this.taskData = _tasks);
    },

    showModal(data) {
      this.modalShow = true;
      console.log("IA M ", data);
      this.title = data.title;
      this.taskStatus = data.status
      this.dataKey = data.key
    },
    hideModal() {
      this.modalShow = false;
    },

    saveChanges(event) {
      console.log(event.target.value)
      this.changedTask = event.target.value
    },

    handleSave() {
      console.log(this.changedTask)
      var data = {
        status :this.changedTask
      }

      routerService.update(this.dataKey,data).then(() => {
        console.log("Updated Sucessfully")
        this.modalShow = false;
        this.onDataChange()
      }).catch(e => {
        console.log(e)
      })
    }
  },

  mounted() {
    routerService.getALl().on("value", this.onDataChange);

    console.log("data", this.taskData);
  },
};
</script>

<style lang="css" scoped>
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  display: none;
}

.vc-day {
  text-align: center !important;
}

.modal-dialog {
    position: relative;
    width: auto;
    
    pointer-events: none;
    bottom: 300px;
    z-index: 1;
     
    background-color: red;
}
.page-overlay {
  
}
.custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
}
</style>
