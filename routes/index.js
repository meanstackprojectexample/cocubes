var express = require('express');
var router = express.Router();
var monk=require('monk');
var nodemailer=require('nodemailer');
var randomstring=require('randomstring');
var moment=require('moment');
var multer=require('multer');
var xlsxtojson = require('xlsx-to-json');
var xlstojson = require('xls-to-json');
var formidable = require('formidable');
var path = require('path');
var db=monk('localhost:27017/cocubes');
console.log('connected');
var Collection=db.get('Login');
var students=db.get('students');

router.get('/uploads', function(req, res, next) {
    res.render('uploads');
});

 router.post('/view',function(req,res){
  var id=req.body.no;
  console.log(id);
  students.find({"_id":id},function(err,docs)
  {
    res.send(docs);
    /*console.log(name);*/
 });   
});


router.get('/changepassword', function(req, res, next) {
    res.render('changepassword');
});
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});
router.get('/role', function(req, res, next) {
    if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
        
    
    
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"ITProduct":"Good to go"},function(err,docs1){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"ITProduct":"Need training"},function(err,docs2){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"ITProduct":"Need practice"},function(err,docs3){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"ITServices":"Good to go"},function(err,docs4){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"ITServices":"Need training"},function(err,docs5){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"ITServices":"Need practice"},function(err,docs6){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"KPO":"Good to go"},function(err,docs7){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"KPO":"Need training"},function(err,docs8){
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"KPO":"Need practice"},function(err,docs9){



     /*console.log(docs.length);*/
     var good_cnt=docs1.length;
     var train_cnt=docs2.length;
     var practice_cnt=docs3.length;
     res.locals.good_cnt=good_cnt;
    res.locals.train_cnt=train_cnt;
    res.locals.practice_cnt=practice_cnt;
    var good_cnt1=docs4.length;
     var train_cnt1=docs5.length;
     var practice_cnt1=docs6.length;
     res.locals.good_cnt1=good_cnt1;
    res.locals.train_cnt1=train_cnt1;
    res.locals.practice_cnt1=practice_cnt1;
    var good_cnt2=docs7.length;
     var train_cnt2=docs8.length;
     var practice_cnt2=docs9.length;
     res.locals.good_cnt2=good_cnt2;
    res.locals.train_cnt2=train_cnt2;
    res.locals.practice_cnt2=practice_cnt2;
    res.render('role');

 });
 });
 });
 });
});
 });
  });
   });
    });
     }
    else{
    res.render('index');
}

    
    
});

router.get('/role1', function(req, res, next) {
    if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
        

    students.find({ "College":req.session.user.COLLEGE, "ITProduct":"Good to go"},function(err,docs1){
     students.find({"College":req.session.user.COLLEGE,"ITProduct":"Need training"},function(err,docs2){
     students.find({"College":req.session.user.COLLEGE,"ITProduct":"Need practice"},function(err,docs3){
     students.find({"College":req.session.user.COLLEGE,"ITServices":"Good to go"},function(err,docs4){
     students.find({"College":req.session.user.COLLEGE,"ITServices":"Need training"},function(err,docs5){
     students.find({"College":req.session.user.COLLEGE,"ITServices":"Need practice"},function(err,docs6){
     students.find({"College":req.session.user.COLLEGE,"KPO":"Good to go"},function(err,docs7){
     students.find({"College":req.session.user.COLLEGE,"KPO":"Need training"},function(err,docs8){
     students.find({"College":req.session.user.COLLEGE,"KPO":"Need practice"},function(err,docs9){



     /*console.log(docs.length);*/
     var good_cnt3=docs1.length;
     var train_cnt3=docs2.length;
     var practice_cnt3=docs3.length;
     res.locals.good_cnt3=good_cnt3;
    res.locals.train_cnt3=train_cnt3;
    res.locals.practice_cnt3=practice_cnt3;
    var good_cnt4=docs4.length;
     var train_cnt4=docs5.length;
     var practice_cnt4=docs6.length;
     res.locals.good_cnt4=good_cnt4;
    res.locals.train_cnt4=train_cnt4;
    res.locals.practice_cnt4=practice_cnt4;
    var good_cnt5=docs7.length;
     var train_cnt5=docs8.length;
     var practice_cnt5=docs9.length;
     res.locals.good_cnt5=good_cnt5;
    res.locals.train_cnt5=train_cnt5;
    res.locals.practice_cnt5=practice_cnt5;
    res.render('role1');
    
 });
 });
 });
 });
});
 });
  });
   });
    });
     }
    else{
    res.render('index');
}

    
});

router.get('/role2', function(req, res, next) {
if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
        

    students.find({  "ITProduct":"Good to go"},function(err,docs1){
     students.find({"ITProduct":"Need training"},function(err,docs2){
     students.find({"ITProduct":"Need practice"},function(err,docs3){
     students.find({"ITServices":"Good to go"},function(err,docs4){
     students.find({"ITServices":"Need training"},function(err,docs5){
     students.find({"ITServices":"Need practice"},function(err,docs6){
     students.find({"KPO":"Good to go"},function(err,docs7){
     students.find({"KPO":"Need training"},function(err,docs8){
     students.find({"KPO":"Need practice"},function(err,docs9){

     var good_cnt6=docs1.length;
     var train_cnt6=docs2.length;
     var practice_cnt6=docs3.length;
    res.locals.good_cnt6=good_cnt6;
    res.locals.train_cnt6=train_cnt6;
    res.locals.practice_cnt6=practice_cnt6;
    var good_cnt7=docs4.length;
     var train_cnt7=docs5.length;
     var practice_cnt7=docs6.length;
     res.locals.good_cnt7=good_cnt7;
    res.locals.train_cnt7=train_cnt7;
    res.locals.practice_cnt7=practice_cnt7;
    var good_cnt8=docs7.length;
     var train_cnt8=docs8.length;
     var practice_cnt8=docs9.length;
     res.locals.good_cnt8=good_cnt8;
    res.locals.train_cnt8=train_cnt8;
    res.locals.practice_cnt8=practice_cnt8;
    res.render('role2');
    
 });
 });
 });
 });
});
 });
  });
   });
    });
     }
    else{
    res.render('index');
}

    
});



