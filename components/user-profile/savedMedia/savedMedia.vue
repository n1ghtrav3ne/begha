<template>
    <div class="greenBox container">

        <div class="firstItem">

            <span @click="$router.go(-1)" class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>ذخیره شده ها</span>

        </div>    

        </div>

        <div ref="medias" class="container">

            
        <mediaPostItem />

        
        </div>

        <div v-if="emptyCheck" class="emptyContainer">

                <div class="imageContainer">

                <img src="~/assets/images/noItem/No Item.svg" alt="">

                <span>موردی موجود نیست!</span>

                </div>

                <div class="mediaLink">

                    <span class="material-symbols-outlined">
                    gallery_thumbnail
                    </span>

                    <span @click="$router.push('/media')">رفتن به رسانه</span>

                </div>

            </div>
            
</template>

<script lang="ts" setup>

import mediaPostItem from "~/components/begha-media/MediaPostItem.vue"

defineComponent({mediaPostItem})

const medias = ref();
const emptyCheck = ref(true);

onMounted(() => {
  if (medias.value.children.length === 0) {
    emptyCheck.value = true; 
  } else {
    emptyCheck.value = false; 
  }
});
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.greenBox{
    background-color: $primary;
    height:48px;
    display:flex;
    align-items: center;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-right: 16px;
    color: $primary-on;
    

    .firstItem{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

   
}

.emptyContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40%;
    

    .imageContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
    }

    .mediaLink{
        display: flex;
        flex-direction: row;
        padding: 8px;
        gap: 4px;
        color: $primary;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}


</style>