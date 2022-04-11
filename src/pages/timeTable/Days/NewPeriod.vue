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
                                <h3>{{ periodType }} Period</h3>
                                <p class="mb-2">Welcome to TimetableApp {{ periodType }} Period page</p>
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
                                <a href="#">{{ periodType }} Period</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="cc-card">
                            <div class="cc-card-title d-flex justify-content-between align-items-center">
                                <h5>{{ periodType }} period</h5>
                                <a href="javascript:history.back()">Go Back</a>
                            </div>
                            <hr />
                            <div class="cc-card-body">
                                <form @submit.prevent="onCreatePeriod" method="post">
                                    <div class="row">
                                        <div class="col-xl-12 mb-15">
                                            <div v-bind:class="type" v-if="message">
                                                {{ message }}
                                            </div>
                                            <label class="form-label">Period Name</label>
                                            <input v-model.trim="name" type="text" class="form-control" />

                                            <div class="" style="color: red" v-if="errors.name">
                                                {{ errors.name }}
                                            </div>
                                        </div>

                                        <div class="col-xl-12 mb-15">
                                            <label class="form-label">Period Description</label>
                                            <input v-model="description" type="text" class="form-control" />

                                            <div class="" style="color: red" v-if="errors.description">
                                                {{ errors.description }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-16">
                                        <button type="submit" class="btn btn-primary mr-2">{{ periodType }}</button>
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
    mapActions,
    mapGetters
} from "vuex";
import {
    CREATE_NEW_PERIOD,
    GET_CURRENT_DAY,
    UPDATE_PERIOD,
} from "../../../store/TimetableConstants";
export default {
    created() {
        if (
            this.$route.query.id &&
            this.$route.query.name &&
            this.$route.query.description
        ) {
            this.name = this.$route.query.name;
            this.id = this.$route.query.id;
            this.description = this.$route.query.description;
            this.periodType = "update";
        }
    },
    computed: {
        ...mapGetters("Day", {
            getDay: GET_CURRENT_DAY,
        }),
    },
    data() {
        return {
            name: "",
            description: "",
            errors: [],
            message: "",
            id: "",
            periodType: "create",
        };
    },
    methods: {
        ...mapActions("Period", {
            createPeriod: CREATE_NEW_PERIOD,
            updatePeriod: UPDATE_PERIOD,
        }),
        onCreatePeriod() {
            this.message = "";

            if (this.name.length < 1) {
                this.errors["name"] = "the name field is required";
            } else {
                this.errors["name"] = "";
            }
            if (this.description.length < 1) {
                this.errors["description"] = "the description field is required";
            } else {
                this.errors["description"] = "";
            }

            if (this.description.length > 0 && this.name.length > 0) {
                if (this.periodType == "create") {
                    this.createPeriod({
                            name: this.name,
                            description: this.description,
                            day_id: this.getDay,
                        })
                        .catch(error => {
                            this.type = "alert alert-danger col-12 mb-16";
                            this.message = error.message;
                        })
                        .then(response => {
                            if (response.data.error !== undefined) {
                                this.type = "alert alert-danger col-12 mb-16";
                                this.message = response.data.error;
                            }
                            if (response.data.success !== undefined) {
                                this.type = "alert alert-success col-12 mb-16";
                                this.message = response.data.success;
                                this.name = "";
                                this.description = "";
                            }
                        });
                } else {

                    this.updatePeriod({
                            name: this.name,
                            description: this.description,
                            id: this.id
                        })
                        .catch((error) => {
                            this.type = "alert alert-danger col-12 mb-16";
                            this.message = error.message;
                        })
                        .then((response) => {
                            if (response.data.error !== undefined) {
                                this.type = "alert alert-danger col-12 mb-16";
                                this.message = response.data.error;
                            }
                            if (response.data.message !== undefined) {
                                this.type = "alert alert-success col-12 mb-16";
                                this.message = response.data.message;
                            }
                        });
                }
            }
        },
    },
    components: {
        TopBar,
        Sidebar,
    },
};
</script>
