const router = require('express').Router();
const modelUser = require('../models/user');
const modeladmin = require('../models/admin');
const bcrypt = require('bcrypt');

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


router.post('/login', async (req, res) => {
    try {
 
        let data = req.body;

        const user = await modelUser.findOne({'idStd': data.idStd,'id':data.id});
        
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