router.get('/index1',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
		res.render('index1');
	}
	else{
	res.render('index');
}
});
router.get('/aec',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var sum8=0,sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0;
    //var branch="$Branch";
    //var branch=["ECE","CSE","IT","EEE","MECH","CE","PTE","AGE"];
    //console.log(req.session.user.COLLEGE);
    students.find({$and:[{"College":"AEC"},{"Branch":"ECE"}]}, function(err,docs1){
    var acet1=docs1.length;
    for(i=0;i<docs1.length;i++){
    var scoreece=docs1[i].Score;
    sum1=sum1+scoreece;

}
var per1=Math.round((sum1*100)/(docs1.length*800));
 //console.log(per1);
   // console.log(sum1);
   res.locals.aec_ece=per1;
   console.log(per1);
    students.find({$and:[{"College":"AEC"},{"Branch":"CSE"}]}, function(err,docs2){
        var acet2=docs2.length;
    for(i=0;i<docs2.length;i++){
    var scorecse=docs2[i].Score;
    sum2=sum2+scorecse;
}
    var per2=Math.round((sum2*100)/(docs2.length*800));
    // console.log(per2);
    // console.log(sum2);
    res.locals.aec_cse=per2;
    console.log(per2);
    students.find({$and:[{"College":"AEC"},{"Branch":"EEE"}]}, function(err,docs3){
    var acet3=docs3.length;
    for(i=0;i<docs3.length;i++){
    var scoreeee=docs3[i].Score;
    sum3=sum3+scoreeee;

}
   var per3=Math.round((sum3*100)/(docs3.length*800));
    //console.log(per3);
    //console.log(sum3);
    res.locals.aec_eee=per3;  
    students.find({$and:[{"College":"AEC"},{"Branch":"MECH"}]}, function(err,docs4){
    var acet4=docs4.length;
    for(i=0;i<docs4.length;i++){
    var scoremech=docs4[i].Score;
    sum4=sum4+scoremech;

}
var per4=Math.round((sum4*100)/(docs4.length*800));
    //console.log(per4);
    //console.log(sum4);
    res.locals.aec_mech=per4;
    students.find({$and:[{"College":"AEC"},{"Branch":"CE"}]}, function(err,docs5){
    var acet5=docs5.length;
    for(i=0;i<docs5.length;i++){
    var scorecivil=docs5[i].Score;
    sum5=sum5+scorecivil;

}
var per5=Math.round((sum5*100)/(docs5.length*800));
 // console.log(per5);
    // console.log(sum5);
    res.locals.aec_civil=per5;
   console.log(per1);
    students.find({$and:[{"College":"AEC"},{"Branch":"IT"}]}, function(err,docs6){
    var acet6=docs6.length;
    for(i=0;i<docs6.length;i++){
    var scoreit=docs6[i].Score;
    sum6=sum6+scoreit;

}
var per6=Math.round((sum6*100)/(docs6.length*800));
    //console.log(per6);
    //console.log(sum6);
    res.locals.aec_it=per6;
    students.find({$and:[{"College":"AEC"},{"Branch":"PTE"}]}, function(err,docs7){
    var acet7=docs7.length;
    for(i=0;i<docs7.length;i++){
    var scorepte=docs7[i].Score;
    sum7=sum7+scorepte;

}
var per7=Math.round((sum7*100)/(docs7.length*800));
    //console.log(per7);
    //console.log(sum7);
    res.locals.aec_pte=per7;
    students.find({$and:[{"College":"AEC"},{"Branch":"AGE"}]}, function(err,docs8){
    var acet8=docs8.length;
    for(i=0;i<docs8.length;i++){
    var scoreage=docs8[i].Score;
    sum8=sum8+scoreage;

}
var per8=Math.round((sum8*100)/(docs8.length*800));
    //console.log(per8);
    //console.log(sum8);
    res.locals.aec_age=per8;
    res.render('aec');
    });
    });
    });
    });
    });
    });
    });
    });
    
    }
    else{
	res.render('index');
}
});
router.get('/acet',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    var sum8=0,sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0;
    //var branch="$Branch";
    //var branch=["ECE","CSE","IT","EEE","MECH","CE","PTE","AGE"];
    //console.log(req.session.user.COLLEGE);
    students.find({$and:[{"College":"ACET"},{"Branch":"ECE"}]}, function(err,docs1){
    var acet1=docs1.length;
    for(i=0;i<docs1.length;i++){
    var scoreece=docs1[i].Score;
    sum1=sum1+scoreece;

}
    var per1=Math.round((sum1*100)/(docs1.length*800));
    //console.log(per1);
    //console.log(sum1);
    res.locals.acet_ece=per1;
    students.find({$and:[{"College":"ACET"},{"Branch":"CSE"}]}, function(err,docs2){
        var acet2=docs2.length;
    for(i=0;i<docs2.length;i++){
    var scorecse=docs2[i].Score;
    sum2=sum2+scorecse;
}
    var per2=Math.round((sum2*100)/(docs2.length*800));
    //console.log(per2);
    //console.log(sum2);
    res.locals.acet_cse=per2;
    students.find({$and:[{"College":"ACET"},{"Branch":"EEE"}]}, function(err,docs3){
    var acet3=docs3.length;
    for(i=0;i<docs3.length;i++){
    var scoreeee=docs3[i].Score;
    sum3=sum3+scoreeee;

}
  var per3=Math.round((sum3*100)/(docs3.length*800));
    //console.log(per3);
    //console.log(sum3);
    res.locals.acet_eee=per3;
    students.find({$and:[{"College":"ACET"},{"Branch":"MECH"}]}, function(err,docs4){
    var acet4=docs4.length;
    for(i=0;i<docs4.length;i++){
    var scoremech=docs4[i].Score;
    sum4=sum4+scoremech;

}
var per4=Math.round((sum4*100)/(docs4.length*800));
    //console.log(per4);
    //console.log(sum4);
    res.locals.acet_mech=per4;
    students.find({$and:[{"College":"ACET"},{"Branch":"CE"}]}, function(err,docs5){
    var acet5=docs5.length;
    for(i=0;i<docs5.length;i++){
    var scorecivil=docs5[i].Score;
    sum5=sum5+scorecivil;

}
var per5=Math.round((sum5*100)/(docs5.length*800));
   // console.log(per5);
   // console.log(sum5);
   res.locals.acet_civil=per5;
    students.find({$and:[{"College":"ACET"},{"Branch":"IT"}]}, function(err,docs6){
    var acet6=docs6.length;
    for(i=0;i<docs6.length;i++){
    var scoreit=docs6[i].Score;
    sum6=sum6+scoreit;

}
var per6=Math.round((sum6*100)/(docs6.length*800));
    //console.log(per6);
    //console.log(sum6);
    res.locals.acet_it=per6;
    students.find({$and:[{"College":"ACET"},{"Branch":"PTE"}]}, function(err,docs7){
    var acet7=docs7.length;
    for(i=0;i<docs7.length;i++){
    var scorepte=docs7[i].Score;
    sum7=sum7+scorepte;

}
var per7=Math.round((sum7*100)/(docs7.length*800));
    //console.log(per7);
    //console.log(sum7);
    res.locals.acet_pte=per7;
    students.find({$and:[{"College":"ACET"},{"Branch":"AGE"}]}, function(err,docs8){
    var acet8=docs8.length;
    for(i=0;i<docs8.length;i++){
    var scoreage=docs8[i].Score;
    sum8=sum8+scoreage;

}
var per8=Math.round((sum8*100)/(docs8.length*800));
    //console.log(per8);
    //console.log(sum8);
    res.locals.acet_age=per8;
     res.render('acet');
    });
    });
    });
    });
    });
    });
    });
    });
   
}
	else{
	res.render('index');
}
});
router.get('/acoe',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var sum8=0,sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0;
    //var branch="$Branch";
    //var branch=["ECE","CSE","IT","EEE","MECH","CE","PTE","AGE"];
    //console.log(req.session.user.COLLEGE);
    students.find({$and:[{"College":"ACOE"},{"Branch":"ECE"}]}, function(err,docs1){
    var acet1=docs1.length;
    for(i=0;i<docs1.length;i++){
    var scoreece=docs1[i].Score;
    sum1=sum1+scoreece;

}
var per1=Math.round((sum1*100)/(docs1.length*800));
    //console.log(per1);
    //console.log(sum1);
    res.locals.acoe_ece=per1;
    students.find({$and:[{"College":"ACOE"},{"Branch":"CSE"}]}, function(err,docs2){
        var acet2=docs2.length;
    for(i=0;i<docs2.length;i++){
    var scorecse=docs2[i].Score;
    sum2=sum2+scorecse;
}
    var per2=Math.round((sum2*100)/(docs2.length*800));
    //console.log(per2);
    //console.log(sum2);
     res.locals.acoe_cse=per2;
    students.find({$and:[{"College":"ACOE"},{"Branch":"EEE"}]}, function(err,docs3){
    var acet3=docs3.length;
    for(i=0;i<docs3.length;i++){
    var scoreeee=docs3[i].Score;
    sum3=sum3+scoreeee;

}
var per3=Math.round((sum3*100)/(docs3.length*800));
    //console.log(per3);
    //console.log(sum3);
     res.locals.acoe_eee=per3;
    students.find({$and:[{"College":"ACOE"},{"Branch":"MECH"}]}, function(err,docs4){
    var acet4=docs4.length;
    for(i=0;i<docs4.length;i++){
    var scoremech=docs4[i].Score;
    sum4=sum4+scoremech;

}
var per4=Math.round((sum4*100)/(docs4.length*800));
    //console.log(per4);
    //console.log(sum4);
     res.locals.acoe_mech=per4;
    students.find({$and:[{"College":"ACOE"},{"Branch":"CE"}]}, function(err,docs5){
    var acet5=docs5.length;
    for(i=0;i<docs5.length;i++){
    var scorecivil=docs5[i].Score;
    sum5=sum5+scorecivil;

}
var per5=Math.round((sum5*100)/(docs5.length*800));
    //console.log(per5);
    //console.log(sum5);
     res.locals.acoe_civil=per5;
    students.find({$and:[{"College":"ACOE"},{"Branch":"IT"}]}, function(err,docs6){
    var acet6=docs6.length;
    for(i=0;i<docs6.length;i++){
    var scoreit=docs6[i].Score;
    sum6=sum6+scoreit;

}
var per6=Math.round((sum6*100)/(docs6.length*800));
    //console.log(per6);
    //console.log(sum6);
     res.locals.acoe_it=per6;
    students.find({$and:[{"College":"ACOE"},{"Branch":"PTE"}]}, function(err,docs7){
    var acet7=docs7.length;
    for(i=0;i<docs7.length;i++){
    var scorepte=docs7[i].Score;
    sum7=sum7+scorepte;

}
var per7=Math.round((sum7*100)/(docs7.length*800));
    //console.log(per7);
    //console.log(sum7);
     res.locals.acoe_pte=per7;
    students.find({$and:[{"College":"ACOE"},{"Branch":"AGE"}]}, function(err,docs8){
    var acet8=docs8.length;
    for(i=0;i<docs8.length;i++){
    var scoreage=docs8[i].Score;
    sum8=sum8+scoreage;

}
var per8=Math.round((sum8*100)/(docs8.length*800));
    //console.log(per8);
    //console.log(sum8);
     res.locals.acoe_age=per8;

    res.render('acoe');
	});
    });
    });
    });
    });
    });
    });
    });
}
	else{
	res.render('index');
}
});
router.get('/statistics',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    //console.log(req.session.user);
    

    
    //students.aggregate([{ $group: {"_id": {"College": "AEC","Batch": "$Batch"},"count": {$sum:1},"score":{$sum:"$Score"}}}], function(err,docs){
    var col3=[];
    var col4=[];
     var pastyear=moment().subtract(2,'years').format('YYYY');
        console.log(pastyear);
        var pastyear1=moment().subtract(1,'years').format('YYYY');
        console.log(pastyear1);
        var presentyear=moment().format('YYYY');
    /* for(j=0;j<batch.length;j++)
    {*/
    //students.aggregate([{ $group: {"_id": {"College": "AEC","Batch": "$Batch"},"count": {$sum:1},"score":{$sum:"$Score"}}}], function(err,docs){
   students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":req.session.user.BRANCH}]}, function(err,docs)
   {
         var sum=0,sum1=0;
         for(i=0;i<docs.length;i++)
         {
            var dbyear=docs[i].Batch;
        if(dbyear==pastyear)
        {
            col3.push(docs[i]);

        }
        if(dbyear==pastyear1)
        {
            col4.push(docs[i]);

        }
    }
       /* res.locals.col1=col1;
        res.locals.col2=col2;*/
        for(i=0;i<col3.length;i++)
        {
        sum1=sum1+col3[i].Score;
    } 
    console.log(sum1);

       
        for(i=0;i<col4.length;i++)
        {
       sum=sum+col4[i].Score;
   }
   console.log(sum);
   var cnt1=col3.length;
   var cnt2=col4.length;
   var per1=Math.round((sum1*100)/(cnt1*800));
   var per2=Math.round((sum*100)/(cnt2*800));
   console.log(per1);
   console.log(per2);
   res.locals.per1=per1;
   res.locals.per2=per2;
   res.render('statistics');
   });
	
}
	else{
	res.render('index');
}
});
router.get('/charts2',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var col6=[];
    var col7=[];
    var pastyear=moment().subtract(2,'years').format('YYYY');
    console.log(pastyear);
    var pastyear1=moment().subtract(1,'years').format('YYYY');
    console.log(pastyear1);
    var presentyear=moment().format('YYYY');
    /* for(j=0;j<batch.length;j++)
    {*/
    //students.aggregate([{ $group: {"_id": {"College": "AEC","Batch": "$Batch"},"count": {$sum:1},"score":{$sum:"$Score"}}}], function(err,docs){
   students.find({},function(err,docs)
   {
         var sum=0,sum1=0;
         for(i=0;i<docs.length;i++)
         {
            var dbyear=docs[i].Batch;
        if(dbyear==pastyear)
        {
            col6.push(docs[i]);

        }
        if(dbyear==pastyear1)
        {
            col7.push(docs[i]);

        }
    }
        res.locals.col6=col6;
        res.locals.col7=col7;
        for(i=0;i<col6.length;i++)
        {
        sum1=sum1+col6[i].Score;
    } 
    console.log(sum1);

       
        for(i=0;i<col7.length;i++)
        {
       sum=sum+col7[i].Score;
   }
   //console.log(sum);
   var cnt1=col6.length;
   var cnt2=col7.length;
   var per1=Math.round((sum1*100)/(cnt1*800));
   var per2=Math.round((sum*100)/(cnt2*800));
   //console.log(per1);
   //console.log(per2);
   res.locals.per1=per1;
   res.locals.per2=per2;
   
		res.render('charts2');
	
});
}
	else{
	res.render('index');

}
});
router.get('/statistics1',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var col1=[];
    var col2=[];
     var pastyear=moment().subtract(2,'years').format('YYYY');
        console.log(pastyear);
        var pastyear1=moment().subtract(1,'years').format('YYYY');
        console.log(pastyear1);
        var presentyear=moment().format('YYYY');
    /* for(j=0;j<batch.length;j++)
    {*/
    //students.aggregate([{ $group: {"_id": {"College": "AEC","Batch": "$Batch"},"count": {$sum:1},"score":{$sum:"$Score"}}}], function(err,docs){
   students.find({"College":req.session.user.COLLEGE},function(err,docs)
   {
         var sum=0,sum1=0;
         for(i=0;i<docs.length;i++)
         {
            var dbyear=docs[i].Batch;
        if(dbyear==pastyear)
        {
            col1.push(docs[i]);

        }
        if(dbyear==pastyear1)
        {
            col2.push(docs[i]);

        }
    }
        res.locals.col1=col1;
        res.locals.col2=col2;
        for(i=0;i<col1.length;i++)
        {
        sum1=sum1+col1[i].Score;
    } 
    console.log(sum1);

       
        for(i=0;i<col2.length;i++)
        {
       sum=sum+col2[i].Score;
   }
   console.log(sum);
   var cnt1=col1.length;
   var cnt2=col2.length;
   var per1=Math.round((sum1*100)/(cnt1*800));
   var per2=Math.round((sum*100)/(cnt2*800));
   //console.log(per1);
   //console.log(per2);
   res.locals.per1=per1;
   res.locals.per2=per2;
   res.render('statistics1');
   });
  /**/  
    //});
		
	}
	else{
	res.render('index');
}
});

