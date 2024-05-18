export class Comment {
  id: number;
  
  authorId:number;

  user: string;

  title: string;

  createdOn: Date;

  constructor(props?: Partial<Comment>) {
    Object.assign(this, props);
  }
}
