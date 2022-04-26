Vue.createApp({
    data() {
        return {
            form: {
                idStd: "",
                id: ""
            }
        }
    },
    methods: {
        async onLogin() {
            await axios.post('http://systemk.app.ruk-com.cloud/login', {
                idStd: this.form.idStd,
                id: this.form.id
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.msg);
                        console.log(res.data)
                        localStorage.setItem("dataUser", JSON.stringify(res.data.data));
                        window.location.href = '../menu.html';
                    }
                })
                .catch((err) => {
                    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                }) 
        }
    },
}).mount('#app')