<template>
<div>
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-4 col-md-5">
                    <div class="mini-logo text-center my-12">
                        <a href="index.html"><img src="images/logo.png" alt="" /></a>
                    </div>
                    <div class="card">
                        <center>
                            <div class="card-body">

                                <div class="card-header justify-content-center">
                                    <h4 class="card-title">
                                        Verifying your account
                                    </h4>
                                </div>
                                <div class="mt-16 alert alert-danger" v-if="error">
                                {{ error }}
                                </div>
                                <div class="mt-16 alert alert-success" v-if="success">
                                {{ success }}
                                </div>
                            </div>
                            <div class="new-account mt-16">
                                <p>Go back to <a class="text-primary ms-5" href="/">Login</a></p>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import {
    VERIFYING_USER_ACTION
} from "../../store/storeConstants";
export default {
    data() {
        return {
            error: '',
            success: ''
        };
    },
    methods: {
        ...mapActions("auth", {
            verify: VERIFYING_USER_ACTION,
        })
    },
    created() {
        this.error =''
        this.verify({url: this.$route.query.data}).catch((error) => {
            this.error = error.message
        })
        if (this.error != '') {
                this.$router.replace('/dashboard')  
        }
    },
};
</script>
