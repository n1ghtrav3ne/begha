<template>

    <BaseDialog :modalHeight="307">

        <template #headerText>

            <span class="headerText">ویرایش تصویر کاور</span>

        </template>

        <template #body>

            <img :src="image" alt="">

            <hr>

            <div class="iconContainer">

                <div @click="inputFile.click()" class="item">

                    <span class="material-symbols-rounded">
                    add_photo_alternate
                    </span>

                    <span>تصویر جدید</span>

                </div>

                   <div @click="deleteImage" class="item">

                    <span class="material-symbols-rounded">
                    delete
                    </span>

                    <span>حذف تصویر</span>

                </div>

            </div>

            <input @change="handleFileChange" ref="inputFile" type="file" class="hidden" accept=".jpg,.png">


        </template>
    
    </BaseDialog>
    
</template>

<script lang="ts" setup>

import BaseDialog from "~/components/global/mBaseDialog.vue"

const props=defineProps(['image'])

const inputFile = ref();
const imageUrl = ref('');

const handleFileChange = (event:any) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event:any) => {
    imageUrl.value = event.target.result;
  };

  reader.readAsDataURL(file);
};

const deleteImage=()=>{
}

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
}

img{
    position: relative;
    right: 0;
    left: 0;
    margin: 0 auto;
    border-radius: 12px;
    width: 100%;
    height: 134px;
}

hr{
    width: 100%;
    color: $outline-variant;
    margin-top: 14px;
    margin-bottom: 12px;
}

.iconContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    justify-content: center;

    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
    }
}

</style>