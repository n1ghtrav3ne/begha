<template>
    <div>
      <div class="base-modal h-[522px]">

          <span class="base-modal-stick"></span>
          
        <div class="base-modal-body">

            <div class="imageContainer">

                <input type="file" @click="readAllJpgFiles" accept=".jpg,.svg" multiple ref="fileInput">

            </div>

        </div>
        
      </div>
      <OverlayLayout />
    </div>
  </template>
  
  <script lang="ts" setup>
  import OverlayLayout from "~/components/layouts/OverlayLayout.vue";
  import { useModalStore } from "~/stores/modals-store";
  
  defineNuxtComponent({ OverlayLayout });
  const modalStore = useModalStore();



const fileInput = ref<HTMLInputElement | null>(null);

function readAllJpgFiles() {
  if (fileInput.value) {
    const files = Array.from(fileInput.value.files || []).filter(file => file.type === 'image/jpeg');
    for (const file of files) {
      readFile(file);
    }
  }
}

function readFile(file: File) {
  const reader = new FileReader();
  reader.onload = () => {
    console.log(file.name, reader.result);
  };
  reader.readAsDataURL(file);
}


  watch(()=>modalStore.isOpenImagePicker,(newValue)=>{
    if(newValue){

    }
  })
  

  </script> 
  
  <style lang="scss" scoped>
  @import "~/assets/css/icons.scss";
  @import "~/assets/css/colors.scss";
  .base-modal {
    background-color: #fff;
    z-index: 9999;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 30px 25px;
    overflow: initial !important;
   
      .base-modal-stick {
        width: 75px;
        height: 6px;
        background-color: $primary;
        position: absolute;
        top: 33px;
        right: 40%;
        margin-top: -29px;
        border-radius: 20px;
      }
      .close-modal-icon {
        font-size: 20px;
      }
    
    .base-modal-body {
      height: 100%;
      overflow-y: scroll !important;

      .imageContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
  </style>
  