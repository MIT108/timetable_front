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
                                <h3>Create Course</h3>
                                <p class="mb-2">Welcome to TimetableApp Create Course page</p>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="breadcrumbs">
                                <a href="#">TimeTable </a>
                                <span>
                                    <i class="ri-arrow-right-s-line"></i>
                                </span>
                                <a href="/Courses">Courses</a>
                                <span>
                                    <i class="ri-arrow-right-s-line"></i>
                                </span>
                                <a href="#">Create Course</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="cc-card">
                            <div class="cc-card-title d-flex justify-content-between align-items-center">
                                <h5>Create Course</h5>
                                <a href="javascript:history.back()">Go Back</a>
                            </div>
                            <hr>
                            <div class="cc-card-body">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-xl-12 mb-15">
                                            <label class="form-label">Course Name</label>
                                            <input name="groupName" type="text" class="form-control" value=""></div>

                                        <div class="col-xl-12 mb-15">
                                            <label class="form-label">Course Description</label>
                                            <input name="groupDesc" type="text" class="form-control" value=""></div>

                                        <div class="col-xl-12 mb-15">
                                            <label class="form-label">Select Teacher</label>
                                            <select name="groupCourseSelect" class="form-control">
                                                <option>Select a teacher</option>
                                                <option value="1">Web Design</option>
                                                <option value="2">App UX/UI Design</option>
                                                <option value="3">Web Programming</option>
                                            </select>
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
export default {
    components: {
        TopBar,
        Sidebar,
    },
};
</script>
