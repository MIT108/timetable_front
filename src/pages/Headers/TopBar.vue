<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="header-content">
              <div class="header-left">
                <div class="brand-logo">
                  <a class="mini-logo" href="index.html"
                    ><img src="images/logoi.png" alt="" width="40"
                  /></a>
                </div>
                <div class="search">
                  <form action="#">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Here..."
                      /><span class="input-group-text px-12"
                        ><i class="ri-search-line"></i
                      ></span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="header-right">
                <div class="dark-light-toggle">
                  <span class="dark"><i class="ri-moon-line"></i></span
                  ><span class="light"><i class="ri-sun-line"></i></span>
                </div>
                <div class="nav-item dropdown notification dropdown">
                  <div data-bs-toggle="dropdown">
                    <div class="notify-bell icon-menu">
                      <span><i class="ri-notification-2-line"></i></span>
                    </div>
                  </div>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    class="dropdown-menu notification-list dropdown-menu dropdown-menu-right"
                  >
                    <div class="lists">
                      <a class="d-block pt-10 pb-10 border-bottom" href="#">
                        <div class="d-flex align-items-center">
                          <span class="me-16 icon bg-success-lighten text-success"
                            ><i class="ri-check-line"></i
                          ></span>
                          <div>
                            <h6 class="mb-0 fs-14">Device confirmation completed</h6>
                            <span class="fs-13 text-muted"
                              >020-11-04
                              <!-- -->
                              <!-- -->12:00:23
                            </span>
                          </div>
                        </div> </a
                      ><a class="d-block pt-10 pb-10 border-bottom" href="#">
                        <div class="d-flex align-items-center">
                          <span class="me-16 icon bg-danger-lighten text-danger"
                            ><i class="ri-close-line"></i
                          ></span>
                          <div>
                            <h6 class="mb-0 fs-14">2FA verification failed</h6>
                            <span class="fs-13 text-muted"
                              >020-11-04
                              <!-- -->
                              <!-- -->12:00:23
                            </span>
                          </div>
                        </div> </a
                      ><a class="d-block pt-10 pb-10 border-bottom" href="#">
                        <div class="d-flex align-items-center">
                          <span class="me-16 icon bg-warning-lighten text-warning"
                            ><i class="ri-question-mark"></i
                          ></span>
                          <div>
                            <h6 class="mb-0 fs-14">Phone verification pending</h6>
                            <span class="fs-13 text-muted"
                              >020-11-04
                              <!-- -->
                              <!-- -->12:00:23
                            </span>
                          </div>
                        </div> </a
                      ><a class="d-block pt-10 pb-10 border-bottom" href="#">
                        <div class="d-flex align-items-center">
                          <span class="me-16 icon bg-warning-lighten text-warning"
                            ><i class="ri-question-mark"></i
                          ></span>
                          <div>
                            <h6 class="mb-0 fs-14">Phone verification pending</h6>
                            <span class="fs-13 text-muted"
                              >020-11-04
                              <!-- -->
                              <!-- -->12:00:23
                            </span>
                          </div>
                        </div> </a
                      ><a href="notification.html"
                        >See more<i class="ri-arrow-right-s-line"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="dropdown profile_log dropdown">
                  <div data-bs-toggle="dropdown">
                    <div class="user icon-menu active">
                      <span class="thumb"><img src="images/avatar/1.png" alt="" /></span>
                    </div>
                  </div>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    class="dropdown-menu dropdown-menu dropdown-menu-right"
                  >
                    <div class="user-email">
                      <div class="user">
                        <span class="thumb"
                          ><img src="images/avatar/1.png" alt=""
                        /></span>
                        <div>
                          <h5>Fiaz Abdullah</h5>
                          <span>codeefly@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <a
                      class="dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top undefined"
                      href="profile.html"
                    >
                      <span class="fs-18 text-primary me-10"
                        ><i class="ri-user-line"></i></span
                      >Profile
                    </a>
                    <a
                      class="dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top undefined"
                      href="settings-profile.html"
                    >
                      <span class="fs-18 text-primary me-10"
                        ><i class="ri-settings-3-line"></i></span
                      >Settings
                    </a>
                    <a
                      class="dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top undefined"
                      href="settings-activity.html"
                    >
                      <span class="fs-18 text-primary me-10"
                        ><i class="ri-time-line"></i></span
                      >Activity
                    </a>
                    <a
                      class="dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top undefined"
                      href="lock.html"
                    >
                      <span class="fs-18 text-primary me-10"
                        ><i class="ri-lock-line"></i></span
                      >Lock
                    </a>
                    <a
                      class="dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top text-danger"
                      v-on:click="onLogout()"
                    >
                      <span class="fs-18 text-primary me-10"
                        ><i class="ri-logout-circle-line"></i></span
                      >Logout
                    </a>
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
import { mapActions } from "vuex";
import { LOGOUT_ACTION } from "../../store/storeConstants";

export default {
  data() {
    return {
        error: ''
    };
  },
  methods: {
    ...mapActions("auth", {
      logout: LOGOUT_ACTION,
    }),
    onLogout() {
      this.logout()
        .catch(() => {
          alert(
            "an error occured  \n try again"
          )
        })
        .then((result) => {
          if (result == "logout") {
            this.$router.replace('/')
          }
        });
    },
  },
};
</script>