router.get('/admin',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    // console.log(req.session.user.COLLEGE);
    // console.log(req.session.user.BRANCH);
     var pastyear=parseInt(moment().subtract(1,'years').format('YYYY'));
    var pastyear1=parseInt(moment().subtract(2,'years').format('YYYY'));
    var pastyear2=parseInt(moment().subtract(3,'years').format('YYYY'));
    students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"P","Year":2,"Batch":pastyear}, function(err,docs1){
    var pres1=docs1.length;
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"A","Year":2}, function(err,docs2){
    var abs1=docs2.length;
    //console.log(docs2);
    var total=pres1+abs1;
    var percent1=pres1*100/total;
    var present_2=Math.round(percent1);
    console.log(present_2);
    students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"P","Year":3,"Batch":pastyear1}, function(err,docs3){
    var pres2=docs3.length;
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"A","Year":3}, function(err,docs4){
    var abs2=docs4.length;
    var total2=pres2+abs2;
    var percent2=pres2*100/total2;
    var present_3=Math.round(percent2);
    //console.log(docs4); 
    students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"P","Year":4,"Batch":pastyear2}, function(err,docs5){
    var pres3=docs5.length;
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"A","Year":4}, function(err,docs6){
    var abs3=docs6.length;
    var total3=pres3+abs3;
    var percent3=pres3*100/total3;
    var present_4=Math.round(percent3);
    //console.log(docs6);
    var total_present=pres1+pres2+pres3;
    console.log(total_present);
    total_abscent=abs1+abs2+abs3;
    console.log(total_abscent);
    res.locals.total_present = total_present;
    res.locals.total_abscent = total_abscent;
    res.locals.present_2 =present_2 ;
    res.locals.present_3=present_3 ;
    res.locals.present_4=present_4 ;

    res.render('admin');
    });
    });
    });
    });
    });
    });
    
		
	}
	else{
	res.render('index');
}
});
router.get('/charts1/:branch',function(req,res)
{

	console.log("Current Page is "+req.params.branch);
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    var pastyear=parseInt(moment().subtract(1,'years').format('YYYY'));
    var pastyear1=parseInt(moment().subtract(2,'years').format('YYYY'));
    var pastyear2=parseInt(moment().subtract(3,'years').format('YYYY'));
 	console.log(req.params.branch);
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.params.branch,"Year":2,"Batch":pastyear}, function(err,docs1){
   	//vars[j] = docs.length;
    console.log(docs1.length);
    var press1=docs1.length;
    
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.params.branch,"Year":3,"Batch":pastyear1}, function(err,docs2){
    console.log(docs2.length);
    var press2=docs2.length;
    
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.params.branch,"Year":4,"Batch":pastyear2}, function(err,docs3){
    console.log(docs3.length);
    var press3=docs3.length;
    students.find({"College":req.session.user.COLLEGE,"Attendance":"A","Branch":req.params.branch,"Year":2}, function(err,docs4){
    console.log(docs4.length);
    var abs1=docs4.length;
    students.find({"College":req.session.user.COLLEGE,"Attendance":"A","Branch":req.params.branch,"Year":3}, function(err,docs5){
    console.log(docs5.length);
    var abs2=docs5.length;

    students.find({"College":req.session.user.COLLEGE,"Attendance":"A","Branch":req.params.branch,"Year":4}, function(err,docs6){
    console.log(docs6.length);
    var abs3=docs6.length;
    var tot_press=press1+press2+press3;
    var tot_abs=abs1+abs2+abs3;
    var per_2=(press1*100)/(press1+abs1);
    var per_3=(press2*100)/(press2+abs2);
    var per_4=(press3*100)/(press3+abs3);
    res.locals.tot_press=tot_press;
    res.locals.tot_abs=tot_abs; 
    res.locals.per_2=per_2;
    res.locals.per_3=per_3;
    res.locals.per_4=per_4; 
    //console.log(tot_press); 
    //console.log(tot_abs); 

    res.render('charts1');
    });
    });
    });
    });
    });
    });
    
   
}
    else{
	res.render('index');
    }
});
router.get('/admin1',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    //console.log(req.session.user);
    var sum8=0,sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0;
    //var branch="$Branch";
    //var branch=["ECE","CSE","IT","EEE","MECH","CE","PTE","AGE"];
    //console.log(req.session.user.COLLEGE);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"ECE"}]}, function(err,docs1){
    var acet1=docs1.length;
    for(i=0;i<docs1.length;i++){
    var scoreece=docs1[i].Score;
    sum1=sum1+scoreece;

}
var per1=Math.round((sum1*100)/(docs1.length*800));
 console.log(per1);
   // console.log(sum1);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"CSE"}]}, function(err,docs2){
        var acet2=docs2.length;
    for(i=0;i<docs2.length;i++){
    var scorecse=docs2[i].Score;
    sum2=sum2+scorecse;
}
    var per2=Math.round((sum2*100)/(docs2.length*800));
    console.log(per2);
    console.log(sum2);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"EEE"}]}, function(err,docs3){
    var acet3=docs3.length;
    for(i=0;i<docs3.length;i++){
    var scoreeee=docs3[i].Score;
    sum3=sum3+scoreeee;

}
var per3=Math.round((sum3*100)/(docs3.length*800));
 console.log(per3);
   // console.log(sum3);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"MECH"}]}, function(err,docs4){
    var acet4=docs4.length;
    for(i=0;i<docs4.length;i++){
    var scoremech=docs4[i].Score;
    sum4=sum4+scoremech;

}
var per4=Math.round((sum4*100)/(docs4.length*800));
 console.log(per4);
    //console.log(sum4);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"CE"}]}, function(err,docs5){
    var acet5=docs5.length;
    for(i=0;i<docs5.length;i++){
    var scorecivil=docs5[i].Score;
    sum5=sum5+scorecivil;

}
var per5=Math.round((sum5*100)/(docs5.length*800));
 console.log(per5);
    //console.log(sum5);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"IT"}]}, function(err,docs6){
    var acet6=docs6.length;
    for(i=0;i<docs6.length;i++){
    var scoreit=docs6[i].Score;
    sum6=sum6+scoreit;

}
var per6=Math.round((sum6*100)/(docs6.length*800));
 console.log(per6);
    console.log(sum6);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"PTE"}]}, function(err,docs7){
    var acet7=docs7.length;
    for(i=0;i<docs7.length;i++){
    var scorepte=docs7[i].Score;
    sum7=sum7+scorepte;

}
var per7=Math.round((sum7*100)/(docs7.length*800));
 console.log(per7);
    console.log(sum7);
    students.find({$and:[{"College":req.session.user.COLLEGE},{"Branch":"AGE"}]}, function(err,docs8){
    var acet8=docs8.length;
    for(i=0;i<docs8.length;i++){
    var scoreage=docs8[i].Score;
    sum8=sum8+scoreage;

}
var per8=Math.round((sum8*100)/(docs8.length*800));
 console.log(per8);
    console.log(sum8);
    res.locals.per1=per1;
    res.locals.per2=per2;
    res.locals.per3=per3;
    res.locals.per4=per4;
    res.locals.per5=per5;
    res.locals.per6=per6;
    res.locals.per7=per7;
    res.locals.per8=per8;
    res.render('admin1');
    });
    });
    });
    });
    });
    });
    });
    });
    
}
	else{
	res.render('index');
}
});
router.get('/admin2',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    res.render('admin2');
	}
	else{
	res.render('index');
}
});
router.get('/finalyear',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    var sum8=0,sum9=0,sum10=0,sum11=0;
    var pastyear2=parseInt(moment().subtract(3,'years').format('YYYY'));
    //console.log(req.session.user);
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.session.user.BRANCH,"Year":4,"Batch":pastyear2}, function(err,docs){
        for(i=0;i<docs.length;i++){
    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;
    sum8=sum8+Apt;
    sum9=sum9+Reas;
    sum10=sum10+Cod;
    sum11=sum11+Eng;
}
var tot8=sum8/(docs.length*100);
var tot9=sum9/(docs.length*100);
var tot10=sum10/(docs.length*100);
var tot11=sum11/(docs.length*100);
var per8=Math.round(tot8*100);
var per9=Math.round(tot9*100);
var per10=Math.round(tot10*100);
var per11=Math.round(tot11*100);
/*console.log(per8);
console.log(per9);
console.log(per10);
console.log(per11);*/
res.locals.per8=per8;
res.locals.per9=per9;
res.locals.per10=per10;
res.locals.per11=per11;
res.render('finalyear');
});	
	}
	else{
	res.render('index');
}
});
router.get('/thirdyear',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
     var sum4=0,sum5=0,sum6=0,sum7=0;
     var pastyear1=parseInt(moment().subtract(2,'years').format('YYYY'));
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.session.user.BRANCH,"Year":3,"Batch":pastyear1}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;

    sum4=sum4+Apt;
    sum5=sum5+Reas;
    sum6=sum6+Cod;
    sum7=sum7+Eng;
}
var tot4=sum4/(docs.length*100);
var tot5=sum5/(docs.length*100);
var tot6=sum6/(docs.length*100);
var tot7=sum7/(docs.length*100);
var per4=Math.round(tot4*100);
var per5=Math.round(tot5*100);
var per6=Math.round(tot6*100);
var per7=Math.round(tot7*100);
    	
        console.log(per4); 
         console.log(per5);
         console.log(per6);
         res.locals.per4=per4;
         res.locals.per5=per5;
         res.locals.per6=per6;
         res.locals.per7=per7;


         res.render('thirdyear');

	});
}

	else{
	res.render('index');
}
});
router.get('/secondyear',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var sum=0,sum1=0,sum2=0,sum3=0;
    var pastyear=parseInt(moment().subtract(1,'years').format('YYYY'));
     students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.session.user.BRANCH,"Year":2,"Batch":pastyear}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].English;
    sum=sum+Apt;
    sum1=sum1+Reas;
    sum2=sum2+Cod;
    sum3=sum3+Eng;
}
var tot=sum/(docs.length*100);
var tot1=sum1/(docs.length*100);
var tot2=sum2/(docs.length*100);
var tot3=sum3/(docs.length*100);
var perc=Math.round(tot*100);
var perc1=Math.round(tot1*100);
var perc2=Math.round(tot2*100);
var perc3=Math.round(tot3*100);
console.log(perc1);
console.log(perc2);
console.log(perc3);
res.locals.perc=perc;
res.locals.perc1=perc1;
res.locals.perc2=perc2;
res.locals.perc3=perc3;
    	res.render('secondyear');
    });
	}
	else{
	res.render('index');
}
});
router.get('/subjects1/:branch',function(req,res)
{
    console.log("Current Page is "+req.params.branch);
    var sum=0,sum1=0,sum2=0,sum3=0;
    var pastyear=parseInt(moment().subtract(1,'years').format('YYYY'));
    var pastyear1=parseInt(moment().subtract(2,'years').format('YYYY'));
    var pastyear2=parseInt(moment().subtract(3,'years').format('YYYY'));
	if(req.session && req.session.user)
    {
    res.locals.user = req.session.user;
    console.log(req.session.user);
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.params.branch,"Year":2,"Batch":pastyear}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;
    sum=sum+Apt;
    sum1=sum1+Reas;
    sum2=sum2+Cod;
    sum3=sum3+Eng;
}
var tot=sum/(docs.length*100);
var tot1=sum1/(docs.length*100);
var tot2=sum2/(docs.length*100);
var tot3=sum3/(docs.length*100);
var per=Math.round(tot*100);
var per1=Math.round(tot1*100);
var per2=Math.round(tot2*100);
var per3=Math.round(tot3*100);
console.log(per);
console.log(per1);
console.log(per2);
console.log(per3);
    var sum4=0,sum5=0,sum6=0,sum7=0;
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.params.branch,"Year":3,"Batch":pastyear1}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;
    sum4=sum4+Apt;
    sum5=sum5+Reas;
    sum6=sum6+Cod;
    sum7=sum7+Eng;
}
var tot4=sum4/(docs.length*100);
var tot5=sum5/(docs.length*100);
var tot6=sum6/(docs.length*100);
var tot7=sum7/(docs.length*100);
var per4=Math.round(tot4*100);
var per5=Math.round(tot5*100);
var per6=Math.round(tot6*100);
var per7=Math.round(tot7*100);
console.log(per4);
console.log(per5);
console.log(per6);
console.log(per7);
    var sum8=0,sum9=0,sum10=0,sum11=0;
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.params.branch,"Year":4,"Batch":pastyear2}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;
    sum8=sum8+Apt;
    sum9=sum9+Reas;
    sum10=sum10+Cod;
    sum11=sum11+Eng;
}
var tot8=sum8/(docs.length*100);
var tot9=sum9/(docs.length*100);
var tot10=sum10/(docs.length*100);
var tot11=sum11/(docs.length*100);
var per8=Math.round(tot8*100);
var per9=Math.round(tot9*100);
var per10=Math.round(tot10*100);
var per11=Math.round(tot11*100);
/*console.log(per8);
console.log(per9);
console.log(per10);
console.log(per11);*/
res.locals.per=per;
res.locals.per1=per1;
res.locals.per2=per2;
res.locals.per3=per3;
res.locals.per4=per4;
res.locals.per5=per5;
res.locals.per6=per6;
res.locals.per7=per7;
res.locals.per8=per8;
res.locals.per9=per9;
res.locals.per10=per10;
res.locals.per11=per11;
res.render('subjects1');

    });
     });
    });
		
    
}
    else{
    res.render('index');
    }
});

