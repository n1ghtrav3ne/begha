<template>

    <div class="greenBox container">

        <div class="paymentTitle">

                <span class="material-symbols-outlined ">
                arrow_right_alt
                </span>

            <span>پرداخت</span>

        </div>
    </div>

    <div class="container">

        <div class="explanation">
            <p>این متن دارای توضیح است. این متن دارای توضیح است. این متن دارای توضیح است.</p>
        </div>

        <hr/>

        <div class="discountCode">

            <input v-model="discountCode" type="text" placeholder="کد تخفیف">

            <button :class="{active:checkInput}" class="discountButton">اعمال</button>

        </div>

        <div class="priceBanner">

            <div class="wholePrice">

                <img src="./paymentPortal.png" alt="">

                <div class="priceAmount">

                    <span class="price">۲٬۰۰۰٬۰۰۰ تومان</span>

                    <span class="txt">مبلغ قابل پرداخت</span>

                </div>


            </div>

            <hr class="secondOne">

            <div class="priceContainer">

                <div class="originPrice">

                    <span>مبلغ کل</span>

                    <span>۲٬۵۰۰٬۰۰۰ تومان</span>

                </div>
                
                <div class="discountedPrice">

                    <span>مبلغ تخفیف</span>

                    <span>۵۰۰٬۰۰۰ تومان</span>

                </div>
            </div>

            <button class="payButton">پرداخت</button>

        </div>

    </div>

</template>
<script setup lang="ts">

    const discountCode=ref('')
    const checkInput=ref(false)

    watch(discountCode,(newValue)=>{
        if(newValue===''){
            checkInput.value=false
        }else{
            checkInput.value=true
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
    font-size: 16px;
    font-family: 'yekan-regular';

    .paymentTitle{
        display: flex;
        gap: 16px;
    }
}

.container{

    .explanation{
        width: 100%;
        font-family: "Yekan Bakh FaNum";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:$surface-on
}

    hr{
        width: 100%;
        height: 0;
        color: $outline-variant;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .discountCode{
        width: 100%;
        height: 54px;
        display: flex;
        flex-direction: row;
        padding: 16px;
        align-items: center;
        border-radius: 16px;
        border: 1px solid $outline;
        justify-content:space-between;
        input{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            width: 70%;
            background:none;
            outline:none;
        }

        .discountButton{
            margin-right: auto;
            background: $surface-container-high;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
            padding:8px;
            border-radius:8px;
            width: 79px;
            pointer-events: none;
        }
        .active{
            background: $secondary;
            color:$secondary-on;
            pointer-events: all;
            }
     
    }

    .priceBanner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 355px;
        margin-top: 157px;
        padding-top: 12px;
        padding-right: 32px;
        padding-left: 32px;
        padding-bottom: 12px;
        border: 1px solid $outline-variant;
        margin-top: 80%;
        border-radius:16px;
        .wholePrice{
            width: 100%;
            height: 272px;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: fit-content;


            img{
                width: 172px;
                height: 132px;
            }

            .priceAmount{
                margin-top: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .price{
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    color: $secondary;
                }

                .txt{
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    color:$secondary;
                }

            }

        }

        .secondOne{
            background: $secondary;
            width: 100%;
            height: 0px;
            margin-top: 16px;
            margin-bottom: 16px;
        }

        .priceContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;

            .originPrice{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
            }

            .discountedPrice{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $error;
            }
        }

        .payButton{
            width: 100%;
            height: 44px;
            padding: 8px;
            background: $primary;
            color:$primary-on;
            border-radius:8px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-top: auto;
        }
    }

}

</style>