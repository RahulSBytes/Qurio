
interface Author{
    _id : string,
    name : string
}

interface Tags {
    _id:string,
    name: string
}



interface Question {
    _id: string,
    title: string,
    description:
      string,
    tags: Tags[],
    author: Author,
    upvotes: number,
    answers: number,
    views: number,
    createdAt: string,
  }



  export { Question }