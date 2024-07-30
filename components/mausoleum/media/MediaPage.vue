<template>

     <div class="greenBox container">

    <div v-if="!emptyCheck" class="firstItem">

        <span @click="$router.go(-1)" class="material-symbols-outlined ">
        arrow_right_alt
    </span>

    <span>رسانه‌ها</span>

    </div>    

    <img @click="openSearch=true" class="mr-auto" src="~/assets/images/mausoleum-media/search-normal.svg" alt="">

    </div>

    <div v-if="openSearch" class="search">

        <div class="inputContainer">

            <span @click="openSearch=false" class="material-symbols-outlined">
            east
            </span>

            <div class="searchInput w-full">

                <input placeholder="جستجو برای رسانه‌" type="text">

                <img class="mr-auto" src="~/assets/images/cermony/search-normal.svg" alt="">

            </div>

        </div>

    </div>

    <div ref="medias" class="container">

        <div class="mediaContainer">

            <div v-for="(item , index) in MediaItems" :key="index">

                <MediaItem @options="MediaOptionsSheet=true" :item="item" />

            </div>


        </div>


    </div>

     <div v-if="emptyCheck" class="emptyContainer">

                <div class="imageContainer">

                <img src="~/assets/images/noItem/No Item.svg" alt="">

                <span>رسانه ای تعریف نشده است.</span>

                </div>

                <div class="addMedia">

                    <img src="~/assets/images/mausoleum-media/add-square.svg" alt="">

                    <span>رسانه جدید</span>

                </div>

            </div>

            <BottomSheets title="رویداد عید فطر" v-model="MediaOptionsSheet">

                <MediaOptions />

            </BottomSheets>

</template>

<script setup lang="ts">

import MediaItem from './MediaItem.vue';

import MediaOptions from './MediaOptions.vue';

const openSearch=ref(false)

const MediaOptionsSheet=ref(false)

const medias = ref();
const emptyCheck = ref(true);

onMounted(() => {
  if (medias.value.children.length === 0) {
    emptyCheck.value = true; 
  } else {
    emptyCheck.value = false; 
  }
});

const MediaItems=ref<{title:string ; explanation:string ; hashtag:string}[]>
([
    {
        title:'دیدار آیت الله خمینی با مردم ',
        explanation:'متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم',
        hashtag:'# امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده'
    },
    {
        title:'دیدار آیت الله خمینی با مردم ',
        explanation:'متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم',
        hashtag:'# امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده'
    },
])

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

.search{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    background: $surface;
    z-index: 99;
    right:0;
    left:0;
    max-width: 600px;
    margin:0 auto;

    .inputContainer{
        display: flex;
        flex-direction: row;
        margin-top: 24px;
        gap: 16px;
        align-items: center;

        .searchInput{
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 16px;
            border: 1px solid $primary;
            padding: 16px;

            input{
                outline: 0;
                background: transparent;
                width: 100%;
            }
        }
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
        color: $surface-on-variant;
        
    }

    .addMedia{
        display: flex;
        margin-top: 16px;
        flex-direction: row;
        align-items: center;
        padding: 8px 12px 8px 12px;
        gap: 8px;
        color: $primary-on;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: $primary;
        border-radius:8px;
    }
}

.mediaContainer{
    display: flex;
    flex-direction: column;
}


</style>