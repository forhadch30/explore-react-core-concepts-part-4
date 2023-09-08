export default function Friend({friend}) {
     const{name,email} = friend;
    return (
        <div className="box">
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
        </div>
    )
}


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/forhadch30/explore-react-core-concepts-part-4.git
git push -u origin main