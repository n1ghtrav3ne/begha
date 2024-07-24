<template>
    
    <div class="greenBox container">

    <div class="firstItem">

        <span @click="$router.push('/mausoleum')" class="material-symbols-outlined ">
        arrow_right_alt
    </span>

    <span>اطلاعات بقعه</span>

    </div>    

    </div>

    <div ref="poster" class="poster">

        <div class="addImage">

            <span v-if="!hasImage" class="addText">افزودن تصویر کاور</span>

            <div  @click="fileInput.click()" v-if="!hasImage" class="iconContainer">

                <span class="material-symbols-outlined">
                border_color
                </span>

            </div>

            <div @click="mausoleumStore.changeInfoPoster('active')" class="activeImage" v-if="hasImage">

                <span class="material-symbols-outlined">
                border_color
                </span>

            </div>


        </div>
        
    </div>

    <div v-if="!showContent" class="container">

        <div class="nameContainer">

            <div class="iconHolder">

                <img src="~/assets/images/mausoleumInformation/icon.svg" alt="">

            </div>

            <div class="info">

                <span class="name">حرم امام زاده صالح (ع)</span>

                <span class="followers">۳۴۹ نفر دنبال کننده</span>

            </div>

        </div>

        <div class="fillInfo">

            <span class="material-symbols-outlined">
            info
            </span>

            <span class="noInfo">اطلاعات وارد نشده</span>

            <button @click="$router.push('/mausoleum/information/edit_information')">وارد کردن اطلاعات</button>

        </div>

    </div>

       

     <div v-if="showContent" class="newContainer">

         <div class="profileImageContainer">

            <img @click="mausoleumStore.changeInfoImage('active')" v-if="showContent" class="w-full h-full rounded-full" :src="pageData[0].image" alt="">


        </div>

            
        <div class="titleContainer">

            <div class="fullNameContainer">

                <span class="name">حرم امام زاده صالح (ع)</span>

                <span class="followers">۳۴۹ نفر دنبال کننده</span>

            </div>

            <button @click="$router.push('/mausoleum/information/edit_information')" class="editInfo">ویرایش اطلاعات</button>

            </div>


            <adminBanner />


            <div class="aboutMas">

                <div class="aboutText">

                    <span>درباره امام زاده</span>

                    <p class="text" v-if="showContent">{{ pageData[0].about }}</p>

                </div>

                <div class="addressContainer">

                    <div class="textContainer">

                        <span class="addressTitle">آدرس</span>

                        <span class="address" v-if="showContent">{{ pageData[0].address }}</span>

                    </div>

                    <div class="locationIcon">

                        <span class="material-symbols-rounded">
                        moved_location
                        </span>

                    </div>

                </div>

                <div class="phoneContainer">

                    <div class="textContainer">

                        <span class="phoneTitle">اطلاعات تماس</span>

                        <span class="phone" v-if="showContent">{{ pageData[0].firstNumber }} و {{ pageData[0].secondNumber }}</span>

                    </div>

                    <div class="locationIcon">

                        <span class="material-symbols-rounded">
                        call
                        </span>

                    </div>

                </div>

            </div>


        </div>

    <input @change="handleFileChange" ref="fileInput" type="file" class="hidden" accept=".jpg,.png">

    <ChangeImage v-if="mausoleumStore.isOpenInfoImage" :image="pageData[0].image" />

    <ChangePoster v-if="mausoleumStore.isOpenInfoPoster" :image="posterImage" />


</template>

<script lang="ts" setup>

import adminBanner from "~/components/mausoleum/information/adminPanelBanner.vue"

import ChangePoster from "~/components/mausoleum/information/editInformation/inputValues/ChangePoster.vue"

import profileImage from "~/assets/images/cemetery/cemetery.png";

import ChangeImage from "~/components/mausoleum/information/editInformation/inputValues/ChangeImage.vue"

import {useMausoleumStore} from "~/stores/m-modals-store"

const mausoleumStore=useMausoleumStore()

defineComponent({adminBanner,ChangeImage,ChangePoster})

const fileInput=ref()

const poster=ref()

const hasImage = ref(false)

const posterImage=ref('')

