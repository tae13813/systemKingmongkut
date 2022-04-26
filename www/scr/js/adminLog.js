Vue.createApp({
    data() {
        return {
            form: {
                id: "",
                password: ""
            }
        }
    },
    methods: {
        async onLogin() {
            await axios.post('http://systemk.app.ruk-com.cloud/adminLog', {
                id: this.form.id,
                password: this.form.password
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.msg);
                        console.log(res.data)
                        localStorage.setItem("dataUser", JSON.stringify(res.data.data));
                        window.location.href =  '../www/register.html';
                    }
                })
                .catch((err) => {
                    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                }) 
        }
    },
}).mount('#app')