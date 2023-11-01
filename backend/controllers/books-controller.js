const Book = require('../model/Book');

const getAllBooks = async(req,res,next)=>{
    // This route will provide all the books
    let books;
    try{
        books = await Book.find();
    }
    catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message:"No products found"});
    }
    else{
        return res.status(200).json({books});
    }
}

const getById = async(req,res,next) =>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No Book found!"});
    }
    return res.status(200).json({book});
}


const addBooks = async(req,res,next)=>{
    let book;
    const {name,author,description,price,available,image} = req.body;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save()
    }catch(err){
        console.log(err);
    }

    if(!book){
        res.status(500).json({message:"Unable to add"});
    }
    res.status(201).json({book});

}

const updateBook = async(req,res,next)=>{
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,author,description,available,price,image
        })
        book = await book.save()
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        res.status(404).json({message:"Unable to Update by this ID"});
    }
    res.status(200).json({book});
}


const deleteBook = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to delete product by this ID"});
    }
    return res.status(200).json({book,message:"Book Deleted Succesfully"});
}



exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook