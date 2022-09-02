<template lang="">
  

  <div class="container mt-5">
    <div
      class="page-btn-title d-flex justify-content-between align-items-center"
    >
      <h2 class="text-dark mb-0"><b>Admin Dashboard</b></h2>
      <div>
        <h5  >John Doe</h5>
      </div> 
    </div>



    <hr />

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
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs   rounded-sm p-1 mt-0 mb-1"
              v-bind:class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>

    
  </div>
</template>
 
<script>
  export default {
    data() {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      return {
        masks: {
          weekdays: 'WWW',
        },
        attributes: [
          {
            key: 1,
            customData: {
              title: 'Lunch with mom.',
              class: 'bg-primary text-white p-1 mt-0 mb-1',
            },
            dates: new Date(year, month, 1),
          },
          {
            key: 2,
            customData: {
              title: 'Take Noah to basketball practice',
              class: 'bg-danger  text-white p-1 mt-0 mb-1',
            },
            dates: new Date(year, month, 2),
          },
          {
            key: 3,
            customData: {
              title: "Noah's basketball game.",
              class: 'bg-secondary  text-white p-1 mt-0 mb-1',
            },
            dates: new Date(year, month, 5),
          },
          {
            key: 4,
            customData: {
              title: 'Take car to the shop',
              class: 'bg-indigo-500 text-white p-1 mt-0 mb-1',
            },
            dates: new Date(year, month, 5),
          },
          {
            key: 4,
            customData: {
              title: 'Meeting with new client.',
              class: 'bg-teal-500 text-white p-1 mt-0 mb-1',
            },
            dates: new Date(year, month, 7),
          },
          {
            key: 5,
            customData: {
              title: "Mia's gymnastics practice.",
              class: 'bg-pink-500 text-white p-1 mt-0 mb-1',
            },
            dates: new Date(year, month, 11),
          },
          {
            key: 6,
            customData: {
              title: 'Cookout with friends.',
              class: 'bg-orange-500 text-white',
            },
            dates: { months: 5, ordinalWeekdays: { 2: 1 } },
          },
          {
            key: 7,
            customData: {
              title: "Mia's gymnastics recital.",
              class: 'bg-pink-500 text-white',
            },
            dates: new Date(year, month, 22),
          },
          {
            key: 8,
            customData: {
              title: 'Visit great grandma.',
              class: 'bg-red-600 text-white',
            },
            dates: new Date(year, month, 25),
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="css"  scoped>
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    display: none;
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
 