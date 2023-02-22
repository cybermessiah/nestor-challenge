<template>
    <div class="container">
        <el-form :model="form" label-width="120px">
            <el-form-item label="Insert your name">
                <el-input
                    v-model="form.name"
                    placeholder="Please write your name"
                />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="handleSubmit"
                    >Check</el-button
                >
            </el-form-item>
        </el-form>
        <el-dialog
            v-model="dialogSuccess"
            title="Lucky"
            width="30%"
            :before-close="handleClose"
        >
            <span
                >Congratulations, {{ form.name }} is a lucky name! <br />You've
                won a prize. Will you accept it?</span
            >
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="handleReject">Reject</el-button>
                    <el-button type="primary" @click="handleAccept">
                        Accept
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog
            v-model="dialogUnsuccessful"
            title="Try again"
            width="30%"
            :before-close="handleClose"
        >
            <span
                >I'm sorry, {{ form.name }} is not in today's list of lucky
                names.</span
            >
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="handleOk"> OK </el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog
            v-model="dialogAlreadyWon"
            title="Already won"
            width="30%"
            :before-close="handleClose"
        >
            <span
                >I'm sorry, {{ form.name }} has already received their prize
                today!.</span
            >
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="handleOk"> OK </el-button>
                </span>
            </template>
        </el-dialog>
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
    <name-search-response></name-search-response>
</template>

<script>
import NameSearchResponse from '@/components/NameSearchResponse.vue'
import { getAll } from '@/api/peopleApi.js'
import { toRaw } from 'vue'
import { ElMessageBox } from 'element-plus'

export default {
    name: 'NameSearcher',
    components: {
        NameSearchResponse,
    },
    computed: {
        winners() {
            return this.$store.state.winners
        },
    },
    data() {
        return {
            form: {
                name: '',
            },
            luckyNames: [],
            todaysWinners: [],
            dialogSuccess: false,
            dialogUnsuccessful: false,
            dialogAlreadyWon: false,
            hasWon: '',
        }
    },
    methods: {
        handleSubmit() {
            let isLucky = this.luckyNames.some((el) => {
                return el.name == this.form.name
            })

            this.hasWon = JSON.parse(localStorage.getItem('winningName'))
            if (this.hasWon === this.form.name) {
                this.dialogAlreadyWon = true
                console.log('Go away')
            } else {
                if (isLucky) {
                    this.dialogSuccess = true
                    console.log(hasWon)
                } else {
                    this.dialogUnsuccessful = true
                    console.log(hasWon)
                }
            }
        },
        nameAlreadyWon() {
            this.hasWon = JSON.parse(localStorage.getItem('winningName'))
        },
        handleAccept() {
            this.$store.commit('addWinner', this.form.name)
            localStorage.setItem('winningName', JSON.stringify(this.form.name))
            this.form.name = ''
            this.dialogSuccess = false
        },
        handleReject() {
            this.dialogSuccess = false
        },
        handleOk() {
            this.form.name = ''
            this.dialogUnsuccessful = false
            this.dialogAlreadyWon = false
        },
        handleClose(done) {
            ElMessageBox.confirm('Are you sure to close this dialog?')
                .then(() => {
                    done()
                })
                .catch(() => {
                    // catch error
                })
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
