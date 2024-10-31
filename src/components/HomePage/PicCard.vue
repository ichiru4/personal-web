<template>
    <div :class="[sizeClass] ">   
            <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';
 const props = defineProps({
    size: {
        type: String,
        required: false,
        default: "big"
    }
})

const sizeClass = computed(() => {
    if (props.size === 'big') {
        return 'big-pic-card';
    } else if (props.size === 'medium') {
        return 'medium-pic-card';
    } else if (props.size ==='medium-bigger') {
        return'medium-bigger-pic-card';
    }
    else {
        return 'small-pic-card';
    }
});
</script>

<style lang="scss" scoped>
.big-pic-card {
    background-color: #a56a6a;
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 1920/1080;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
.medium-pic-card {
    background-color: azure;
    overflow: hidden;
    flex: 0 1 calc((100% - 30px)/3);
    margin-right: 15px;
    border-radius: 20px;
    aspect-ratio: 1/1;
}
.medium-pic-card:last-child{
    margin-right: 0;
}
.medium-bigger-pic-card {
    background-color: #f2c7c7;
    overflow: hidden;
    flex: 0 1 calc((100% - ((100% - 30px)/3)) - 15px);
    border-radius: 20px;
    margin-right: 15px;
}

.small-pic-card {
    background-color: crimson;
    aspect-ratio: 1/1;
    border-radius: 20px;
    flex: 1;
    max-width: calc((100% - 45px)/4);
    margin-right: 15px;
}
.small-pic-card:last-child {
    margin-right: 0;
}
@media (max-width: 768px) {
   .medium-bigger-pic-card{
    margin-right: 0;
   }
   .medium-pic-card{
    margin-top: 15px;
   }
}
</style>