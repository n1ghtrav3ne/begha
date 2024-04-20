<template>
    <div>
        <nav>
            <div class="container  flex items-center justify-between flex-row-reverse">
                <div>
                    <img src="~/assets/images/logo/layout-logo.png" alt="">
                </div>
                <div @click="appSidebar.changeSidebarState()">
                    <i>همبرگر آیکون</i>
                </div>
            </div>
        </nav> 
        <Transition name="slide-fade">
        <Sidebar v-if="appSidebar.isOpenAppSidebar"/> 
    </Transition>      
    </div>
</template>

<script lang="ts" setup>
import Sidebar from './Sidebar.vue';
import { useAppSidebar } from '~/stores/layout-store';
defineComponent({Sidebar});
const appSidebar = useAppSidebar()
</script>


<style lang="scss" scoped>

.slide-fade-enter-active {
  
    opacity: 1;
  transition: all ease-in-out .13s;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
  
  opacity: 0;
  transition: all ease-in-out .13s;
}
</style>