const handleFileChange=(event:any)=>{
    const file=event.target.files[0]
    const url=URL.createObjectURL(file)
    poster.value.style.backgroundImage=`url(${url})`
    hasImage.value=true
    posterImage.value=url
}

const showContent =ref(false)

const pageData=ref<{image:any; about:string ; address:string ; firstNumber:string ; secondNumber?:string}[]
>([
    {
        image:profileImage,
        about:"در داخل حریم وسیع امامزاده صالح، صندوقی چوبین وجود دارد که احتمالاً به دوران اواخر صفوی یا افشار تعلق دارد و ضریح ممتاز نقره‌ای آن که اضلاع شرقی و شمال شرقی و غربی آن دارای محفظه مشبک مزین به نقره و ضلع جنوبی آن مشبک چوبی است از وقفیات میرزا سعیدخان، وزیر امور خارجه اواخر قاجار است.",
        address:'تهران، میدان تجریش، حرم امامزاده صالح (ع)',
        firstNumber:'091223456789',
        secondNumber:'09123456789'
    }
])

watchEffect(()=>{
    if(pageData.value.length > 0){
        showContent.value=!showContent.value
    }
})

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

.poster{
    width:100%;
    height: 140px;
    border-radius: 0px 0px 12px 12px;
    background: linear-gradient(90deg, #F5EDFF 0%, #9FDBF8 100%);
    padding-top: 12px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: end;
    padding-left: 3%;

    .addImage{
        display: flex;
        flex-direction: row;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $secondary;
        gap: 8px;
        align-items: center;
        margin-bottom: auto;

        .iconContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            background: $surface;
            padding: 6px;
            width: 32px;
            height: 32px;
            border-radius: 100%;

            span{
                transform: scale(0.8);
            }
        }

        .activeImage{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px;
            border-radius: 50%;
            color: $primary;
            background: $surface;
            width: 32px;
            height: 32px;

            span{
                transform: scale(0.8);
            }
        }
    }
}

.nameContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;
    bottom: 85px;
    position: relative;

    .iconHolder{
        padding: 4px;
        border-radius: 100%;
        }

    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;

        .name{
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color: $surface-on;
        }

        .followers{
            color: $surface-on-variant;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
}

.fillInfo{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;

    .material-symbols-outlined{
        color:$surface-on-variant
    }

    .noInfo{
        color: $surface-on-variant;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 8px;
        margin-bottom: 16px;
    }

    button{
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        background: $primary;
        color: $primary-on;
        border-radius: 8px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

.active{
    color: $primary;

    .addText{
        display: none;
    }

    .iconContainer{
        background: $primary-on !important;
        color: $primary !important;
    }
}



.newContainer{
    padding: 16px;
    max-width: 600px;

    .profileImageContainer{
    width: 120px;
    height: 120px;
    padding: 4px;
    background: $surface;
    position: relative;
    bottom: 5em;
    border-radius: 100%;
    right: 16px;
}



    .titleContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    bottom: 4.5em;
    width:100%;
    
    .fullNameContainer{
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: space-between;

        .name{
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color: $surface-on;
        }

        .followers{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
        }

    }

    .editInfo{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            color: $primary-on;
            border-radius: 8px;
            background: $primary;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
}

.aboutMas{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 12px;
    border-top: 1px solid $outline-variant;
    gap: 12px;

    .aboutText{
        display: flex;
        flex-direction: column;
        gap: 4px;

        span{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
        }

        .text{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            overflow: auto;
            height: 132px;
        }

        .text::-webkit-scrollbar{
            display: none;
        }

    }

    .addressContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        
        
        .textContainer{
            display: flex;
            flex-direction: column;
            gap: 4px;

            .addressTitle{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color:$surface-on-variant;
            }

            .address{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
            }
        }

 

            .material-symbols-rounded{

                color: $secondary-container;
                background: $secondary;
                width: 36px;
                height: 36px;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

        }
     
    }


    .phoneContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        
        
        .textContainer{
            display: flex;
            flex-direction: column;
            gap: 4px;

            .phoneTitle{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color:$surface-on-variant;
            }

            .phone{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
            }
        }

 

            .material-symbols-rounded{

                color: $secondary-container;
                background: $secondary;
                width: 36px;
                height: 36px;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

        }
     
    }

}


}




</style>