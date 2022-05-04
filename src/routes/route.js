
const router = require('express').Router();
const modelUser = require('../models/user');
const modeladmin = require('../models/admin');
const modelcourse = require('../models/course');
const modelpoint = require('../models/point');
const modelcheck = require('../models/check');
var i;




const comparePassword = async (pass_login, pass_user) => {
    return await bcrypt.compare(pass_login, pass_user);
};


router.post('/register', async (req, res) => {
    try {

        let data = req.body;

        let user = new modelUser({
            id: data.id,
            idStd: data.idStd,
            name: data.name,
            branch: data.branch,
        });
        
        user.save();
        res.status(200).json({ 
            msg: 'สมัครสมาชิกสำเร็จ', 
            data: user 
        });

    } catch (err) { 

        res.status(400).json({ 
            msg: 'สมัครสมาชิกไม่สำเร็จ', 
            err: err.message 
        });

    }
});

router.post('/addsubject', async (req, res) => {
    try {

        let data = req.body;

        let subject = new  modelcourse({
            idCourse: data.idCourse,
            course: data.course,
        });
        
        subject.save();
        res.status(200).json({ 
            msg: 'เพิ่มวิชาสำเร็จ', 
            data: subject 
        });

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เพิ่มไม่สำเร็จ', 
            err: err.message 
        });

    }
});



router.post('/updatepoint', async (req, res) => {
    try {
 
        let data = req.body;
       
        const update=await modelpoint.findOneAndUpdate({'idStd': data.idStd,'idCourse':data.idCourse},{
             $set:{
                 'point':data.point
             }
         });
      
            res.status(200).json({ 
                msg: 'เข้าสู่ระบบสำเร็จ', 
                data: update,
            });
            return;
        

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});





router.put('/addpoint', async (req, res) => {
    try {
        var today  = new Date();
        let data = req.body;
        const start = today.toLocaleString("en-US");
        const user =  modelpoint.find({'idStd': data.idStd,'idCourse':data.idCourse});
     

        let score = new modelpoint({
            idStd:data.idStd,
            idCourse:data.idCourse,
            point:data.point,   
            Date:start   ,  
          
        });
       
           score.save();
            res.status(200).json({ 
            msg: 'เพิ่มคะแนนสำเร็จ', 
            data: score 
            
        });   
   
    } catch (err) { 

        res.status(400).json({ 
            msg: 'เพิ่มไม่สำเร็จ', 
            err: err.message 
        });

    }
});

router.post('/updatecheck', async (req, res) => {
    try {
 
        let data = req.body;
       
        const update=await modelcheck.findOneAndUpdate({'idStd': data.idStd,'idCourse':data.idCourse},{
             $set:{
                 'point':data.point
             }
         });
      
            res.status(200).json({ 
                msg: 'เข้าสู่ระบบสำเร็จ', 
                data: update,
            });
            return;
        

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});



router.post('/addcheck', async (req, res) => {
    try {

        let data = req.body;

        let check = new modelcheck({
            idStd:data.idStd,
            idCourse:data.idCourse,
            check:data.check,       
        });
        
        check.save();
        res.status(200).json({ 
            msg: 'เพิ่มคะแนนสำเร็จ', 
            data: check 
        });

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เพิ่มไม่สำเร็จ', 
            err: err.message 
        });

    }
});




router.post('/login', async (req, res) => {
    try {
 
        let data = req.body;
       
        const user = await modelUser.findOne({'idStd': data.idStd,'id':data.id});
        console.log(user);
       i=data.idStd;
        if (user) {
            user.id = undefined;
            delete user.id;
            req.session.dataUser = user;
            res.status(200).json({ 
                msg: 'เข้าสู่ระบบสำเร็จ', 
                data: user,
            });
            return;
        } else {
            throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        } 

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});


router.get('/checkUserLogin', async (req, res) => {
    try {

        res.status(200).json(req.session.dataUser);
        return;
    } catch (err) {

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});

router.post('/showUser', async (req, res) => {
    try {
 
        let data = req.body;

        const user = await modelUser.findOne({'idStd':i});
        
        if (user) {
            
          
            res.status(200).json({ 
                msg: 'เข้าสู่ระบบสำเร็จ'+i, 
                data1: user,
            });
            return;
        } else {
            throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        } 

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});


router.get('/result', async (req, res) => {
    try {
 
        let data = req.body;
        
        const point = await modelpoint.find({'idStd':i});
        console.log(data);
        
        if (point) {
              
            res.status(200).json({ 
                msg: 'เข้าสู่ระบบสำเร็จ'+i, 
                data1: point,
            });
            return;
        } else {
            throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        } 

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});


router.get('/showCheck', async (req, res) => {
    try {
 
        let data = req.body;

        const check = await modelcheck.find({'idStd':i});
        console.log(data);
        
        if (check) {
              
            res.status(200).json({ 
                msg: 'เข้าสู่ระบบสำเร็จ'+i, 
                data1: check,
            });
            return;
        } else {
            throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        } 

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});




router.get('/checkUserLogin', async (req, res) => {
    try {

        res.status(200).json(req.session.dataUser);
        return;
    } catch (err) {

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});


router.get('/logout', async (req, res) => {
    try {

        req.session.dataUser = null;
        delete req.session.dataUser;
        res.status(200).json({
            msg: 'ออกจากระบบสำเร็จ'
        })
        
    } catch (err) {

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});

router.post('/adminLog', async (req, res) => {
    try {
 
        let data = req.body;

        const user = await modeladmin.findOne({'id': data.id,'password':data.password});
        
        if (user) {
            user.password = undefined;
            delete user.password;
            req.session.dataUser = user;
            res.status(200).json({ 
                msg: 'เข้าสู่ระบบสำเร็จ', 
                data: user,
            });
            return;
        } else {
            throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        } 

    } catch (err) { 

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});

router.get('/checkAdminLog', async (req, res) => {
    try {

        res.status(200).json(req.session.dataUser);
        return;
    } catch (err) {

        res.status(400).json({ 
            msg: 'เกิดข้อผิดพลาด', 
            err: err.message 
        });

    }
});





module.exports = router;