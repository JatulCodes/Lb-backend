const enums = require("../../../json/enums.json");
const messages = require("../../../json/messages.json");
const ObjectId = require("mongodb").ObjectId;

// Retrieve and return all Question from the database.
module.exports = exports = {
  // route handler
  handler: async (req, res) => {
    const { user, questionId} = req;
    console.log("User------------------------", user);
    // const userData = utils.getHeaderFromToken(user);
    // console.log("UserData------------------------", userData.id);
    let everyone = await global.models.GLOBAL.ANSWER.find({
      question: ObjectId(questionId),
      createdBy: ObjectId(user),
    });



    console.log("User------------------------question", question);

    console.log("users-------", user);
    console.log("users-------", everyone);
    
  }
}
// try{

//   const post = await question.findById(req.params.id);

//     if(post.likes.filter(upVoteQuestion=>upVoteQuestion.user.toString()=== req.user.id).lenght>0){
//         return res.json(400).json({msg:'Question already liked'});   
//     }
//     post.likes.unshift({user:req.user.id});
//     await post.save();
//     res.json(post.likes);

    
// }catch(err){
//   console.error(err)
//   res.status.enums.INTERNAL_SERVER_ERROR
// }

    


// exports.downVoteQuestion = async (req,res)=>{
//   Post.findByIdAndUpdate(req.body.postId,{$pull:{likes:req.user._id}},
//    {new:true}).exec((err,result) => {
//       if(err){
//           return res.status(422).json({error:err})
//       }else{
//           res.json(result)
//       }
//   })
// }