router.get('/charts',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    //console.log(req.session.user);
    students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"P","Year":2}, function(err,docs1){
    var pres1=docs1.length;
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"A","Year":2}, function(err,docs2){
    var abs1=docs2.length;
    var total=pres1+abs1;
    var percent1=pres1*100/total;
    var present_2=Math.round(percent1);
    //console.log(percent_2);
    students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"P","Year":3}, function(err,docs3){
    var pres2=docs3.length;
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"A","Year":3}, function(err,docs4){
    var abs2=docs4.length;
    var total2=pres2+abs2;
    var percent2=pres2*100/total2;
    var present_3=Math.round(percent2);
    //console.log(percent_3); 
    students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"P","Year":4}, function(err,docs5){
    var pres3=docs5.length;
     students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"A","Year":4}, function(err,docs6){
    var abs3=docs6.length;
    var total3=pres3+abs3;
    var percent3=pres3*100/total3;
    var present_4=Math.round(percent3);
    //console.log(percentround3);
    var total_present=pres1+pres2+pres3;
    //console.log(total_present);
    total_abscent=abs1+abs2+abs3;
    //console.log(total_abscent);
    res.locals.total_present = total_present;
    res.locals.total_abscent = total_abscent;
    res.locals.present_2 =present_2 ;
    res.locals.present_3=present_3 ;
    res.locals.present_4=present_4 ;

	res.render('charts');
    });
    });
    });
    });
    });
    });
    //students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH,"Attendance":"P","Year":4}, function(err,docs){
    //console.log(docs.length);
    //});
	}

	else{
	res.render('index');
}
});
router.get('/subjects',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var sum=0,sum1=0,sum2=0,sum3=0;
     students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.session.user.BRANCH,"Year":2}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;
    sum=sum+Apt;
    sum1=sum1+Reas;
    sum2=sum2+Cod;
    sum3=sum3+Eng;
}
var tot=sum/(docs.length*100);
var tot1=sum1/(docs.length*100);
var tot2=sum2/(docs.length*100);
var tot3=sum3/(docs.length*100);
var perc=Math.round(tot*100);
var perc1=Math.round(tot1*100);
var perc2=Math.round(tot2*100);
var perc3=Math.round(tot3*100);
    var sum4=0,sum5=0,sum6=0,sum7=0;
    students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.session.user.BRANCH,"Year":3}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;
    sum4=sum4+Apt;
    sum5=sum5+Reas;
    sum6=sum6+Cod;
    sum7=sum7+Eng;
}
var tot4=sum4/(docs.length*100);
var tot5=sum5/(docs.length*100);
var tot6=sum6/(docs.length*100);
var tot7=sum7/(docs.length*100);
var per4=Math.round(tot4*100);
var per5=Math.round(tot5*100);
var per6=Math.round(tot6*100);
var per7=Math.round(tot7*100);
    var sum8=0,sum9=0,sum10=0,sum11=0;
