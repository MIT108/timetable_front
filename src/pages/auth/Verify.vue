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
                                        Click on the button bellow to verify your account
                                    </h4>
                                </div>
                                <div class="mt-16 alert alert-danger" v-if="error">
                                {{ error }}
                                </div>
                                <div class="mt-16 alert alert-success" v-if="success">
                                {{ success }}
                                </div>
                                <div class="mt-16">
                                    <button v-on:click="isVerified()" class="btn btn-primary w-100">
                                        Send Verification link
                                    </button>
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
    IS_USER_VERIFIED_ACTION
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
            verify: IS_USER_VERIFIED_ACTION,
        }),
        isVerified() {
            this.error = ''
            this.success = ''
            let status = this.verify().catch((error) => {
                this.error = error.message
                return false
            });

            if (status) {    
                this.success = "Email is send success"
            }
        },
    },
};
</script>
