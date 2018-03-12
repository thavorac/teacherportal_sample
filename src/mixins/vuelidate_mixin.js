export const VuelidateMixins = {
    methods: {
        get_error_message (default_message, vuelidate) {
            if(default_message !== "" && default_message !== null) {
                return default_message
            } else if(vuelidate.$error) {
                for (var key in vuelidate) {
                    if(!vuelidate[key]) {
                        if(key === "minLength") {
                            return "This field require at least "+vuelidate.$params[key].min+" characters"
                        } else if (key === "required") {
                            return "This field is required"
                        } else if (key === "email") {
                            return "This email address is not valid"
                        }
                    }
                }
            } else {
                return null
            }
        }
    }
}