students.find({"College":req.session.user.COLLEGE,"Attendance":"P","Branch":req.session.user.BRANCH,"Year":4}, function(err,docs){
        for(i=0;i<docs.length;i++){

    var Apt=docs[i].Aptitude;
    var Reas=docs[i].Analytical;
    var Cod=docs[i].Coding;
    var Eng=docs[i].WrittenEnglish;
    sum8=sum8+Apt;
    sum9=sum9+Reas;
    sum10=sum10+Cod;
    sum11=sum11+Eng;
}
var tot8=sum8/(docs.length*100);
var tot9=sum9/(docs.length*100);
var tot10=sum10/(docs.length*100);
var tot11=sum11/(docs.length*100);
var per8=Math.round(tot8*100);
var per9=Math.round(tot9*100);
var per10=Math.round(tot10*100);
var per11=Math.round(tot11*100);
console.log(per11);
res.locals.perc=perc;
res.locals.perc1=perc1;
res.locals.perc2=perc2;
res.locals.perc3=perc3;
res.locals.per4=perc;
res.locals.per5=perc1;
res.locals.per6=perc2;
res.locals.per7=perc3;
res.locals.per8=per8;
res.locals.per9=per9;
res.locals.per10=per10;
res.locals.per11=per11;
res.render('subjects');
});
});
});
}
	else{
	res.render('index');
}
});
router.get('/tables',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    students.find({"College":req.session.user.COLLEGE,"Branch":req.session.user.BRANCH}, function(err,docs){
    res.locals.data = docs;
	res.render('tables');
	});
}

	else{
	res.render('index');
}
});
router.get('/tables2',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    students.find({}, function(err,docs){
    res.locals.data = docs;
		res.render('tables2');
});
	}
	else{
	res.render('index');
}
});
router.get('/ece',function(req,res)
{
	if(req.session && req.session.user){
    res.locals.user = req.session.user;
    var Branch = "ECE";
    var sum=0;
    console.log(req.session.user.COLLEGE);
    students.find({"College":req.session.user.COLLEGE,"Branch":Branch}, function(err,docs){
    for(var i=0;i<docs.length;i++){
    var count = docs.length;
    sum=sum+docs[i].Score;
    }
    var tot = sum/count;
    console.log(Math.round(tot/10));
    students.aggregate([{"score":{$sum:"$Score"}}], function(err,docs){
    res.render('ece');
	});
    });
}
	else{
	res.render('index');
}
});
router.get('/cse',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user.COLLEGE);
    students.aggregate([
     { $match: { 
         "College" : { "$exists" : true}, 
         "Batch" : { "$exists" : true}
       } 
     },
     { $group: {
         "_id": {
             "College": req.session.user.COLLEGE, 
             "Branch": "CSE"
         },
         "count": {$sum:1},
         "score":{$sum:"$Score"}
       }
     }
    ], function(err,docs){
    console.log(docs);
    });
		res.render('cse');
	}
	else{
	res.render('index');
}
});
router.get('/mech',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user.COLLEGE);
    students.aggregate([
     { $match: { 
         "College" : { "$exists" : true}, 
         "Batch" : { "$exists" : true}
       } 
     },
     { $group: {
         "_id": {
             "College": req.session.user.COLLEGE, 
             "Branch": "MECH"
         },
         "count": {$sum:1},
         "score":{$sum:"$Score"}
       }
     }
    ], function(err,docs){
    console.log(docs);
    });
		res.render('mech');
	}
	else{
	res.render('index');
}
});
router.get('/civil',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user.COLLEGE);
    students.aggregate([
     { $match: { 
         "College" : { "$exists" : true}, 
         "Batch" : { "$exists" : true}
       } 
     },
     { $group: {
         "_id": {
             "College": req.session.user.COLLEGE, 
             "Branch": "CIVIL"
         },
         "count": {$sum:1},
         "score":{$sum:"$Score"}
       }
     }
    ], function(err,docs){
    console.log(docs);
    });
		res.render('civil');
	}
	else{
	res.render('index');
}
});
router.get('/eee',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user.COLLEGE);
    students.aggregate([
     { $match: { 
         "College" : { "$exists" : true}, 
         "Batch" : { "$exists" : true}
       } 
     },
     { $group: {
         "_id": {
             "College": req.session.user.COLLEGE, 
             "Branch": "EEE"
         },
         "count": {$sum:1},
         "score":{$sum:"$Score"}
       }
     }
    ], function(err,docs){
    console.log(docs);
    });
		res.render('eee');
	}
	else{
	res.render('index');
	}
});
router.get('/it',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user.COLLEGE);
    students.aggregate([
     { $match: { 
         "College" : { "$exists" : true}, 
         "Batch" : { "$exists" : true}
       } 
     },
     { $group: {
         "_id": {
             "College": req.session.user.COLLEGE, 
             "Branch": "IT"
         },
         "count": {$sum:1},
         // "score":{$sum:"$Score"}
       }
     }
    ], function(err,docs){
    console.log(docs);
    });

		res.render('it');
	}
	else{
	res.render('index');
}
});
router.get('/tables1',function(req,res)
{
		if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
     students.find({"College":req.session.user.COLLEGE}, function(err,docs){
    res.locals.data = docs;
		res.render('tables1');
    });
	}
	else{
	res.render('index');
}
});
router.get('/forgot', function(req, res, next) {
    res.render('forgot');
});
router.get('/college', function(req, res, next) {
  if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var sum=0,sum1=0,sum2=0;
    
    students.find({"College":"AEC","Attendance":"P"},function(err,docs1)
    {
        students.find({"College":"ACET","Attendance":"P"},function(err,docs2){
        students.find({"College":"ACOE","Attendance":"P"},function(err,docs3){
        students.find({"College":"AEC","Attendance":"A"},function(err,docs4){
        students.find({"College":"ACET","Attendance":"A"},function(err,docs5){
        students.find({"College":"ACOE","Attendance":"A"},function(err,docs6){
        students.find({"College":"AEC","Attendance":"P"},function(err,docs7){
            for(i=0;i<docs7.length;i++)
            {
            var cnt=docs7[i].Score;

            if(cnt>550){
                sum=sum+1;
            }
            
    }
    students.find({"College":"ACET","Attendance":"P"},function(err,docs8){
            for(i=0;i<docs8.length;i++)
            {
            var cnt=docs8[i].Score;

            if(cnt>550){
                sum1=sum1+1;
            }
            
    }
    students.find({"College":"ACOE","Attendance":"P"},function(err,docs9){
            for(i=0;i<docs9.length;i++)
            {
            var cnt=docs9[i].Score;

            if(cnt>550){
                sum2=sum2+1;
            }
            
    }
    //console.log(sum);
       //console.log(percent);
       /* console.log(percent); */
        var count_Aec=docs1.length;
        var count_Acet=docs2.length;
        var count_Acoe=docs3.length;
        var count_Aec1=docs4.length;
        var count_Acet1=docs5.length;
        var count_Acoe1=docs6.length;
        var per_Aec=Math.round((count_Aec*100)/(count_Aec+count_Aec1));
        var per_Acet=Math.round((count_Acet*100)/(count_Acet+count_Acet1));
        var per_Acoe=Math.round((count_Acoe*100)/(count_Acoe+count_Acoe1));
        var per_Aec1=Math.round((count_Aec1*100)/(count_Aec+count_Aec1));
        var per_Acet1=Math.round((count_Acet1*100)/(count_Acet+count_Acet1));
        var per_Acoe1=Math.round((count_Acoe1*100)/(count_Acoe+count_Acoe1));
        var percent=Math.round((sum*100)/(docs7.length));
        var percent1=Math.round((sum1*100)/(docs8.length));
        var percent2=Math.round((sum2*100)/(docs9.length));

        res.locals.per_Aec=per_Aec;
        res.locals.per_Acet=per_Acet;
        res.locals.per_Acoe=per_Acoe;
        res.locals.per_Aec1=per_Aec1;
        res.locals.per_Acet1=per_Acet1;
        res.locals.per_Acoe1=per_Acoe1;
        res.locals.percent=percent;
        res.locals.percent1=percent1;
        res.locals.percent2=percent2;
/*console.log(percent);*/

        
        res.render('college');
        /*console.log(per_Aec);
        console.log(per_Acet);
        console.log(per_Acoe);*/
    });
    });
    });
    });
    });
    });
    });
    });
	})
	}

	else{
	res.render('index');
}
});
router.get('/year', function(req, res, next) {
  if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.user);
    var sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0,sum8=0,sum9=0;
    var pastyear=parseInt(moment().subtract(1,'years').format('YYYY'));
    var pastyear1=parseInt(moment().subtract(2,'years').format('YYYY'));
    var pastyear2=parseInt(moment().subtract(3,'years').format('YYYY'));
    //console.log(pastyear);
     students.find({"College":"AEC","Attendance":"P","Year":2,"Batch":pastyear}, function(err,docs1){
    for(i=0;i<docs1.length;i++){
    var score1=docs1[i].Score;
    sum1=sum1+score1;
    //console.log(sum1);
}
    //console.log(docs1);
var tot1=sum1/(docs1.length*800);
var perc1=Math.round(tot1*100);
//console.log(perc1);
//ACET 2Nd Year
students.find({"College":"ACET","Attendance":"P","Year":2,"Batch":pastyear}, function(err,docs2){
    for(i=0;i<docs2.length;i++){
    var score2=docs2[i].Score;
    sum2=sum2+score2;
}
var tot2=sum2/(docs2.length*800);
var perc2=Math.round(tot2*100);
//console.log(perc2);
//ACOE 2nd year
students.find({"College":"ACOE","Attendance":"P","Year":2,"Batch":pastyear}, function(err,docs3){
    for(i=0;i<docs3.length;i++){
    var score3=docs3[i].Score;
    sum3=sum3+score3;
}
var tot3=sum3/(docs3.length*800);
var perc3=Math.round(tot3*100);
//console.log(perc3);
//AEC 3rdyear

students.find({"College":"AEC","Attendance":"P","Year":3,"Batch":pastyear1}, function(err,docs4){
    for(i=0;i<docs4.length;i++){
    var score4=docs4[i].Score;
    sum4=sum4+score4;
}
var tot4=sum4/(docs4.length*800);
var perc4=Math.round(tot4*100);
//console.log(docs4);
//ACET 3RD year
students.find({"College":"ACET","Attendance":"P","Year":3,"Batch":pastyear1}, function(err,docs5){
    for(i=0;i<docs5.length;i++){
    var score5=docs5[i].Score;
    sum5=sum5+score5;
}
var tot5=sum5/(docs5.length*800);
var perc5=Math.round(tot5*100);
//console.log(perc5);
//ACOE 3RD YEAR
students.find({"College":"ACOE","Attendance":"P","Year":3,"Batch":pastyear1}, function(err,docs6){
    for(i=0;i<docs6.length;i++){
    var score6=docs6[i].Score;
    sum6=sum6+score6;
}
var tot6=sum6/(docs6.length*800);
var perc6=Math.round(tot6*100);
///console.log(perc6);
//AEC 4TH YEAR
students.find({"College":"AEC","Attendance":"P","Year":4,"Batch":pastyear2}, function(err,docs7){
    for(i=0;i<docs7.length;i++){
    var score7=docs7[i].Score;
    sum7=sum7+score7;
}
var tot7=sum7/(docs7.length*800);
var perc7=Math.round(tot7*100);
//console.log(perc7);
students.find({"College":"ACOE","Attendance":"P","Year":4,"Batch":pastyear2}, function(err,docs8){
    for(i=0;i<docs8.length;i++){
    var score8=docs8[i].Score;
    sum8=sum8+score8;
}
var tot8=sum8/(docs8.length*800);
var perc8=Math.round(tot8*100);
//console.log(perc8);
//ACOE 4TH YEAR
students.find({"College":"AEC","Attendance":"P","Year":4,"Batch":pastyear2}, function(err,docs9){
    for(i=0;i<docs9.length;i++){
    var score9=docs9[i].Score;
    sum9=sum9+score9;
}
var tot9=sum9/(docs9.length*800);
var perc9=Math.round(tot9*100);
res.locals.perc1=perc1;
res.locals.perc2=perc2;
res.locals.perc3=perc3;
res.locals.perc4=perc4;
res.locals.perc5=perc5;
res.locals.perc6=perc6;
res.locals.perc7=perc7;
res.locals.perc8=perc8;
res.locals.perc9=perc9;
//console.log(perc9);
res.render('year');
});
});
});
});
});
});
});
});
});
	}
	else{
	res.render('index');
}
});
router.get('/branch', function(req, res, next) {
  if(req.session && req.session.user){
    res.locals.user = req.session.user;
    var sum8=0,sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0,sum8=0,sum9=0,sum10=0,sum11=0,sum12=0,sum13=0,sum14=0,sum15=0,sum16=0,sum17=0,sum18=0;
    //var branch="$Branch";
    //var branch=["ECE","CSE","IT","EEE","MECH","CE","PTE","AGE"];
    //console.log(req.session.user.COLLEGE);
    students.find({$and:[{"College":"AEC"},{"Branch":"ECE"}]}, function(err,docs1){
    var ece1=docs1.length;
    for(i=0;i<docs1.length;i++){
    var scoreece=docs1[i].Score;
    sum1=sum1+scoreece;

}
    //console.log(per1);
    //console.log(sum1);
    students.find({$and:[{"College":"ACET"},{"Branch":"ECE"}]}, function(err,docs2){
    var ece2=docs2.length;
    for(i=0;i<docs2.length;i++){
    var scoreece2=docs2[i].Score;
    sum2=sum2+scoreece2;
}
    //console.log(per2);
    //console.log(sum2);
    students.find({$and:[{"College":"ACOE"},{"Branch":"ECE"}]}, function(err,docs3){
    var ece3=docs1.length;
    for(i=0;i<docs3.length;i++){
    var scoreece3=docs3[i].Score;
    sum3=sum3+scoreece3;

}
var per1=Math.round((sum1*100)/(docs1.length*800));
var per2=Math.round((sum2*100)/(docs2.length*800));
var per3=Math.round((sum3*100)/(docs3.length*800));
res.locals.per1=per1;
res.locals.per2=per2;
res.locals.per3=per3;
//console.log(per3);
//console.log(sum3);
//CSE Score
 students.find({$and:[{"College":"AEC"},{"Branch":"CSE"}]}, function(err,docs4){
    var cse1=docs4.length;
    for(i=0;i<docs4.length;i++){
    var scorecse=docs4[i].Score;
    sum4=sum4+scorecse;

}
    //console.log(per1);
    //console.log(sum1);
    students.find({$and:[{"College":"ACET"},{"Branch":"CSE"}]}, function(err,docs5){
    var cse2=docs5.length;
    for(i=0;i<docs5.length;i++){
    var scorecse2=docs5[i].Score;
    sum5=sum5+scorecse2;
}
    //console.log(per2);
    //console.log(sum2);
    students.find({$and:[{"College":"ACOE"},{"Branch":"CSE"}]}, function(err,docs6){
    var cse3=docs6.length;
    for(i=0;i<docs6.length;i++){
    var scorecse3=docs6[i].Score;
    sum6=sum6+scorecse3;

}
var per4=Math.round((sum4*100)/(docs4.length*800));
var per5=Math.round((sum5*100)/(docs5.length*800));
var per6=Math.round((sum6*100)/(docs6.length*800));
res.locals.per4=per4;
res.locals.per5=per5;
res.locals.per6=per6;
//branch IT
students.find({$and:[{"College":"AEC"},{"Branch":"IT"}]}, function(err,docs7){
    var it1=docs7.length;
    for(i=0;i<docs7.length;i++){
    var scoreit1=docs7[i].Score;
    sum7=sum7+scoreit1;

}
    //console.log(per1);
    //console.log(sum1);
    students.find({$and:[{"College":"ACET"},{"Branch":"IT"}]}, function(err,docs8){
    var it2=docs8.length;
    for(i=0;i<docs8.length;i++){
    var scoreit2=docs8[i].Score;
    sum8=sum8+scoreit2;
}
    //console.log(per2);
    //console.log(sum2);
    students.find({$and:[{"College":"ACOE"},{"Branch":"IT"}]}, function(err,docs9){
    var it3=docs9.length;
    for(i=0;i<docs9.length;i++){
    var scoreit3=docs9[i].Score;
    sum9=sum9+scoreit3;

}
var per7=Math.round((sum7*100)/(docs7.length*800));
var per8=Math.round((sum8*100)/(docs8.length*800));
var per9=Math.round((sum9*100)/(docs9.length*800));
res.locals.per7=per7;
res.locals.per8=per8;
res.locals.per9=per9;
//EEE Score
students.find({$and:[{"College":"AEC"},{"Branch":"EEE"}]}, function(err,docs10){
    var eee1=docs10.length;
    for(i=0;i<docs10.length;i++){
    var scoreeee=docs10[i].Score;
    sum10=sum10+scoreeee;

}
    //console.log(per1);
    //console.log(sum1);
    students.find({$and:[{"College":"ACET"},{"Branch":"EEE"}]}, function(err,docs11){
    var eee2=docs11.length;
    for(i=0;i<docs11.length;i++){
    var scoreeee2=docs11[i].Score;
    sum11=sum11+scoreeee2;
}
    //console.log(per2);
    //console.log(sum2);
    students.find({$and:[{"College":"ACOE"},{"Branch":"EEE"}]}, function(err,docs12){
    var eee3=docs12.length;
    for(i=0;i<docs12.length;i++){
    var scoreeee3=docs12[i].Score;
    sum12=sum12+scoreeee3;

}
var per10=Math.round((sum10*100)/(docs10.length*800));
var per11=Math.round((sum11*100)/(docs11.length*800));
var per12=Math.round((sum12*100)/(docs12.length*800));
res.locals.per10=per10;
res.locals.per11=per11;
res.locals.per12=per12;
//console.log(per3);
//console.log(sum3);
//PTE Score
 students.find({$and:[{"College":"AEC"},{"Branch":"CE"}]}, function(err,docs13){
    var ce1=docs13.length;
    for(i=0;i<docs13.length;i++){
    var scorece1=docs13[i].Score;
    sum13=sum13+scorece1;

}
    students.find({$and:[{"College":"ACET"},{"Branch":"CE"}]}, function(err,docs14){
    var ce2=docs14.length;
    for(i=0;i<docs14.length;i++){
    var scorece2=docs14[i].Score;
    sum14=sum14+scorece2;
}
    students.find({$and:[{"College":"ACOE"},{"Branch":"CE"}]}, function(err,docs15){
    var ce3=docs15.length;
    for(i=0;i<docs15.length;i++){
    var scorece3=docs15[i].Score;
    sum15=sum15+scorece3;

}
var per13=Math.round((sum13*100)/(docs13.length*800));
var per14=Math.round((sum14*100)/(docs14.length*800));
var per15=Math.round((sum15*100)/(docs15.length*800));
res.locals.per13=per13;
res.locals.per14=per14;
res.locals.per15=per15;
//branch MECH
students.find({$and:[{"College":"AEC"},{"Branch":"MECH"}]}, function(err,docs16){
    var mech1=docs16.length;
    for(i=0;i<docs16.length;i++){
    var scoremech1=docs16[i].Score;
    sum16=sum16+scoremech1;

}
    students.find({$and:[{"College":"ACET"},{"Branch":"MECH"}]}, function(err,docs17){
    var mech2=docs17.length;
    for(i=0;i<docs17.length;i++){
    var scoremech2=docs17[i].Score;
    sum17=sum17+scoremech2;
}
    students.find({$and:[{"College":"ACOE"},{"Branch":"MECH"}]}, function(err,docs18){
    var mech3=docs18.length;
    for(i=0;i<docs18.length;i++){
    var scoremech3=docs18[i].Score;
    sum18=sum18+scoremech3;

}
var per16=Math.round((sum16*100)/(docs16.length*800));
var per17=Math.round((sum17*100)/(docs17.length*800));
var per18=Math.round((sum18*100)/(docs18.length*800));
res.locals.per16=per16;
res.locals.per17=per17;
res.locals.per18=per18;

res.render('branch');   
});
});
});
 });
});     
});
  });
});
});
});
});
});
 });
});
});
  });
});
});
	}
	else{
	res.render('index');
}
});
router.post('/index1',function(req,res)
{
	
	var username=req.body.username;
	var password=req.body.password;
	/*var role = req.body.Role;*/
	console.log(username);
	console.log(password);
	/*console.log(role);*/
	Collection.findOne({"ID":username,"PASSWORD":password},function(err,docs)
	{
	console.log(docs);
		if(!docs)
		{
			console.log("mismatch");
			res.render('index',{err:"Invalid username or Password"});

		}
		else if (docs) {
			delete docs.password
			req.session.user = docs;
			console.log("success");
			res.redirect("/index1")
		}
		else
		{
			console.log(err);
		}
	});

});	
router.get('/logout', function(req,res){
	req.session.reset();
	res.redirect('/');
})
router.post('/admin',function(req,res)
{
	res.redirect('admin')
})
// router.post('/index1',function(req,res)
// {
// 	res.redirect('index1')
// })
router.post('/forgot',function(req,res)
{
	var email=req.body.name;
	console.log(email);
	var otp=randomstring.generate(5);
	var msg="<html><head></head><body><b>"+otp+"</b></body></html>";
	Collection.update({"EMAIL":email},{$set:{"PASSWORD":otp}});
	var transporter = nodemailer.createTransport({
  service: 'gmail.com',
  auth: {
    user: 'siriv1997@gmail.com',
    pass: 'Madadluv2@',
  }
});

var mailOptions = {
  from: 'siriv1997@gmail.com',
  to: req.body.name,
  subject: 'Sending Email using Node.js',
  html:msg,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  
});
res.redirect('/');
});
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
});
var upload = multer({ //multer settings
                    storage: storage,
                    fileFilter : function(req, file, callback) { //file filter
                        if (['xls', 'xlsx','csv'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                            return callback(new Error('Wrong extension type'));
                        }
                        callback(null, true);
                    }
}).single('file');
router.post('/uploads', function(req, res) {
        var exceltojson;
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            /** Multer gives us file info in req.file object */
            if(!req.file){
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            /** Check the extension of the incoming file and 
             *  use the appropriate module
             */
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            }
            console.log(req.file.path);
            try {
                exceltojson({
                    input: req.file.path,
                    output: "out.json", //since we don't need output.json
                    lowerCaseHeaders:false
                }, function(err,result){
                    if(err) {
                        return res.send('error in importing data');
                    } 
                    console.log(result);
                    saveData(result);
                    res.redirect("/admin2");
            });
            } catch (e){
                res.send("Corupted excel file");
            } 
       });
});

