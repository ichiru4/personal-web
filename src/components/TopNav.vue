<template>
    <div class="top">
        <div class="top-container">
            <div class="logo">
                <img src="@/assets/homeAvatar.jpg" alt="logo">
            </div>
            <nav class="options">
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/about">相册</router-link></li>
                    <li><router-link to="/ab">Test1</router-link></li>
                    <li><router-link to="/abo">Test2</router-link></li>
                    <li><router-link to="/abou">Test3</router-link></li>
                </ul>
            </nav>
            <div class="top-empty-space">
                <div class="search-input">
                    <el-input v-model="searchText" placeholder="search" :prefix-icon="Search" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
const searchText = ref()
</script>

<style lang="scss" scoped>
.top {
    position: fixed;
    color: #ed1b1b;
    height: 60px;
    width: 100%;
    padding: 8px 16px;
    background-color: rgba(255, 255, 255, 0.8);
    /* 初始背景色和透明度 */
    backdrop-filter: blur(10px);
    /* 背景模糊 */
    transition: background-color 0.3s ease;
    /* 背景色变化的过渡效果 */
    z-index: 1000;
    /* 确保导航栏在其他元素之上 */
    border-bottom: 1px solid #ededed;
}

.top-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    max-width: 100%;
    height: 100%;
}

.logo {
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    border-radius: 50%;
    max-height: 100%;
    width: 50px;
}

.options {
    flex: 0 0 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    gap: 30px;
    // border: 2px solid #ededed;
    // border-radius: 20px;
    // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)
}

.options ul {
    display: flex;
    gap: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
}
.options li {
    text-wrap: nowrap;
}

.options a {
    text-decoration: none; // Remove underline
    color: #545454; // Link color
    padding: 10px 15px; // Add padding for clickable area
    border: 2px solid transparent; // Border for transition effect
    // border-radius: 5px; // Rounded corners
    transition: background-color 0.3s, color 0.3s, border-color 0.3s; // Smooth transition
}

.options a:hover {
    color: #bcf0e5f9; // Text color on hover
    border-bottom: 1px solid #1beddf; // Border color on hover
    // border-bottom-style:double;
}



.top-empty-space {
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
}

.search-input :deep .el-input {
    // border-radius: 20px;
    --el-input-border-radius: 20px;
    
} 
</style>