<template>
        <div class="first-page">
            <div class="top-empty-space"></div>
            <div class="text-pic-area">
                <div class="home-pic-left">
                    <div class="home-pic-text">
                        <h1>A Website</h1>
                        <h1>Vue</h1>
                    </div>
                    <div class="circle-link-area">
                        <CircleLink style="background-color: aqua;" />
                        <CircleLink style="background-color:crimson;" />
                        <CircleLink style="background-color:darkgray;" />
                        <CircleLink style="background-color:coral" />
                        <CircleLink style="background-color:gold;" />
                        <CircleLink style="background-color:cornflowerblue;" />
                        <CircleLink style="background-color:blueviolet;" />
                    </div>
                </div>
                <div class="home-bigger-Avatar">
                    <img src="@/assets/homeAvatar.jpg" alt="Avatar">
                </div>
            </div>
            <div class="bottom-empty-space"></div>
        </div>
</template>

<script setup>
import CircleLink from '@/components/HomePage/CircleLink.vue';
</script>

<style lang="scss" scoped>

.first-page {
    background-color: rgb(255, 255, 255);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    margin-top: -60px;
}

.top-empty-space {
    width: 100%;
    flex: 1
}

.text-pic-area {
    flex: 1;
    width: 100%;
    display: flex;
    max-width: 80vw;
    margin: 0 auto;
    width: 100%;
    @include responsive-max-width;
}

.home-pic-left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;

}

.home-pic-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // padding-left: 20%;
}

.home-pic-text h1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 2em;
    white-space: nowrap;
    color: #b9b1b1;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

}

.circle-link-area {
    display: flex;
    height: 80px;
    width: 100%;
    // padding-left: 20%;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
}

.home-bigger-Avatar {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}

.home-bigger-Avatar img {
    margin-left: 30%;
    border-radius: 50%;
    max-height: calc(100vh/3);
    max-width: 100%;
}

.bottom-empty-space {
    flex: 1;
    width: 100%;
}


</style>