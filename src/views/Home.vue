    <template>
        <div class="container">
            <!-- <router-view></router-view> -->
            <div class="main">
                <FirstPage />
                <RestPage />
            </div>
        </div>
    </template>

<script setup>
import FirstPage from '@/components/HomePage/FirstPage.vue';
import RestPage from '@/components/HomePage/RestPage.vue';
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

</style>
