<template>

    <div class="container">

        <span class="image">
            <img src="~/assets/images/cermony/paymentPortal.png" alt="">
        </span>

        <div class="infoContainer">

            <span class="price">۲٬۰۰۰٬۰۰۰ تومان</span>

            <div class="date">

                <span>پرداخت جهت رزرو سالن مراسم</span>

                <div class="blueTxt">

                    <span class="dateInfo">روز دوشنبه مورخ ۱۴۰۲/۱۲/۱۲ از ساعت ۱۲:۰۰ الی ۱۴:۰۰ <span class="success">با موفقیت انجام شد.</span></span>

                </div>
            

            </div>

            <div class="wariningText">
                کاربر گرامی لطفا شماره سفارش خود را جهت دریافت و استفاده از خدمت مورد نظر به خاطر بسپارید.
            </div>

            <hr class="firstLine">

            <div class="tokens">

                <div class="orderCode">
                    <span>شماره سفارش</span>

                    <div class="icon">
                        <span>۹۴۵۰۰۳۲۴</span>
                        <img src="~/assets/images/cermony/copy.svg" alt="">
                    </div>
                    
                </div>

                <div class="trackingCode">
                    <span>کد رهگیری</span>

                    <span>۲۳۹۴۰۰۴</span>
                </div>

            </div>


        </div>

        <div class="paymentDate">

        <span>پرداخت شده در تاریخ ۱۴۰۲/۱۲/۰۲ ، ۱۴:۳۲</span>

        </div>

        <button class="confirmButton">رفتن به لیست رزرو ها</button>

        <button class="backButton">بازگشت</button>

    </div>
    

</template>
<script setup>

</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.image{
    display: flex;
    justify-content: center;
    align-items: center;

    img{
    width: 234px;
    height: 180px;
 }
}

.infoContainer{
    margin-top: 16px;
    width: 80%;
    height: 281px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    .price{ 
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: $secondary;
        
    }

    .date{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 12px;
        
        .blueTxt{
            display: flex;
            text-align: center;
            width: 100%;
            justify-content: center;
            .dateInfo{
            color: $secondary;
            
            .success{
                color:$surface-on;
            }
        }
        }
        
    }

    .wariningText{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
        display:flex;
        justify-content:center;
        text-align:center;
        margin-top: 24px;
    }

    hr{
        width: 100%;
        height: 0;
        color: $secondary-s;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .tokens{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
        width: 100%;
        .orderCode{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;

            .icon{
                display: flex;
                flex-direction: row;
                gap: 4px;
            }
        }

        .trackingCode{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
    }

    
}

.paymentDate{
        width:100%;
        gap: 16px;
        height: 33px;
        width: 80%;
        border-top: 1px solid $outline-variant;
        margin-top: 40px;
        display:flex;
        margin-right: auto;
        margin-left: auto;
        align-items:center;
        flex-direction:column;
        text-align:center;
    
        span{
            margin-top: auto;
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
            width: 100%;
            height: 17px;
        }
    }

    .confirmButton{
        margin-top: 60%;
        width: 80%;
        height: 44px;
        background: $primary;
        color:$primary-on;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-right: auto;
        margin-left: auto;
        border-radius:8px;
    }

    .backButton{
        margin-top: 4px;
        width: 80%;
        height: 44px;
        color:$surface-on;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-right: auto;
        margin-left: auto;
    }

</style>