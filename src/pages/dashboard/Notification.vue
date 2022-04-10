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
                            <h3>Notification</h3>
                            <p class="mb-2">Welcome to Edunet Notification page</p>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="breadcrumbs"><a href="#">Home </a><span><i
                                    class="ri-arrow-right-s-line"></i></span><a href="#">Notification</a></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">All Notification </h4>
                        </div>
                        <div class="card-body">
                            <div class="recent-notification">
                                <div class="lists"><a class="d-block pt-10 pb-10 border-bottom" href="#">
                                        <div class="d-flex align-items-center"><span
                                                class="me-16 icon  bg-success-lighten text-success"><i
                                                    class="ri-check-line"></i></span>
                                            <div>
                                                <h6 class="mb-0 fs-14">Device confirmation completed</h6><span
                                                    class="fs-13 text-muted">020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a><a class="d-block pt-10 pb-10 border-bottom" href="#">
                                        <div class="d-flex align-items-center"><span
                                                class="me-16 icon  bg-danger-lighten text-danger"><i
                                                    class="ri-close-line"></i></span>
                                            <div>
                                                <h6 class="mb-0 fs-14">2FA verification failed</h6><span
                                                    class="fs-13 text-muted">020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a><a class="d-block pt-10 pb-10 border-bottom" href="#">
                                        <div class="d-flex align-items-center"><span
                                                class="me-16 icon  bg-warning-lighten text-warning"><i
                                                    class="ri-question-mark"></i></span>
                                            <div>
                                                <h6 class="mb-0 fs-14">Phone verification pending</h6><span
                                                    class="fs-13 text-muted">020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a><a class="d-block pt-10 pb-10 border-bottom" href="#">
                                        <div class="d-flex align-items-center"><span
                                                class="me-16 icon  bg-warning-lighten text-warning"><i
                                                    class="ri-question-mark"></i></span>
                                            <div>
                                                <h6 class="mb-0 fs-14">Phone verification pending</h6><span
                                                    class="fs-13 text-muted">020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a></div>
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
        Sidebar
    }
    
}
</script>
