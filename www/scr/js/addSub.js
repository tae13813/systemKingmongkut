Vue.createApp({
    data() {
        return {
            form: {
                idCourse:"" ,
                course:"" ,
               
            }
        }
    },
    methods: {
        async onAddSub() {
           
                await axios.post('http://localhost:3000/addsubject', {
                    idCourse: this.form.idCourse,
                    course: this.form.course,
                })
                    .then((res) => {
                      //  alert(idCourse,course);
                        if (res.status === 200) {
                            alert(res.data.msg);
                          
                        }
                    })
                    .catch((err) => {
                        alert('ไม่ถูกต้อง')
                    }) 
            
            
        }
    },
}).mount('#app')