<template>
    <div>
        <div class="authincation section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="mini-logo text-center mb-35">
                            <a href="index.html">
                                <img
                                    src="images/logo.png"
                                    alt=""
                                ></a>
                        </div>
                        <div class="card">
                            <div class="card-header justify-content-center">
                                <h4 class="card-title">Sign in MIT</h4>
                            </div>
                            <div class="card-body">
                                <form
                                    action="post"
                                    @submit.prevent="onLogin()"
                                >
                                    <div class="row">
                                        <div
                                            class="alert alert-danger col-12 mb-16"
                                            v-if="error"
                                        >{{ error }}</div>
                                    <div class="col-12 mb-16">
                                        <label class="form-label">Email</label>
                                        <input
                                            name="email"
                                            type="text"
                                            class="form-control"
                                            v-model.trim="email"
                                        /></div>
                                    <div
                                        class=""
                                        style="color: red"
                                        v-if="errors.email"
                                    >{{ errors.email }}</div>
                            <div class="col-12 mb-16">
                                <label class="form-label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    class="form-control"
                                    v-model.trim="password"
                                /></div>
                            <div
                                class=""
                                style="color: red"
                                v-if="errors.password"
                            >{{ errors.password }}</div>
                        <div class="col-6">
                            <div class="form-check">
                                <input
                                    name="acceptTerms"
                                    type="checkbox"
                                    class="form-check-input "
                                    value=""
                                >
                                    <label class="form-check-label">Remember me</label>
                            </div>
                        </div>
                        <div class="col-6 text-end">
                            <a href="reset.html">Forgot Password?</a>
                        </div>
                    </div>
                    <div class="mt-16 d-grid gap-2">
                        <button
                            type="submit"
                            class="btn btn-primary mr-2"
                        >Sign In
                            </button>
                    </div>
                    </form>
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
import LoginValidation from "../../services/auth/LoginValidation";
import { LOGIN_ACTION } from "../../store/storeConstants";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },

  methods: {
    ...mapActions("auth", {
      login: LOGIN_ACTION,
    }),
    onLogin() {
      //Check validation
      this.error = "";

      let validation = new LoginValidation(this.email, this.password);

      this.errors = validation.checkValidation();

      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }

      this.login({ email: this.email, password: this.password })
        .catch(error => {
          this.error = error.message;
          return false;
        })
        .then(response => {
          if (response == "verified") {
            this.$router.replace("/dashboard");
          } else if (response == "unverified") {
            this.$router.replace("/Verify");
          }
        });
    },
  },
};
</script>
