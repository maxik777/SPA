<template>
  <div class="font-sans antialiased bg-grey-lightest">
    <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
      <div class="container mx-auto py-8">
        <div class="summary text-red" v-if="$v.form.$error"></div>
        <form @submit.prevent="submit" novalidate class="w-5/6 lg:w-1/2 mx-auto bg-yellow-300 rounded shadow">
          <div class="py-4 px-8 text-black text-xl font-bold border-b border-grey-lighter">Register form</div>
          <div class="py-4 px-8">
            <div class="flex mb-4">
              <div class="w-1/2 mr-1">
                <first-name-component v-model="form.name" :v="$v.form.name" />
              </div>
              <div class="w-1/2 ml-1">
                <last-name-component v-model="form.lastname" :v="$v.form.lastname" />
              </div>
            </div>
            <div class="mb-4">
              <email-component v-model="form.email" :v="$v.form.email" />
            </div>
            <div class="mb-4">
              <password-component v-model="form.password" :v="$v.form.password" />
              <p class="text-grey text-xs mt-1">At least 6 characters</p>
            </div>
            <div class="mb-4">
              <repeat-component v-model="form.repeatPassword" :v="$v.form.repeatPassword" />
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Create New Account
            </button>
          </div>
        </form>
        <p class="text-center my-4">
          <router-link to="/sign" class="text-blue-500 font-bold text-sm no-underline hover:text-blue-700">I already have an account</router-link>
        </p>
      </div>
    </div>
    <!-- Footer -->
    <footer class="w-full bg-grey-lighter py-8">
      <div class="container mx-auto text-center px-8">
        <p class="text-grey-dark mb-2 text-sm"><span class="font-bold">&copy; Golden-Team {{ new Date().getFullYear() }}</span></p>
      </div>
    </footer>
  </div>
</template>
<script>

  import FirstNameComponent from "./FirstNameComponent.vue";
  import LastNameComponent from "./LastNameComponent.vue";
  import EmailComponent from "./EmailComponent.vue";
  import PasswordComponent from "./PasswordComponent.vue";
  import RepeatComponent from "./RepeatComponent.vue";
  import {required, email, minLength, sameAs} from "vuelidate/lib/validators";
  // import { isNameJoe} from "@/validators";

export default {
  name: 'FormComponent',

  components: { FirstNameComponent, LastNameComponent, EmailComponent, PasswordComponent, RepeatComponent},

  data() {
    return {
      form: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
      }
    };
  },

  validations: {
    form: {
      name: { required,},
      lastname: { required,},
      email: { required, email },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },

  methods: {
    submit() {
      console.log("submitted");
      this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return;
      // to form submit after this
      alert("Form submitted");
    }
  }
}
</script>

<style>
  .is-invalid-label {
    color: red;
  }
  .form-error{
    color: red;
  }
</style>