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
                                <h3>Days</h3>
                                <p class="mb-2">
                                    Welcome to the days page create days and add periods to them
                                </p>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="breadcrumbs">
                                <a href="#">TimeTable </a>
                                <span>
                                    <i class="ri-arrow-right-s-line"></i>
                                </span>
                                <a href="#">Days</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div v-bind:class="type" v-if="message">
                        {{ message }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body courses-details">
                                        <h5>New Period</h5>
                                        <p>Here you can add a new period to the selected day</p>
                                        <div class="courses-action">
                                            <a class="btn btn-primary text-white" href="/NewPeriod">Add A New Period</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6" v-for="period in periods" :key="period.id">
                                <div class="card">
                                    <div class="card-body courses-details">
                                        <h5>{{ period.name }}</h5>

                                        <p>{{ period.description }}</p>
                                        <div class="courses-action">
                                            <button class="btn btn-primary text-white" v-on:click="
                            onUpdatePeriod(period.id, period.name, period.description)
                          ">
                                                Edit
                                            </button>
                                            <button type="button" class="text-light btn btn-danger" v-on:click="onDeletePeriod(period.id)" data-bs-toggle="modal" data-bs-target="#courseAnalytic">
                                                remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="right-sidebar">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card transparent">
                                        <div class="card-header">
                                            <h4 class="card-title">Days</h4>
                                            <a class="d-flex align-items-center" href="/NewDay">Create a new Day
                                                <i class="ri-arrow-right-line ms-10"></i>
                                            </a>
                                        </div>
                                        <div class="card-header">
                                            <span v-bind:class="{ 'text-primary': listAllDaysActive }" v-on:click="listAllDays()" style="cursor: pointer">All</span>
                                            <span v-bind:class="{ 'text-primary': listAllActiveDaysActive }" v-on:click="listAllActiveDays()" style="cursor: pointer">Active</span>
                                            <span v-bind:class="{ 'text-primary': listAllInActiveDaysActive }" v-on:click="listAllInActiveDays()" style="cursor: pointer">Inactive</span>
                                        </div>
                                        <div class="card-body">
                                            <div class="g-discussion-inner row" v-for="day in days" :key="day.id" v-on:click="onDayClick(day.id)">
                                                <div class="col-md-6 col-xl-12 cursor-pointer" style="cursor: pointer">
                                                    <div class="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm">
                                                        <div class="flex-grow-1">
                                                            <h6 class="mb-1">{{ day.name }}</h6>
                                                            <p class="mb-0">{{ day.description }}</p>
                                                        </div>
                                                        <span class="text-primary" v-on:click="changeStatus(day.id)">
                                                            <span v-if="day.status == 1"> Active </span>
                                                            <span v-else> In Active </span>
                                                        </span>
                                                        <span class="text-primary"> </span>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <span class="text-primary" v-on:click="
                                  onUpdateDay(day.id, day.name, day.description)
                                ">Edit</span>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <span class="text-danger" v-on:click="deleteChosenDay(day.id)">Delete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    DISPLAY_ALL_DAYS,
    CHANGE_DAY_STATUS,
    DELETE_DAY,
    GET_CURRENT_DAY,
    SET_CURRENT_DAY,
    GET_PERIOD_OF_DAY,
    DELETE_PERIOD,
} from "../../../store/TimetableConstants";
import {
    mapActions,
    mapGetters,
    mapMutations
} from "vuex";
import router from "../../../router";
export default {
    watch: {

        message() {
            setTimeout(function () {
                this.deleteMessage()
            }, 5000)
        },
    },
    methods: {
        deleteMessage(){
            this.message = ""
        },
        ...mapActions("Day", {
            displayDay: DISPLAY_ALL_DAYS,
            changeDayStatus: CHANGE_DAY_STATUS,
            deleteDay: DELETE_DAY,
            getDayPeriod: GET_PERIOD_OF_DAY,
        }),
        ...mapActions("Period", {
            deletePeriod: DELETE_PERIOD,
        }),
        ...mapMutations("Day", {
            setDay: SET_CURRENT_DAY,
        }),
        listAllInActiveDays() {
            this.url = "/list/0";
            this.listAllDaysActive = false;
            this.listAllInActiveDaysActive = true;
            this.listAllActiveDaysActive = false;
            this.getDays(this.url);
        },
        listAllActiveDays() {
            this.url = "/list/1";
            this.listAllDaysActive = false;
            this.listAllInActiveDaysActive = false;
            this.listAllActiveDaysActive = true;
            this.getDays(this.url);
        },
        listAllDays() {
            this.url = "/list";
            this.listAllDaysActive = true;
            this.listAllInActiveDaysActive = false;
            this.listAllActiveDaysActive = false;
            this.getDays(this.url);
        },
        getDays(url) {
            this.displayDay({
                url: url,
            }).then((response) => {
                this.days = response.data.days;
            });
        },
        changeStatus(id) {
            this.changeDayStatus({
                    id: id,
                })
                .catch((error) => {
                    this.type = "alert alert-danger col-12 mb-16";
                    this.message = error.message;
                })
                .then((response) => {
                    this.type = "alert alert-success col-12 mb-16";
                    this.message = response.data.success;
                    this.listAllDays();
                });
        },
        deleteChosenDay(id) {
            this.deleteDay({
                    id: id,
                })
                .catch((error) => {
                    this.type = "alert alert-danger col-12 mb-16";
                    this.message = error.message;
                })
                .then((response) => {
                    this.type = "alert alert-success col-12 mb-16";
                    this.message = response.data.success;
                    this.listAllDays();
                });
        },
        onDayClick(id) {
            this.setDay({
                dayId: id,
            });

            let data = {
                dayId: this.getDay,
            };
            localStorage.setItem("timetableCurrentDay", JSON.stringify(data));
            this.getDayPeriod({
                    dayId: this.getDay,
                })
                .catch((error) => {
                    this.type = "alert alert-danger col-12 mb-16";
                    this.message = error.message;
                })
                .then((response) => {
                    this.periods = response.data.periods;
                });
        },
        onUpdateDay(id, name, description) {
            router.push("/NewDay?id=" + id + "&name=" + name + "&description=" + description);
        },
        onUpdatePeriod(id, name, description) {
            router.push(
                "/NewPeriod?id=" + id + "&name=" + name + "&description=" + description
            );
        },
        onDeletePeriod(id) {
            this.deletePeriod({
                    id: id,
                })
                .catch((error) => {
                    this.type = "alert alert-danger col-12 mb-16";
                    this.message = error.message;
                })
                .then((response) => {
                    this.type = "alert alert-success col-12 mb-16";
                    this.message = response.data.message;
                    this.onDayClick(this.getDay);
                });
        },
    },
    data() {
        return {
            message: "",
            type: "",
            listAllDaysActive: true,
            listAllInActiveDaysActive: false,
            listAllActiveDaysActive: false,
            url: "",
            days: [],
            periods: [],
        };
    },
    created() {
        this.listAllDays();
        if (this.getDay != null && this.getDay != "") {
            this.onDayClick(this.getDay);
        }
    },
    components: {
        TopBar,
        Sidebar,
    },
    computed: {
        ...mapGetters("Day", {
            getDay: GET_CURRENT_DAY,
        }),
    },
};
</script>
