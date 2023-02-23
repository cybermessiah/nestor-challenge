<template>
    <div>
        <div class="container">
            <h2>Winners Page</h2>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>Today's Winners</span>
                    </div>
                </template>
                <div v-for="el in winners" :key="el" class="text item">
                    <h5>{{ el }}</h5>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WinnersList',
    computed: {
        winners() {
            return this.$store.getters.getList
        },
    },
    data() {
        return {
            title: 'details',
        }
    },
}
</script>
