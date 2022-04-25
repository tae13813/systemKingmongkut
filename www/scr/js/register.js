Vue.createApp({
    data() {
        return {
            form: {
                id: "",
                idStd: "",
                name: "",
                branch: ""
            }
        }
    },
    methods: {
        async onRegister() {
           
                await axios.post('http://localhost:3000/register', {
                    id: this.form.id,
                    idStd: this.form.idStd,
                    name: this.form.name,
                    branch:this.form.branch,
                })
                    .then((res) => {
                        if (res.status === 200) {
                            alert(res.data.msg);
                            window.location.href = './../../login.html';
                        }
                    })
                    .catch((err) => {
                        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                    }) 
            
            
        }
    },
}).mount('#app')