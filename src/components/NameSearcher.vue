<template>
    <div class="container">
        <el-form :model="form" label-width="120px">
            <el-form-item label="Insert your name">
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
import { getAll } from '@/api/peopleApi.js'
import { toRaw } from 'vue'

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
            luckyNames: [],
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.form.name)
            // console.log(this.luckyNames)
            let isLucky = this.luckyNames.some((spec) => {
                return spec.name == this.form.name
            })
            if (isLucky) {
                console.log('Success')
            } else {
                console.log('Not Lucky')
            }
        },
        async getData() {
            const res = await getAll()
            this.luckyNames = toRaw(res)
        },
    },
    mounted() {
        this.getData()
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
