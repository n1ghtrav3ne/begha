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

        <div :class="{active:hasImage}" @click="fileInput.click()" class="addImage">

            <span class="addText">افزودن تصویر کاور</span>

            <div class="iconContainer">

                <span class="material-symbols-outlined">
                border_color
                </span>

            </div>


        </div>
        
    </div>

    <div class="container">

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

    <input @change="handleFileChange" ref="fileInput" type="file" class="hidden" accept=".jpg,.png">

</template>

<script lang="ts" setup>

const fileInput=ref()

const poster=ref()

const hasImage = ref(false)

const handleFileChange=(event:any)=>{
    const file=event.target.files[0]
    const url=URL.createObjectURL(file)
    poster.value.style.backgroundImage=`url(${url})`
    hasImage.value=true
}

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
    }
}

.nameContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;
    bottom: 85px;

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

</style>