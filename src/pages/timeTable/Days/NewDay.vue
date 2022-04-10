<template>
<div>
    <TopBar />
    <Sidebar />

    <div>

        <div class="content-body">
            <div class="container">
                <div class="page-title">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md-6">
                            <div class="page-title-content">
                                <h3>Create Day</h3>
                                <p class="mb-2">Welcome to TimetableApp Create Day page</p>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="breadcrumbs">
                                <a href="#">TimeTable </a>
                                <span>
                                    <i class="ri-arrow-right-s-line"></i>
                                </span>
                                <a href="/Days">Days</a>
                                <span>
                                    <i class="ri-arrow-right-s-line"></i>
                                </span>
                                <a href="#">Create Day</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="cc-card">
                            <div class="cc-card-title d-flex justify-content-between align-items-center">
                                <h5>Create Day</h5>
                                <a href="javascript:history.back()">Go Back</a>
                            </div>
                            <hr>
                            <div class="cc-card-body">
                                <form @submit.prevent="onCreateDay" method="post">
                                    <div class="row">
                                        <div class="col-xl-12 mb-15">
                                            <div v-bind:class=type v-if="message">
                                                {{ message }}
                                            </div>

                                            <label class="form-label">Day Name</label>
                                            <input v-model.trim="name" type="text" class="form-control">

                                            <div class="" style="color: red" v-if="errors.name">
                                                {{ errors.name }}
                                            </div>
                                        </div>

                                        <div class="col-xl-12 mb-15">
                                            <label class="form-label">Day Description</label>
                                            <input v-model="description" type="text" class="form-control">

                                            <div class="" style="color: red" v-if="errors.description">
                                                {{ errors.description }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-16">
                                        <button type="submit" class="btn btn-primary mr-2">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import TopBar from "../../Headers/TopBar";
import Sidebar from "../../Headers/SideBar";
import {
    mapActions
} from "vuex";
import {
    CREATE_NEW_DAY
} from "../../../store/TimetableConstants"
export default {
    methods: {
        ...mapActions("Day", {
            createDay: CREATE_NEW_DAY
        }),
        onCreateDay() {
            this.message = "";

            if (this.name.length < 1) {
                this.errors["name"] = "the name field is required";
            } else {
                this.errors["name"] = ""
            }
            if (this.description.length < 1) {
                this.errors["description"] = "the description field is required";
            } else {
                this.errors["description"] = ""
            }

            if (this.description.length > 0 && this.name.length > 0) {
                this.createDay({
                        name: this.name,
                        description: this.description
                    })
                    .catch(error => {
                            this.type = "alert alert-danger col-12 mb-16"
                        this.message = error;
                    })
                    .then(response => {
                        if (response.data.error !== undefined) {
                            this.type = "alert alert-danger col-12 mb-16"
                            this.message = response.data.error
                        }
                        if (response.data.success !== undefined) {
                            this.type = "alert alert-success col-12 mb-16"
                            this.message = response.data.success
                            this.name = ""
                            this.description = ""
                        }
                    })
            }
        },
    },
    data() {
        return {
            name: "",
            description: "",
            errors: [],
            message: '',
            type: ""
        };
    },
    components: {
        TopBar,
        Sidebar,
    },
};
</script>
