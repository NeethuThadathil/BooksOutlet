function addBook(){
    book=bknamee.value
    if(book in localStorage){
        alert('Book already exist!')
    }
    else{
        bookid=bkid.value
        author=bkauthor.value
        details=bkdscrpn.value
        user={bookid,book,author,details}
        localStorage.setItem(book,JSON.stringify(user))
        window.location='search.html'
    }
}
function cnt(){
    window.location='search.html'
}
function search(){
    books=bname.value
    if(books in localStorage){
        userObj=JSON.parse(localStorage.getItem(books))
        output.innerHTML=`Book Name:${userObj.book}`
        no.innerHTML=`Book ID:${userObj.bookid}`
        au.innerHTML=` Book Author:${userObj.author} `
        de.innerHTML=`Book Details:${userObj.details}`
   }
   else{
    al.innerHTML=`The Book doesnot Exist!`
   }
    
}