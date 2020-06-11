<template>
    <div class="font-sans antialiased bg-grey-lightest">
        <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
            <div class="container mx-auto py-8">
                <div class="summary text-red" v-if="$v.form.$error"></div>
                <form @submit.prevent="submit" novalidate class="w-5/6 lg:w-1/2 mx-auto bg-yellow-300 rounded shadow">
                    <div class="py-4 px-8 text-black text-xl font-bold border-b border-grey-lighter">Sign In</div>
                    <div class="py-4 px-8">
                        <div class="mb-4">
                            <email-component v-model="form.email" :v="$v.form.email" />
                        </div>
                        <div class="mb-4">
                            <password-component v-model="form.password" :v="$v.form.password" />
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
                <p class="text-center my-4">
                    <router-link to="/" class="text-blue-500 font-bold text-sm no-underline hover:text-blue-700">Back to Registration</router-link>
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

    import EmailComponent from "./EmailComponent.vue";
    import PasswordComponent from "./PasswordComponent.vue";
    import {required, email, minLength} from "vuelidate/lib/validators";

    export default {
        name: 'SignIn Component',

        components: { EmailComponent, PasswordComponent},

        data() {
            return {
                form: {
                    email: "",
                    password: "",
                }
            };
        },

        validations: {
            form: {
                email: { required, email },
                password: {
                    required,
                    minLength: minLength(6)
                },
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