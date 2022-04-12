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
                                <h3>Courses</h3>
                                <p class="mb-2">Welcome to the Courses page create Courses and add periods to them</p>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="breadcrumbs">
                                <a href="#">TimeTable </a>
                                <span>
                                    <i class="ri-arrow-right-s-line"></i>
                                </span>
                                <a href="#">Courses</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body courses-details">
                                        <h5>New Course</h5>
                                        <p>Here you can add a new Course to the selected day</p>
                                        <div class="courses-action">
                                            <a class="btn btn-primary text-white" href="/NewCourse">Add A New Course</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body courses-details">
                                        <h5>Amazon Web Services Certification</h5>

                                        <p>Videos, labs &amp; practice exams - AWS Certified (Solutions Architect, Developer, SysOps Administrator, Cloud Practitioner)</p>
                                        <div class="courses-action">
                                            <button class="btn btn-primary text-white" href="upload.html">Edit</button>
                                            <button type="button" class="text-light btn btn-danger" data-bs-toggle="modal" data-bs-target="#courseAnalytic">
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
                                            <h4 class="card-title">Classes</h4>
                                            <a class="d-flex align-items-center" href="/NewClass">Create a new class
                                                <i class="ri-arrow-right-line ms-10"></i>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div class="g-discussion-inner row">
                                                <div class="col-md-6 col-xl-12 cursor-pointer" style="cursor:pointer;">
                                                    <div class="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm">
                                                        <div class="flex-grow-1">
                                                            <h6 class="mb-1">HTML5</h6>
                                                            <p class="mb-0">Design</p>
                                                        </div>
                                                        <h5 class="text-primary">Edit</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="card transparent">
                                        <div class="card-header">
                                            <h4 class="card-title">Courses</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="g-discussion-inner row">
                                                <div class="col-lg-6 col-xl-12">
                                                    <div class="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm">
                                                        <div class="flex-grow-1">
                                                            <h5 class="mb-5 me-10 fs-16">The Advanced Web Developer Bootcamp</h5>
                                                            <p class="mb-0 fs-14">Development</p>
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
