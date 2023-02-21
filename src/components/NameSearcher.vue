<template>
    <div class="container">
        <el-form :model="form" label-width="120px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" placeholder="Please input" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="handleSubmit"
                    >Check</el-button
                >
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
    <name-search-response></name-search-response>
</template>

<script>
import NameSearchResponse from '@/components/NameSearchResponse.vue'

export default {
    name: 'NameSearcher',
    components: {
        NameSearchResponse,
    },
    data() {
        return {
            form: {
                name: '',
            },
        }
    },
    methods: {
        handleSubmit() {
            // this.selected = event.target.value
            // this.editStudent.favoriteInstructorId = event.target.value
            // this.validateInstructors()
            console.log('Submitted')
        },
    },
}
import { reactive } from 'vue'

const form = reactive({
    name: '',
})
</script>

<style scoped lang="scss">
.container {
    width: 50%;
}
</style>
