<template>
    <div>
        <TopBar />
        <Sidebar />
        

        
    <div class="content-body">
        <div class="container">
            <div class="page-title">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <div class="page-title-content">
                            <h3>Dashboard</h3>
                            <p class="mb-2">Welcome to Edunet Dashboard</p>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="breadcrumbs"><a href="#">Home
                                <!-- -->
                            </a><span><i class="ri-arrow-right-s-line"></i></span><a href="#">Dashboard</a></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    <div class="color-widget stat-widget p-20 mb-160 mb-30">
                        <div class="d-flex align-items-center mb-20"><span class="icon"><i
                                    class="ri-team-line text-primary bg-primary-lighten fs-30 py-12 px-12 rounded me-20"></i></span>
                            <div>
                                <p class="mb-0"><strong>Total Students</strong></p>
                                <h3 class="mb-0">5220</h3>
                            </div>
                        </div>
                        <p class="mb-7"><strong>Free:
                                <!-- -->4240 students
                            </strong></p>
                        <p><strong>Paid:
                                <!-- -->980 Students
                            </strong></p>
                        <div class="progress">
                            <div class="progress-bar bg-primary" style="width:75%" role="progressbar" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="undefined stat-widget p-20 mb-160 mb-30">
                        <div class="d-flex align-items-center mb-20"><span class="icon"><i
                                    class="ri-add-circle-line text-warning bg-warning-lighten fs-30 py-12 px-12 rounded me-20"></i></span>
                            <div>
                                <p class="mb-0"><strong>New Students</strong></p>
                                <h3 class="mb-0">1032</h3>
                            </div>
                        </div>
                        <p class="mb-7"><strong>Free:
                                <!-- -->909 students
                            </strong></p>
                        <p><strong>Paid:
                                <!-- -->123 students
                            </strong></p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" style="width:80%" role="progressbar" aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="undefined stat-widget p-20 mb-160 mb-30">
                        <div class="d-flex align-items-center mb-20"><span class="icon"><i
                                    class="ri-stack-line text-danger bg-danger-lighten fs-30 py-12 px-12 rounded me-20"></i></span>
                            <div>
                                <p class="mb-0"><strong>Total Courses</strong></p>
                                <h3 class="mb-0">109</h3>
                            </div>
                        </div>
                        <p class="mb-7"><strong>Free:
                                <!-- -->83 courses
                            </strong></p>
                        <p><strong>Paid:
                                <!-- -->26 courses
                            </strong></p>
                        <div class="progress">
                            <div class="progress-bar bg-danger" style="width:65%" role="progressbar" aria-valuenow="65"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xxl-7">
                    <div id="user-activity" class="card" data-aos="fade-up">
                        <div class="card-header">
                            <h4 class="card-title">Earning</h4>
                        </div>
                        <div class="card-body">
                            <canvas id="EarningGraph"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xxl-5">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Recent Notification
                                <!-- -->
                            </h4><a href="/Notification" class="btn btn-primary">View All</a>
                        </div>
                        <div class="card-body">
                            <div class="recent-notification" style="height:275px; position: relative;">
                                <div class="notification-list pe-10">
                                    <a href="#">
                                        <div
                                            class="d-flex align-items-center justify-content-start  pt-10 pb-10 border-bottom">
                                            <span class="me-16 icon  bg-danger-lighten text-danger"><i
                                                    class="ri-close-line"></i></span>
                                            <div class="flex-grow-1 flex-fill">
                                                <h6 class="mb-5 fs-14">2FA verification failed</h6><span
                                                    class="fs-13 text-muted">020-11-04
                                                    <!-- -->
                                                    <!-- -->12:00:23
                                                </span>
                                            </div>
                                            <div class="duration">3 min ago</div>
                                        </div>
                                    </a><a href="#">
                                        <div
                                            class="d-flex align-items-center justify-content-start  pt-10 pb-10 border-bottom">
                                            <span class="me-16 icon  bg-warning-lighten text-warning"><i
                                                    class="ri-question-mark"></i></span>
                                            <div class="flex-grow-1 flex-fill">
                                                <h6 class="mb-5 fs-14">Phone verification pending</h6><span
                                                    class="fs-13 text-muted">020-11-04
                                                    <!-- -->
                                                    <!-- -->12:00:23
                                                </span>
                                            </div>
                                            <div class="duration">3 min ago</div>
                                        </div>
                                    </a><a href="#">
                                        <div
                                            class="d-flex align-items-center justify-content-start  pt-10 pb-10 border-bottom">
                                            <span class="me-16 icon  bg-danger-lighten text-danger"><i
                                                    class="ri-close-line"></i></span>
                                            <div class="flex-grow-1 flex-fill">
                                                <h6 class="mb-5 fs-14">Dadeline over to launch the new course</h6>
                                                <span class="fs-13 text-muted">020-11-04
                                                    <!-- -->
                                                    <!-- -->12:00:23
                                                </span>
                                            </div>
                                            <div class="duration">3 min ago</div>
                                        </div>
                                    </a><a href="#">
                                        <div
                                            class="d-flex align-items-center justify-content-start  pt-10 pb-10 border-bottom">
                                            <span class="me-16 icon  bg-success-lighten text-success"><i
                                                    class="ri-check-line"></i></span>
                                            <div class="flex-grow-1 flex-fill">
                                                <h6 class="mb-5 fs-14">Device confirmation completed</h6><span
                                                    class="fs-13 text-muted">020-11-04
                                                    <!-- -->
                                                    <!-- -->12:00:23
                                                </span>
                                            </div>
                                            <div class="duration">3 min ago</div>
                                        </div>
                                    </a><a href="#">
                                        <div
                                            class="d-flex align-items-center justify-content-start  pt-10 pb-10 border-bottom">
                                            <span class="me-16 icon  bg-warning-lighten text-warning"><i
                                                    class="ri-question-mark"></i></span>
                                            <div class="flex-grow-1 flex-fill">
                                                <h6 class="mb-5 fs-14">New user verification is pending</h6><span
                                                    class="fs-13 text-muted">020-11-04
                                                    <!-- -->
                                                    <!-- -->12:00:23
                                                </span>
                                            </div>
                                            <div class="duration">3 min ago</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-4 ">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Total Sales</h4>
                        </div>
                        <div class="card-body">
                            <canvas id="TotalSales"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-8 ">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">Classes</h5>
                        </div>
                        <div class="card-body">
                            <div class="students-queries" style="height:305px; position: relative;">
                                <div class="scrollbar-container ps">
                                    <div class="student-query-inner d-flex justify-content-between align-items-start">
                                        <div class="student-query-details flex-basis-50 flex-grow-1 me-20">
                                            <h6 class="mb-5">Machine Learning Bootcamp</h6>
                                            <p>By
                                                <!-- -->Brandon Taylor
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap justify-content-end mb-3"><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-primary-lighten"
                                                href="#"><i class="ri-check-line fs-18 text-primary"></i></a><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-danger-lighten"
                                                href="#"><i class="ri-close-line fs-18 text-danger"></i></a></div>
                                    </div>
                                    <div class="student-query-inner d-flex justify-content-between align-items-start">
                                        <div class="student-query-details flex-basis-50 flex-grow-1 me-20">
                                            <h6 class="mb-5">Python Bootcamp from Zero to Hero</h6>
                                            <p>By
                                                <!-- -->Stweart Mark
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap justify-content-end mb-3"><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-primary-lighten"
                                                href="#"><i class="ri-check-line fs-18 text-primary"></i></a><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-danger-lighten"
                                                href="#"><i class="ri-close-line fs-18 text-danger"></i></a></div>
                                    </div>
                                    <div class="student-query-inner d-flex justify-content-between align-items-start">
                                        <div class="student-query-details flex-basis-50 flex-grow-1 me-20">
                                            <h6 class="mb-5">Amazon Web Services Certification</h6>
                                            <p>By
                                                <!-- -->Jhon Cane
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap justify-content-end mb-3"><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-primary-lighten"
                                                href="#"><i class="ri-check-line fs-18 text-primary"></i></a><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-danger-lighten"
                                                href="#"><i class="ri-close-line fs-18 text-danger"></i></a></div>
                                    </div>
                                    <div class="student-query-inner d-flex justify-content-between align-items-start">
                                        <div class="student-query-details flex-basis-50 flex-grow-1 me-20">
                                            <h6 class="mb-5">The Web Developer Bootcamp 2021</h6>
                                            <p>By
                                                <!-- -->Nicky Bonje
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap justify-content-end mb-3"><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-primary-lighten"
                                                href="#"><i class="ri-check-line fs-18 text-primary"></i></a><a
                                                class="icon mx-16 my-16 py-8 px-8 rounded-circle bg-danger-lighten"
                                                href="#"><i class="ri-close-line fs-18 text-danger"></i></a></div>
                                    </div>
                                    <div class="ps__rail-x" style="left: 0px; top: 0px;">
                                        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                    </div>
                                    <div class="ps__rail-y" style="top: 0px; left: 0px;">
                                        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
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
import TopBar from "../Headers/TopBar"
import Sidebar from "../Headers/SideBar"
export default {
    components: {
        TopBar,
        Sidebar,
    }
    
}
</script>