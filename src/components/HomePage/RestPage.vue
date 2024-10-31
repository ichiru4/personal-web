<template>
    <div class="restpage-container">
        <div class="left-side-content">
            <div class="pic-container">
                <h1 class="restpage-h1">Photos</h1>
                <!-- <PicCard> -->
                <div>
                    <div class="flex-column fh fw">
                        <div class="first-row-container">
                            <PicCard size="medium-bigger"></PicCard>
                            <PicCard size="medium"></PicCard>
                        </div>
                        <div class="fw fh small-card-container">
                            <PicCard size="small"></PicCard>
                            <PicCard size="small"></PicCard>
                            <PicCard size="small"></PicCard>
                            <PicCard size="small"></PicCard>
                        </div>
                    </div>
                </div>
            </div>
            <div class="article-container">
                <h1 class="restpage-h1" style="margin-top: 10px;">Articles</h1>
                <div class="article-content">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
            <div class="pagination">
                <el-pagination background="false" layout="prev,pager,next,slot" :page-count="totalPage" :default-page-size="3"  >
                    
                </el-pagination>
            </div>
        </div>
        <div class="right-side-content"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ArticleCard from './ArticleCard.vue';
import PicCard from './PicCard.vue';
const totalPage = ref(3);
</script>

<style lang="scss" scoped>
.restpage-container {
    min-height: 100vh;
    max-width: 80vw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 15px;
    @include responsive-max-width;
}


.left-side-content {
    flex: 0 0 70%;
    border-radius: 1%;
    // background-color: rgb(99, 249, 242);
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    // align-items: center;
}

.first-row-container {
    display: flex;
    justify-content: center;
    width: 100%;
}


.small-card-container {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    flex-wrap: wrap;
}

.pic-container {
    border-radius: 1%;
    display: flex;
    justify-content: flex-start;
    // gap: 15px;
    flex-direction: column;
}

.restpage-h1 {
    font-size: larger;
    margin: 0;
    color: rgb(88, 88, 88);
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 10px;
    border-bottom: 2px solid rgb(245, 245, 245);
    text-shadow: 1px 1px 2px rgba(202, 198, 198, 0.1);
}


.article-container {
    border-radius: 1%;
    display: flex;
    flex-direction: column;
}

.article-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.pagination{
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 15px;
}
.pagination :deep .el-pagination{
    justify-content: center;
    width: 100%;
}

.pagination :deep .el-pagination li{
    border-radius: 15%;
    background-color: #fdfdfd;
}

.pagination :deep button{
    border-radius: 15%;
    padding: 10px;
    --el-pagination-button-bg-color: #fdfdfd;
}

.right-side-content {
    flex: 0 0 calc(30% - 15px);
    border-radius: 1%;
    background-color: rgb(249, 166, 166);
}

@media (max-width: 768px) {
    .first-row-container {
        flex-direction: column;
    }
}
</style>