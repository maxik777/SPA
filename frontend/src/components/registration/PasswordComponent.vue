<template>
    <form-group class="block text-grey-darker text-sm font-bold" :validator="v" label="Password">
        <input type="password" class="appearance-none border bg-yellow-100 rounded w-full py-2 px-3 text-grey-darker" v-model="password" placeholder="Your secure password" @input="v.$touch()">
    </form-group>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ""
            },
            v: {
                type: Object,
                required: true
            }
        },
        computed: {
            password: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit("input", value);
                }
            }
        }
    };
</script>