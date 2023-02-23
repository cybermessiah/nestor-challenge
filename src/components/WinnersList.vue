<template>
    <div>
        <div class="container">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>Winners list</span>
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
}
</script>