function saveData(data) {
 console.log(data);
for(var i=0;i<data.length;i++){
students.update({$and:[{"RollNumber":data[i].RollNumber},{"Sem":parseInt(data[i].Sem)}]},{$set:{"Analytical":parseInt(data[i].Analytical),"Aptitude":parseInt(data[i].Aptitude),"Batch":parseInt(data[i].Batch),"Branch":data[i].Branch,"CoCubesId":parseInt(data[i].CoCubesId),"Coding":parseInt(data[i].Coding),"College":data[i].College,"ComputerFundamental":parseInt(data[i].ComputerFundamental),"CorePlant":data[i].CorePlant,"CoreRD":data[i].CoreRD,"Degree":data[i].Degree,"Domain":parseInt(data[i].Domain),"English":parseInt(data[i].English),"ITESBPO":data[i].ITESBPO,"ITProduct":data[i].ITProduct,"ITServices":data[i].ITServices,"KPO":data[i].KPO,"NetworkAdministrator":data[i].NetworkAdministrator,"Operations":data[i].Operations,"Personality":data[i].Personality,"Quantitative":parseInt(data[i].Quantitative),"RollNumber":data[i].RollNumber,"Sales":data[i].Sales,"Score":parseInt(data[i].Score),"SoftwareTesting":data[i].SoftwareTesting,"StudentName":data[i].StudentName,"WrittenEnglish":parseInt(data[i].WrittenEnglish),"Year":parseInt(data[i].Year),"Attendance":data[i].Attendance,"Sem":parseInt(data[i].Sem)}},{upsert:true},{multi:true}, function(err, docs ) { 
    //console.log(docs);
    if(err)
    console.log(err);

});

}
}

router.post('/changepassword',function(req,res)
{
    var PASSWORD = req.body.Password;
    console.log(PASSWORD),
    Collection.update({"ID":req.session.user.ID},{$set:{PASSWORD:PASSWORD}},function(err,docs)
    {
        res.redirect("/logout");
    });
})
module.exports = router;
