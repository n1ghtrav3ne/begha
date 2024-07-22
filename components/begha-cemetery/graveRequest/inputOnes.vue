<template>

    <div class="inputContainer">

        <span>{{ item.name }}</span>

        <div class="inputHolder">

            <input :id="id" :value="item.val" :placeholder="item.txt" :type="item.type">

           
                <span class="icon" :class="item.iconClass">
                {{ item.iconName }}
                </span>
            
 
        </div>

        <span class="warning">{{ item.warning }}</span>

    </div>

</template>
<script setup lang="ts">

const props=defineProps(['item','id'])

</script>
<style lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.inputContainer{
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
    }

    .inputHolder{

        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid $outline-variant;
        border-radius:8px;
        padding: 12px;

        input{
        font-family: "Yekan Bakh FaNum";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: transparent;
        font-family: 'yekan-regular';
        outline:none;
        width:100%;
        display: flex;
        text-align: start;
    }

    .icon{
        transform: scale(3);
        color: $secondary;
        }

    }
    .warning{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

}

.inputHolder:hover{
    box-shadow: 0px 1px 8px 0px rgba(66, 159, 245, 0.45);
    border: 1px solid $secondary-s-400;
}

</style>